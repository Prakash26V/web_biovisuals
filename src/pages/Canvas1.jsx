
// ---- droap image in canvas module feature ---------------------------------------------------
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Stage, Layer, Image, Circle } from 'react-konva';
import Konva from 'konva';
import useImage from 'use-image';
import { Resizable } from 're-resizable';

const URLImage = ({ image, onDragStart, onDragEnd, size, handleResizeStop }) => {
    const [img] = useImage(image.src);

    return (
        <>
            <Resizable
                size={size}
                onResizeStop={handleResizeStop}
            >
                <Image
                    image={img}
                    x={image.x}
                    y={image.y}
                    offsetX={img ? img.width / 2 : 0}
                    offsetY={img ? img.height / 2 : 0}
                    draggable
                    onDragStart={onDragStart}
                    onDragEnd={onDragEnd}
                    stroke={image.isActive ? 'blue' : 'black'} // Highlight active image
                    strokeWidth={image.isActive ? 3 : 1}
                    height={size.height}
                    width={size.width}
                />
            </Resizable>
        </>
    );
};

const CanvasPageOne = () => {
    const dragUrl = React.useRef();
    const stageRef = React.useRef();
    const [images, setImages] = React.useState([]);
    const [history, setHistory] = React.useState([]);
    const [currentStep, setCurrentStep] = React.useState(-1);

    const handleDragStart = (e, image) => {
        const updatedImages = images.map((img) =>
            img === image ? { ...img, isActive: true } : img
        );
        setImages(updatedImages);
        saveToHistory(updatedImages);
    };

    const handleDragEnd = (e, image) => {
        dragUrl.current = e.target.src;

        const updatedImages = images.map((img) => ({ ...img, isActive: false }));
        setImages(updatedImages);
        saveToHistory(updatedImages);
    };

    const saveToHistory = (updatedImages) => {
        const newHistory = history.slice(0, currentStep + 1);
        newHistory.push(updatedImages);
        setHistory(newHistory);
        setCurrentStep(newHistory.length - 1);
    };

    const handleUndo = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
            setImages(history[currentStep - 1]);
        }
    };

    const handleRedo = () => {
        if (currentStep < history.length - 1) {
            setCurrentStep(currentStep + 1);
            setImages(history[currentStep + 1]);
        }
    };


    const handleExport = () => {
        // Get the data URL of the stage as an image
        const dataURL = stageRef.current.toDataURL();
        // Create a download link
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'canvas_image.png';
        document.body.appendChild(link);
        // Trigger the download
        link.click();
        document.body.removeChild(link);
    };


    const handleDownload = () => {
        const dataURL = stageRef.current.toDataURL();
        const a = document.createElement('a');
        a.href = dataURL;
        a.download = 'canvas_image.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };


    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.key === 'z') {
                handleUndo();
            } else if (event.ctrlKey && event.key === 'y') {
                handleRedo();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentStep, handleUndo, handleRedo]);


    const [size, setSize] = useState({ width: 200, height: 150 });

    const handleResizeStop = (e, direction, ref, d) => {
        setSize({
            width: size.width + d.width,
            height: size.height + d.height,
        });
    };


    return (
        <div>


            <br /><br /><br />
            <img
                alt="lion"
                // src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                src='data:image/jpeg;base64,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'
                draggable="true"
                onDragStart={(e) => {
                    dragUrl.current = e.target.src;
                }}
            />
            {/*  */}
            <div>
                <button onClick={handleUndo} disabled={currentStep <= 0}>
                    Undo
                </button>
                <button onClick={handleRedo} disabled={currentStep >= history.length - 1}>
                    Redo
                </button>
                <button onClick={handleDownload}>
                    Download Canvas
                </button>
                <button onClick={handleExport}>
                    Export
                </button>
            </div>
            {/*  */}
            <div
                onDrop={(e) => {
                    e.preventDefault();
                    stageRef.current.setPointersPositions(e);
                    const updatedImages = [
                        ...images,
                        {
                            ...stageRef.current.getPointerPosition(),
                            src: dragUrl.current,
                            isActive: false,
                        },
                    ];
                    setImages(updatedImages);
                    saveToHistory(updatedImages);
                }}
                onDragOver={(e) => e.preventDefault()}
            >
                <Stage
                    width={window.innerWidth}
                    height={window.innerHeight}
                    style={{ border: '1px solid grey' }}
                    ref={stageRef}
                >
                    <Layer>
                        {images.map((image, index) => (
                            <URLImage
                                key={index}
                                image={image}
                                onDragStart={(e) => handleDragStart(e, image)}
                                onDragEnd={(e) => handleDragEnd(e, image)}
                                size={size}
                                handleResizeStop={handleResizeStop}
                            />
                        ))}
                    </Layer>
                </Stage>
            </div>

        </div>
    );
};

export default CanvasPageOne;