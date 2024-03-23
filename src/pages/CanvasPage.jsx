import React, { useRef, useEffect, useState, useCallback } from "react";
import { TextField, Grid, InputAdornment, IconButton, Slide } from "@mui/material";
import question from '../assets/Images/question.png'
import bell from '../assets/Images/bell.png'
import profile from '../assets/Images/profile.png'
import rightarrow from '../assets/Images/rightarrow.png'
import leftarrow from '../assets/Images/leftarrow.png'
import size from '../assets/Images/size.png'
import colorfiller from '../assets/Images/colorfiller.png'
import img from '../assets/Images/img.png'
import grid from '../assets/Images/grid.png'
import eye from '../assets/Images/eye.png'
import person from '../assets/Images/person.png'
import gallery from '../assets/Images/gallery.png'
import play from '../assets/Images/play.png'
import iconskaicon from '../assets/Images/iconskaicon.png'
import templateskaicon from '../assets/Images/templateskaicon.png'
import brusheskaicon from '../assets/Images/brusheskaicon.png'
import uplodekaicon from '../assets/Images/uplodekaicon.png'
import logoutkaicon from '../assets/Images/logoutkaicon.png'
import settingskaicon from '../assets/Images/settingskaicon.png'
import presentkaicon from '../assets/Images/presentkaicon.png'
import lineicons from '../assets/Images/lineicons.png'
import shapesicon from '../assets/Images/shapesicon.png'
import texticons from '../assets/Images/texticons.png'
import arrowicons from '../assets/Images/arrowicons.png'
import groupicons from '../assets/Images/groupicons.png'
import gangg from '../assets/Images/gangg.png'
import Ruler from "@scena/react-ruler";
import ClickImage from "./ClickImage";
import { Stage, Layer, Rect as KonvaRect, Image as KonvaImage, Circle as KonvaCircle, Line as KonvaLine, Arrow as KonvaArrow, Transformer, } from 'react-konva';
import useImage from 'use-image';
import { calc } from "antd/es/theme/internal";
import { getCatogories, getChildCatogories, getIcon, getSubCatogories } from "../utils/api";
import Asset36 from "../assets/Images/Asset36.png"
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate } from "react-router-dom";
import { image_url } from "../utils/service";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import signout from '../assets/Images/signout.png'
import  settings from '../assets/Images/settings.png'
import upgrade from '../assets/Images/upgrade.png'
import axios from "axios";
import Logout from "./Logout";

export const PAINT_OPTIONS = [
  { id: "select" },
  { id: "rectangle" },
  { id: "circle" },
  { id: "arrow" },
  { id: "scribble" },
];

const URLImage = ({ image, onDragStart, onDragEnd, onClick }) => {
  const [img] = useImage(image.src);

  return (
    <KonvaImage
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
      onClick={onClick}
    />
  );
};


const downloadURI = (uri, name) => {
  const link = document.createElement('a');
  link.download = name;
  link.href = uri || '';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const SIZE = 500;

const CanvasPage = () => {
  const dragUrl = React.useRef();

  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [images, setImages] = React.useState([]);
  const rulerRef = useRef();
  // const stageRef = useRef();
  const [color, setColor] = useState('#000');
  const [image, setImage] = useState([]);
  const [droppedImages, setDroppedImages] = useState([]);
  const [history, setHistory] = useState([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [layers, setLayers] = useState([[]]);
  const [currentLayerIndex, setCurrentLayerIndex] = useState(0);
  const [drawAction, setDrawAction] = useState("select");
  const [scribbles, setScribbles] = useState([]);
  const [rectangles, setRectangles] = useState([]);
  const [circles, setCircles] = useState([]);
  const [arrows, setArrows] = useState([]);
  // const [shapes, setShapes] = useState([]);
  const [openFile, setOpenFile] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [openView, setOpenView] = useState(false)
  const [openSlides, setOpenSlides] = useState(false)
  const [openShare, setOpenShare] = useState(false)
  const [openSpellcheck, setOpenSpellcheck] = useState(false)
  const [openHelp, setOpenHelp] = useState(false)
  const [isHovered, setHovered] = useState(false);
  const [showLinesOptions, setShowLinesOptions] = useState(false);
  const [showShapesOptions, setShowShapesOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  // const [lines, setLines] = useState([]);
  const [drawlines, setDrawlines] = useState([])
  const [shapes, setShapes] = useState([]);
  const [text, setText] = useState('');
  const [drawMode, setDrawMode] = useState('lines'); // Default mode is lines
  const [isDrawing, setIsDrawing] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [featureIcon, setFeatureIcon] = useState(false)
  const [featureTemplate, setFeatureTemplate] = useState(false)
  const [featureBrush, setFeatureBrush] = useState(false)
  const [featureUpload, setFeatureUpload] = useState(false)
  const [featurePresent, setFeaturePresent] = useState(false)
  const [icons, setIcons] = useState([])
  const [displayCatogories, setDisplayCategoriesData] = useState([])
  const [displaySubCatogories, setDisplaySubCategoriesData] = useState([])
  const [displayChildCatogories, setDisplayChildCategoriesData] = useState([])
  const [displayIcons, setDisplayIconsData] = useState([])
  const [hideCategories, setHideCategories] = useState(false);
  const [hideSubCategories, setHideSubCategories] = useState(false);
  const [hideChildCategories, setHideChildCategories] = useState(false);
  const [hideIcons, setHideIcons] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate()
  const open = Boolean(anchorEl);

  const handleVolumeChange = (event) => {
    setVolume(event.target.valueAsNumber);
  };

  const handleIconClick = (imageSrc) => {
    alert('icon page')
    const newDroppedImages = [
      ...droppedImages,
      {
        x: 100,
        y: 100,
        src: imageSrc,
      },
    ];
    setDroppedImages(newDroppedImages);
  };

  const handleDragStart = (e, image) => {
    const updatedImages = images.map((img) =>
      img === image ? { ...img, isActive: true } : img
    );
    setImages(updatedImages);
    saveToHistory(updatedImages);
  };

  const handleDragEnd = (e, image) => {
    const updatedImages = images.map((img) => ({ ...img, isActive: false }));
    setImages(updatedImages);
    saveToHistory(updatedImages);
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

  const uploadInputRef = useRef();

  const saveToHistory = (updatedImages) => {
    const newHistory = history.slice(0, currentStep + 1);
    newHistory.push(updatedImages);
    setHistory(newHistory);
    setCurrentStep(newHistory.length - 1);
  };

  const handleImageTransform = (index, newProperties) => {
    // Update the image properties in the images state array
    const updatedImages = images.map((image, i) => (i === index ? { ...image, ...newProperties } : image));
    setImages(updatedImages);
    saveToHistory(updatedImages);
  };

  useEffect(() => {
    const handleScroll = () => {
      setOpenFile(false)
      setOpenEdit(false)
      setOpenView(false)
      setOpenSlides(false)
      setOpenShare(false)
      setOpenSpellcheck(false)
      setOpenHelp(false)

      setFeatureIcon(false)
      setFeatureTemplate(false)
      setFeatureBrush(false)
      setFeatureUpload(false)
      setFeaturePresent(false)
      const scrollPosition = window.scrollY;
      // Adjust the value based on when you want the header to become fixed
      const threshold = 50;
      setIsHeaderFixed(scrollPosition > threshold);
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // const canvas = canvasRef.current;
    // const ctx = canvas.getContext('2d');
    // setContext(ctx);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      // window.removeEventListener("resize", handleResize);
    };


  }, []);

  // const fetchAndSetIcons = async () => {
  //   if (!icons.length) {
  //     const fetchedIcons = await getIcon();
  //     console.log("data icon", fetchedIcons)
  //     setIcons(fetchedIcons);
  //   }
  // };

  const fetchCatogories = async () => {
    if (!displayCatogories.length) {
      const fetchedCatogories = await getCatogories();
      console.log("data", fetchedCatogories)
      setDisplayCategoriesData(fetchedCatogories);
    }
    setHideCategories(true);
    setHideSubCategories(false);
    setHideChildCategories(false);
    setHideIcons(false);
  };

  console.log("hideCategories", hideCategories)
  console.log("hideSubCategories", hideSubCategories)
  console.log("hideChildCategories", hideChildCategories)
  console.log("hideIcons", hideIcons)

  const handleCategoryClick = async () => {
    if (!displaySubCatogories.length) {
      const fetchedSubCatogories = await getSubCatogories();
      console.log("data", fetchedSubCatogories)
      setDisplaySubCategoriesData(fetchedSubCatogories);
    }
    // Close other sections
    setHideCategories(false);
    setHideSubCategories(true);
    setHideChildCategories(false);
    setHideIcons(false);
  };

  const handleSubCategoryClick = async () => {
    if (!displayChildCatogories.length) {
      const fetchedChildCatogories = await getChildCatogories();
      console.log("data", fetchedChildCatogories)
      setDisplayChildCategoriesData(fetchedChildCatogories);
    }
    // Close other sections
    setHideCategories(false);
    setHideSubCategories(false);
    setHideChildCategories(true);
    setHideIcons(false);
  };

  const handleChildCategoryClick = async () => {
    if (!displayIcons.length) {
      const fetchedIcon = await getIcon();
      console.log("data", fetchedIcon)
      setDisplayIconsData(fetchedIcon);
    }
    // Close other sections
    setHideCategories(false);
    setHideSubCategories(false);
    setHideChildCategories(false);
    setHideIcons(true);
  };

  const handleFeatureOpenClose = async (menu) => {
    console.log(menu)
    switch (menu) {
      // get icon here move unnessary thing
      case "icon":
        setFeatureIcon(!featureIcon)
        setFeatureTemplate(false)
        setFeatureBrush(false)
        setFeatureUpload(false)
        setFeaturePresent(false)
        await
          // fetchIcons();
          fetchCatogories();
        break;

      case "template":
        setFeatureIcon(false)
        setFeatureTemplate(!featureTemplate)
        setFeatureBrush(false)
        setFeatureUpload(false)
        setFeaturePresent(false)
        break;

      case "brush":
        setFeatureIcon(false)
        setFeatureTemplate(false)
        setFeatureBrush(!featureBrush)
        setFeatureUpload(false)
        setFeaturePresent(false)
        break;

      default:
        console.log("Default")
    }

  }

  const handleOpenClose = (menu) => {
    console.log(menu)
    switch (menu) {
      case "file":
        setOpenFile(!openFile)
        setOpenEdit(false)
        setOpenView(false)
        setOpenSlides(false)
        setOpenShare(false)
        setOpenSpellcheck(false)
        setOpenHelp(false)
        break;

      case "edit":
        setOpenFile(false)
        setOpenEdit(!openEdit)
        setOpenView(false)
        setOpenSlides(false)
        setOpenShare(false)
        setOpenSpellcheck(false)
        setOpenHelp(false)
        break;

      case "view":
        setOpenFile(false)
        setOpenEdit(false)
        setOpenView(!openView)
        setOpenSlides(false)
        setOpenShare(false)
        setOpenSpellcheck(false)
        setOpenHelp(false)
        break;

      case "slides":
        setOpenFile(false)
        setOpenEdit(false)
        setOpenView(false)
        setOpenSlides(!openSlides)
        setOpenShare(false)
        setOpenSpellcheck(false)
        setOpenHelp(false)
        break;

      case "share":
        setOpenFile(false)
        setOpenEdit(false)
        setOpenView(false)
        setOpenSlides(false)
        setOpenShare(!openShare)
        setOpenSpellcheck(false)
        setOpenHelp(false)
        break;

      case "spellcheck":
        setOpenFile(false)
        setOpenEdit(false)
        setOpenView(false)
        setOpenSlides(false)
        setOpenShare(false)
        setOpenSpellcheck(!openSpellcheck)
        setOpenHelp(false)
        break;

      case "help":
        setOpenFile(false)
        setOpenEdit(false)
        setOpenView(false)
        setOpenSlides(false)
        setOpenShare(false)
        setOpenSpellcheck(false)
        setOpenHelp(!openHelp)
        break;

      default:
        console.log("Default")
    }

  }

  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreenToggle = () => {
    const element = document.getElementById('fullscreen-content');

    if (!document.fullscreenElement) {
      // Enter full-screen mode
      element.requestFullscreen().then(() => {
        setIsFullScreen(true);
      });
    } else {
      // Exit full-screen mode
      document.exitFullscreen().then(() => {
        setIsFullScreen(false);
      });
    }
  };

  const stageWidthInVW = 79; // Set your desired width in viewport width units

  // Calculate the width in pixels based on the viewport width
  const stageWidth = (window.innerWidth * stageWidthInVW) / 100;
  const [selectedImageBg, setSelectedImageBg] = useState('url("data:image/jpeg;base64,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")')

  // const stageStyle = {
  //   background: selectedImageBg,
  //   backgroundSize: 'cover', // Adjust as needed
  // };

  // const handleMouseDown = () => {
  //   setIsDrawing(true);
  //   setDrawlines([]);
  // };

  // const handleMouseUp = () => {
  //   setIsDrawing(false);

  //   if (drawMode === 'lines' && lines.length > 1) {
  //     const newShape = {
  //       id: shapes.length + 1,
  //       lines: lines.flat(),
  //       stroke: 'black',
  //       strokeWidth: 5,
  //       type: 'line',
  //     };
  //     setShapes((prevShapes) => [...prevShapes, newShape]);
  //   } else if (drawMode === 'arrow' && lines.length > 1) {
  //     const newShape = {
  //       id: shapes.length + 1,
  //       points: lines.flat(),
  //       stroke: 'black',
  //       strokeWidth: 5,
  //       type: 'arrow',
  //     };
  //     setShapes((prevShapes) => [...prevShapes, newShape]);
  //   } else if (drawMode === 'triangle' && lines.length > 2) {
  //     const newShape = {
  //       id: shapes.length + 1,
  //       sides: 3,
  //       radius: Math.sqrt(Math.pow(lines[1][0] - lines[0][0], 2) + Math.pow(lines[1][1] - lines[0][1], 2)),
  //       x: lines[0][0],
  //       y: lines[0][1],
  //       fill: 'black',
  //       type: 'triangle',
  //     };
  //     setShapes((prevShapes) => [...prevShapes, newShape]);
  //   } else if (drawMode === 'text' && text) {
  //     const position = stageRef.current.getPointerPosition();
  //     const newText = {
  //       id: shapes.length + 1,
  //       x: position.x,
  //       y: position.y,
  //       text,
  //       fill: 'black',
  //       fontSize: 18,
  //       type: 'text',
  //     };
  //     setShapes((prevShapes) => [...prevShapes, newText]);
  //   }
  // };

  // const handleMouseMove = (e) => {
  //   if (!isDrawing) return;

  //   const stage = stageRef.current;
  //   const position = stage.getPointerPosition();

  //   setDrawlines([...drawlines, [position.x, position.y]]);
  // };

  const handleLines = () => {
    setShowLinesOptions(!showLinesOptions);
    setSelectedOption(null); // Reset selected option when toggling the options
  };

  const handleShapes = () => {
    setShowShapesOptions(!showShapesOptions);
    setSelectedOption(null); // Reset selected option when toggling the options
  };

  const handleText = () => {
    setDrawMode('text');
  };

  const handleBrush = () => {
    // Set draw mode to brush for erasing
    setDrawMode('brush');
  };

  // in canvas add layers---------------------------------------------------------------------
  const handleLayers = () => {

  }

  //---------------------------------------------------------------------------------------

  const onImportImageSelect = useCallback((e) => {
    if (e.target.files?.[0]) {
      const imageUrl = URL.createObjectURL(e.target.files?.[0]);
      const image = new Image(SIZE / 2, SIZE / 2);
      image.src = imageUrl;
      // setImage(image);
      setImage((prevImage) => [...prevImage, image]);
    }
    e.target.files = null;
  }, []);

  const fileRef = useRef(null);
  const onImportImageClick = useCallback(() => {
    fileRef?.current && fileRef?.current?.click();
  }, []);

  const stageRef = useRef(null);

   // Example export function
   const exportAndSaveTemplate = async () => {
    const dataUri = stageRef?.current?.toDataURL({ pixelRatio: 3 });
    downloadURI(dataUri, 'image.jpg');

    // const img = new Image();
    // img.onload = () => {
    //   // Now, img.src can be used without tainting the canvas
    //   // Use the img in your Konva layer
    // };
    // img.crossOrigin = 'Anonymous'; // Make sure to set crossOrigin
    // img.src = 'data:image/png;base64, ...'; // Replace ... with your Base64-encoded image data

    // try {
    //   // Assume you have an API endpoint to save the template
    //   await axios.post('http://localhost:5000/api/user/saveTemplate', {
    //     // name,
    //     imageData: dataUri,
    //     // Add other relevant data you want to save
    //   });

    //   console.log('Template saved successfully');
    // } catch (error) {
    //   console.error('Error saving template:', error);
    //   // Handle error
    // }
  };

  // const onExportClick = useCallback(() => {
  //   const dataUri = stageRef?.current?.toDataURL({ pixelRatio: 3 });
  //   // Check if dataUri is not null or undefined before attempting to download
  //   // if (dataUri) {
  //   //   downloadURI(dataUri, 'image.jpg');
  //   // } else {
  //   //   console.error('Unable to export image. Check stageRef and rendering.');
  //   // }
  //   downloadURI(dataUri, 'image.jpg');
  // }, []);

  // const onExportClick = useCallback(() => {
  //   // Ensure that stageRef and its current property are available
  //   if (stageRef && stageRef.current) {
  //     // Disable image smoothing for better export quality
  //     stageRef.current.imageSmoothingEnabled = false;
  
  //     // Get data URI
  //     const dataUri = stageRef.current.toDataURL({ pixelRatio: 3 });
  
  //     // Check if dataUri is not null or undefined before attempting to download
  //     if (dataUri) {
  //       // Convert the data URI to a Blob
  //       const blob = dataURItoBlob(dataUri);
  
  //       // Create a download link
  //       const link = document.createElement('a');
  //       link.href = URL.createObjectURL(blob);
  //       link.download = 'image.jpg';
  
  //       // Trigger a click on the link to start the download
  //       document.body.appendChild(link);
  //       link.click();
  
  //       // Remove the link from the document
  //       document.body.removeChild(link);
  //     } else {
  //       console.error('Unable to export image. Check stageRef and rendering.');
  //     }
  //   } else {
  //     console.error('stageRef is not available.');
  //   }
  // }, [stageRef]);
  
  // // Function to convert data URI to Blob
  // function dataURItoBlob(dataURI) {
  //   const byteString = atob(dataURI.split(',')[1]);
  //   const ab = new ArrayBuffer(byteString.length);
  //   const ia = new Uint8Array(ab);
  //   for (let i = 0; i < byteString.length; i++) {
  //     ia[i] = byteString.charCodeAt(i);
  //   }
  //   return new Blob([ab], { type: 'image/jpeg' });
  // }
  

  // const onExportClick = useCallback(() => {
  //   // Ensure that stageRef and its current property are available
  //   if (stageRef && stageRef.current) {
  //     const dataUri = stageRef.current.toDataURL({ pixelRatio: 3 });
  
  //     // Check if dataUri is not null or undefined before attempting to download
  //     if (dataUri) {
  //       // Download the image
  //       downloadURI(dataUri, 'image.jpg');
  //     } else {
  //       console.error('Unable to export image. Check stageRef and rendering.');
  //     }
  //   } else {
  //     console.error('stageRef is not available.');
  //   }
  // }, [stageRef]);

  // const onExportClick = useCallback(() => {
  //   // Ensure that stageRef and its current property are available
  //   if (stageRef && stageRef.current) {
  //     // Disable image smoothing for better export quality
  //     stageRef.current.imageSmoothingEnabled = false;
  
  //     const dataUri = stageRef.current.toDataURL({ pixelRatio: 3 });
  
  //     // Check if dataUri is not null or undefined before attempting to download
  //     if(dataUri) {
  //       // Download the image
  //       downloadURI(dataUri, 'image.jpg');
  //     } else {
  //       console.error('Unable to export image. Check stageRef and rendering.');
  //     }
  //   } else {
  //     console.error('stageRef is not available.');
  //   }
  // }, [stageRef]);
  

  const onClear = useCallback(() => {
    setRectangles([]);
    setCircles([]);
    setScribbles([]);
    setArrows([]);
    setImage(undefined);
  }, []);

  const isPaintRef = useRef(false);

  const onStageMouseUp = useCallback(() => {
    isPaintRef.current = false;
  }, []);

  const currentShapeRef = useRef();

  const onStageMouseDown = useCallback(
    (e) => {
      if (drawAction === "select") return;
      isPaintRef.current = true;
      const stage = stageRef?.current;
      const pos = stage?.getPointerPosition();
      const x = pos?.x || 0;
      const y = pos?.y || 0;
      const id = uuidv4();
      currentShapeRef.current = id;

      switch (drawAction) {
        case "scribble": {
          setScribbles((prevScribbles) => [
            ...prevScribbles,
            {
              id,
              points: [x, y],
              color,
            },
          ]);
          break;
        }
        case "circle": {
          setCircles((prevCircles) => [
            ...prevCircles,
            {
              id,
              radius: 1,
              x,
              y,
              color,
            },
          ]);
          break;
        }
        case "rectangle": {
          setRectangles((prevRectangles) => [
            ...prevRectangles,
            {
              id,
              height: 1,
              width: 1,
              x,
              y,
              color,
            },
          ]);
          break;
        }
        case "arrow": {
          setArrows((prevArrows) => [
            ...prevArrows,
            {
              id,
              points: [x, y, x, y],
              color,
            },
          ]);
          break;
        }
      }
    },
    [drawAction, color]
  );

  const onStageMouseMove = useCallback(() => {
    if (drawAction === "select" || !isPaintRef.current) return;

    const stage = stageRef?.current;
    const id = currentShapeRef.current;
    const pos = stage?.getPointerPosition();
    const x = pos?.x || 0;
    const y = pos?.y || 0;

    switch (drawAction) {
      case "scribble": {
        setScribbles((prevScribbles) =>
          prevScribbles?.map((prevScribble) =>
            prevScribble.id === id
              ? {
                ...prevScribble,
                points: [...prevScribble.points, x, y],
              }
              : prevScribble
          )
        );
        break;
      }
      case "circle": {
        setCircles((prevCircles) =>
          prevCircles?.map((prevCircle) =>
            prevCircle.id === id
              ? {
                ...prevCircle,
                radius:
                  ((x - prevCircle.x) * 2 + (y - prevCircle.y) * 2) ** 0.5,
              }
              : prevCircle
          )
        );
        break;
      }
      case "rectangle": {
        setRectangles((prevRectangles) =>
          prevRectangles?.map((prevRectangle) =>
            prevRectangle.id === id
              ? {
                ...prevRectangle,
                height: y - prevRectangle.y,
                width: x - prevRectangle.x,
              }
              : prevRectangle
          )
        );
        break;
      }
      case "arrow": {
        setArrows((prevArrows) =>
          prevArrows.map((prevArrow) =>
            prevArrow.id === id
              ? {
                ...prevArrow,
                points: [prevArrow.points[0], prevArrow.points[1], x, y],
              }
              : prevArrow
          )
        );
        break;
      }
    }
  }, [drawAction]);

  const transformerRef = useRef(null);

  const onShapeClick = useCallback(
    (e) => {
      if (drawAction !== "select") return;
      const currentTarget = e.currentTarget;
      transformerRef?.current?.node(currentTarget);
    },
    [drawAction]
  );

  const isDraggable = drawAction === "select";

  const onBgClick = useCallback(
    (e) => {
      transformerRef?.current?.nodes([]);
    },
    [drawAction]
  );


  const handleResize = () => {
    // alert("vfvfd")
    setDrawAction('select');
  };

  const handleScribbleClick = () => {
    setDrawAction("scribble"); // Set the drawing action to "scribble"
  };

  const handleDrawTriangle = () => {
    setDrawAction('triangle');
  };

  const handleArrow = () => {
    setDrawAction('arrow');
  }

  const handleDrawCircle = () => {
    setDrawAction('circle');
  }

  const handleQuadril = () => {
    setDrawAction('rectangle');
  }

  
  const handleNotification = () => {
    navigate('/user/notification')
    // alert("sass")
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // navigate('/user/notification')
  };

  const handleClose = () => {
      setAnchorEl(null);
      navigate('/')
  };

  const handleCloseSignOut = Logout();

  return (
    <div>
      <div className="dashboard_header">
        <div className="filename">
          <p className="namep"> STUDIO : FILE NAME</p>
        </div>
        <div className="side_icons">
          <div className="export" onClick={exportAndSaveTemplate}>
            <p className="exportp"> Export </p>
          </div>
          <div className="side_icons">
            <div className="quesus" >
                <img src={question} alt="Question mark" className="question" />
            </div>
            <div className="quesus" onClick={handleNotification}>
                <img src={bell} alt="Bell Icon" className="question" />
            </div>
            <div className="profile" >
                <img src={profile} alt="Bell Icon"
                    onClick={handleClick}
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                />
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem><Link to="/user/profile" className="linkblack"> <span className="profileicons"> <img src={settings} className="profileicons" /> </span>Profile Settings </Link> </MenuItem>
                    <MenuItem onClick={handleClose}> <span className="profileicons"> <img src={upgrade} className="profileicons" /> </span> Upgrade Plans</MenuItem>
                    <MenuItem onClick={handleCloseSignOut}><span className="profileicons"> <img src={signout} className="profileicons" /> </span>Logout</MenuItem>
                </Menu>
            </div>
          </div>
        </div>
      </div>

      <div id="fullscreen-content">
        <div className="orangebg" style={{ position: isHeaderFixed ? 'fixed' : 'relative', top: 0, width: "100%", gap: "20px", zIndex: 10 }}>
          <div className="filemenu" style={{ position: "relative" }}>
            <p><a className="link" onClick={() => handleOpenClose("file")}>File</a></p>
            <div style={{ display: openFile ? "block" : "none", padding: "15px", minWidth: "200px", backgroundColor: "#D9D9D8", position: "absolute", zIndex: 20, top: "75px", left: 0 }}
              className="fileOpen"
            >
              {/* new */}
              <div className="newFile"> New </div>
              <hr />
              <div className="newFile"> Canvas </div>
              <div className="newFile"> Export </div>
              <div className="newFile"> Download </div>
              <div className="newFile"> Version history </div>
              <div className="newFile"> Exit </div>

            </div>

            <p><a className="link" onClick={() => handleOpenClose("edit")}>Edit</a></p>
            <div style={{ display: openEdit ? "block" : "none", padding: "15px", minWidth: "200px", backgroundColor: "#D9D9D8", position: "absolute", zIndex: 20, top: "75px", left: 0, }}
              className="fileOpen"
            >

              <div className="newFile"> Edit </div>
              <hr />
              <div className="newFile"> Undo </div>
              <div className="newFile"> Redo </div>
              <div className="newFile"> Export </div>
              <div className="newFile"> Canvas size </div>
              <div className="newFile"> Canvas color </div>
            </div>

            <p><a className="link" onClick={() => handleOpenClose("view")}>View</a></p>
            <div style={{ display: openView ? "block" : "none", backgroundColor: "#D9D9D8", padding: "15px", minWidth: "200px", position: "absolute", zIndex: 20, top: "75px", left: 0, }}
              className="fileOpen"
            >

              <div className="newFile"> Preview </div>
              <hr />
              <div className="newFile"> View GrayScale </div>
              <div className="newFile"> Zoom In </div>
              <div className="newFile"> Zoom Out </div>
              <div className="newFile"> Reset Zoom </div>
              <div className="newFile"> Show Ruler </div>
              <div className="newFile"> Enable Alignment </div>
            </div>

            <p><a className="link" onClick={() => handleOpenClose("slides")}>Slides</a></p>
            <div style={{ display: openSlides ? "block" : "none", padding: "15px", minWidth: "200px", backgroundColor: "#D9D9D8", position: "absolute", zIndex: 20, top: "75px", left: 0, }}
              className="fileOpen"
            >
              {/* Slides */}
              <div className="newFile"> Slides </div>
              <hr />
              <div className="newFile"> Add new slides </div>
              <div className="newFile"> Delete slide </div>
              <div className="newFile"> Move Slides </div>
              <div className="newFile"> Present </div>
              <div className="newFile"> Show Slides Panel </div>
            </div>

            <p><a className="link" onClick={() => handleOpenClose("share")}>Share</a></p>
            <div style={{ display: openShare ? "block" : "none", padding: "15px", minWidth: "200px", backgroundColor: "#D9D9D8", position: "absolute", zIndex: 20, top: "75px", left: 0, }}
              className="fileOpen"
            >
              {/* Share */}
              <div className="newFile"> Share </div>
              <hr />
              <div className="newFile"> Add to comuninty </div>
              <div className="newFile"> Send A Copy </div>
              <div className="newFile"> Download </div>
              <div className="newFile"> Version history </div>
              <div className="newFile"> Exit </div>
            </div>

            <p><a className="link" onClick={() => handleOpenClose("spellcheck")}>Spellcheck</a></p>
            <div style={{ display: openSpellcheck ? "block" : "none", padding: "15px", minWidth: "200px", backgroundColor: "#D9D9D8", position: "absolute", zIndex: 20, top: "75px", left: 0, }}
              className="fileOpen"
            >
              {/* Spell Check */}
              <div className="newFile"> Spell Check </div>
              <hr />
              <div className="newFile"> Open Personal Dictionary </div>
              <div className="newFile"> Enable SpellCheck </div>
              <div className="newFile"> Download </div>
              <div className="newFile"> Version history </div>
              <div className="newFile"> Exit </div>
            </div>

            <p><a className="link" onClick={() => handleOpenClose("help")}>Help</a></p>
            <div style={{ display: openHelp ? "block" : "none", padding: "15px", minWidth: "200px", backgroundColor: "#D9D9D8", position: "absolute", zIndex: 20, top: "75px", left: 0, }}
              className="fileOpen"
            >
              {/* Help */}
              <div className="newFile"> BioVisuals Help center</div>
              <hr />
              <div className="newFile"> Keyboard Shortcuts </div>
              <div className="newFile"> Report a Problem </div>
              <div className="newFile"> Download </div>
              <div className="newFile"> Version history </div>
              <div className="newFile"> Contact Support </div>
            </div>
          </div>
          <div className="doundo">
            <div className="undo">
              <a className="link" onClick={handleUndo}>
                <img src={leftarrow} alt="undo" className="undoimg" />
                <p className="undop"> Undo </p>
              </a>
            </div>

            <div className="redo">
              <a className="link" onClick={handleRedo}>
                <img src={rightarrow} alt="redo" className="redoimg" />
                <p className="redop" > Redo </p>
              </a>
            </div>
          </div>

          <div className="volume">
            <div className="vol1">

              <div className="size-icon">
                <img src={size} alt="max-min" />
              </div>

              <div className="volume-slider">
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={volume}
                  onChange={handleVolumeChange}
                />
                <div className="volume-tooltip"> </div>
              </div>

              <div>
                <img src={colorfiller} alt="colorfiller" />
              </div>
            </div>

            <div className="vol1">
              <div>
                <img src={img} />
              </div>
              <div>
                <img src={grid} />
              </div>
            </div>

            <div className="vol2">
              <div>
                <img src={eye} />
              </div>

            </div>

            <div className="vol3">
              <div>
                <img src={person} />
              </div>

            </div>


          </div>

          <div className="hoo">

            <div className="showgray">
              <div style={{ marginRight: '0.5rem', marginTop: "3px" }}>
                <img src={gallery} />
              </div>
              <div>
                <p> Show Slides</p>
              </div>
            </div>
          </div>

          <div className="hoo">

            <div className="showgray">
              <div style={{ marginRight: '0.5rem', marginTop: "8px" }}>
                <img src={play} />
              </div>
              <div>
                <p> Present</p>
              </div>
            </div>
          </div>
        </div>

        <div className="scalebg">
          <Ruler type="horizontal" ref={rulerRef} height={30} style={{ width: "79%", alignItems: "center", textAlign: "center", marginLeft: "140px" }} />
        </div>

        <div className="pinkkcamvas">

          <div className="canvas" >
            <Grid container spacing={0} sx={{ alignItems: "flex-start" }}>
              <Grid item lg={1} sm={2} md={2} xs={2}>
                <div className=" canvasicons" style={{ position: "relative" }}>
                  <a className="link" onClick={() => handleFeatureOpenClose("icon")}>
                    <div className=" iconnameeee">
                      <img src={iconskaicon} />
                      <div> Icons </div>
                    </div>
                  </a>

                  <a className="link" onClick={() => handleFeatureOpenClose("template")}>
                    <div className=" iconnameeee">
                      <img src={templateskaicon} />
                      <div> Templates </div>
                    </div>
                  </a>

                  <a className="link"
                    // onClick={() => handleFeatureOpenClose("brush")}
                    // onClick={toggleDrawing}
                    // onClick={() => setIsDrawing(!isDrawing)}
                    onClick={handleBrush}
                  >

                    {/* {isDrawing ? 'Stop Drawing' : 'Start Drawing'} */}
                    <div className=" iconnameeee">
                      <img src={brusheskaicon} />
                      <div> Brushes </div>
                    </div>
                  </a>

                  <input
                    type="file"
                    ref={fileRef}
                    onChange={onImportImageSelect}
                    style={{ display: 'none' }}
                    accept="image/*"
                  />

                  <a className="link" onClick={onImportImageClick}>
                    <div className=" iconnameeee">
                      <img src={uplodekaicon} alt="Upload" />
                      <div> Uplaod </div>
                    </div>
                  </a>

                  {/* <a className="link">
                  <div className=" iconnameeee">
                    <img src={logoutkaicon} />
                    <div> log out </div>
                  </div>
                  </a>*/}

                  <a className="link" onClick={handleResize}>
                    <div className=" iconnameeee">
                      <img src={settingskaicon} />
                      <div>Resize</div>
                    </div>
                  </a>

                  <a className="link" onClick={() => handleFeatureOpenClose("present")}>
                    <div className=" iconnameeee">
                      <img src={presentkaicon} />
                      <div> Present </div>
                    </div>
                  </a>

                </div>

              </Grid>

              <Grid >
                {/* need to feature icon here */}

                <Grid item lg={featureIcon ? 1 : 0} sm={2} md={2} xs={2} hidden={!featureIcon}>
                  {
                    featureIcon ? (
                      <div style={{
                        width: "200px", height: "500px", top: "15px",
                        left: "5px", backgroundColor: "#FADFC2", position: "relative", zIndex: 2
                      }}>
                        {/* <div>Catogories</div> */}

                        <Grid container spacing={2}>

                          {/* catogory data map here  */}
                          {
                            hideCategories &&
                            displayCatogories.map((category) => (
                              <Grid key={category._id} item lg={3} sm={6} md={6} xs={6}>
                                <div
                                  className="Buucards"
                                  onClick={() => handleCategoryClick(category._id)}
                                >
                                  <div className="belubee" style={{ position: 'relative', gap: "5px" }}>
                                    <img
                                      src={image_url + category.categoryImage}
                                      className="iconnimagee"
                                      alt={category.categoryName}
                                      style={{ width: "40px", height: "40px" }}
                                    />
                                    <p className="cardbuu_text" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', fontSize: '12px', color: "white" }}>
                                      {category.categoryName}
                                    </p>
                                  </div>
                                </div>
                              </Grid>
                            ))}

                          {/* Subcategory data map here */}
                          {
                            hideSubCategories &&
                            displaySubCatogories.map((subcategory) => (
                              <Grid key={subcategory._id} item lg={3} sm={6} md={6} xs={6}>
                                <div
                                  className="Buucards"
                                  onClick={() => handleSubCategoryClick(subcategory._id)}
                                >
                                  {/* ... (subcategory rendering code) */}
                                  <div className="belubee" style={{ position: 'relative', gap: "5px" }}>
                                    <img
                                      src={image_url + subcategory.subCategoryImage}
                                      className="iconnimagee"
                                      alt={subcategory.subCategoryName}
                                      style={{ width: "40px", height: "40px" }}
                                    />
                                    <p className="cardbuu_text" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', fontSize: '12px', color: "white" }}>
                                      {subcategory.subCategoryName}
                                    </p>
                                  </div>
                                </div>
                              </Grid>
                            ))}

                          {/* Child category data map here */}
                          {
                            hideChildCategories &&
                            displayChildCatogories.map((childcategory) => (
                              <Grid key={childcategory._id} item lg={3} sm={6} md={6} xs={6}>
                                <div
                                  className="Buucards"
                                  onClick={() => handleChildCategoryClick(childcategory._id)}
                                >
                                  {/* ... (child category rendering code) */}
                                  <div className="belubee" style={{ position: 'relative', gap: "5px" }}>
                                    <img
                                      src={image_url + childcategory.childCategoryImage}
                                      className="iconnimagee"
                                      alt={childcategory.childCategoryName}
                                      style={{ width: "40px", height: "40px" }}
                                    />
                                    <p className="cardbuu_text" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', fontSize: '12px', color: "white" }}>
                                      {childcategory.childCategoryName}
                                    </p>
                                  </div>

                                </div>
                              </Grid>
                            ))}

                          {/* Icon data map here */}
                          {
                            hideIcons &&
                            displayIcons.map((icon) => (
                              <Grid key={icon.id} item lg={3} sm={6} md={6} xs={6}>
                                <div className="Buucards">
                                  {/* ... (icon rendering code) displayIcons */}
                                  <div className="belubee" style={{ position: 'relative', gap: "5px" }}>
                                    <img
                                      src={image_url + icon.iconImage}
                                      className="iconnimagee"
                                      alt={icon.iconName}
                                      style={{ width: "40px", height: "40px" }}
                                      draggable="true"
                                      onDragStart={(e) => {
                                        dragUrl.current = e.target.src;
                                      }}
                                    />
                                    <p className="cardbuu_text" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', fontSize: '12px', color: "white" }}>
                                      {icon.iconName}
                                    </p>
                                  </div>
                                </div>
                              </Grid>
                            ))
                          }

                        </Grid>

                      </div>
                    ) : null
                  }
                </Grid>

                <Grid item lg={featureTemplate ? 1 : 0} sm={2} md={2} xs={2} hidden={!featureTemplate}>
                  {
                    featureTemplate ? <div style={{ width: "200px", height: "500px", backgroundColor: "#FADFC2", position: "relative", zIndex: 2 }}>
                      <div>Templates</div>
                      <img
                        style={{ height: "30px", width: "30px" }}
                        alt="lion"
                        src={Asset36}
                        draggable="true"
                        onDragStart={(e) => {
                          dragUrl.current = e.target.src;
                        }}
                      />
                    </div> : ""
                  }
                </Grid>

                <Grid item lg={featureBrush ? 1 : 0} sm={2} md={2} xs={2} hidden={!featureBrush}>
                  {
                    featureBrush ? <div style={{ width: "200px", height: "500px", backgroundColor: "#fff", position: "relative", zIndex: 2 }}>
                      <div>Brush</div>
                      <img
                        style={{ height: "30px", width: "30px" }}
                        alt="lion"
                        src='data:image/jpeg;base64,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'
                        draggable="true"
                        onDragStart={(e) => {
                          dragUrl.current = e.target.src;
                        }}
                      />
                    </div> : ""
                  }
                </Grid>
              </Grid>


              <Grid item lg={featureIcon || featureTemplate || featureBrush ? 8 : 10} sm={8} md={8} xs={8}>
                <div className="canvasborder">
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
                      width={stageWidth}
                      height={window.innerHeight}
                      ref={stageRef}
                      style={{ backgroundColor: "white" }}
                      onMouseUp={onStageMouseUp}
                      onMouseDown={onStageMouseDown}
                      onMouseMove={onStageMouseMove}
                    >
                      <Layer >
                        <KonvaRect
                          x={0}
                          y={0}
                          height={SIZE}
                          width={SIZE}
                          fill="white"
                          id="bg"
                          onClick={onBgClick}
                        />

                        {images.map((image, index) => (
                          <URLImage
                            key={index}
                            image={image}
                            onDragStart={(e) => handleDragStart(e, image)}
                            onDragEnd={(e) => handleDragEnd(e, image)}
                            onClick={onShapeClick}
                            onTransform={(newProps) => handleImageTransform(index, newProps)}
                          />
                        ))}

                        {image.map((image, index) => (
                          <KonvaImage
                            key={index}
                            image={image}
                            x={0}
                            y={0}
                            height={SIZE / 2}
                            width={SIZE / 2}
                            onClick={onShapeClick}
                            draggable={isDraggable}
                          />
                        ))}
                        {arrows.map((arrow) => (
                          <KonvaArrow
                            key={arrow.id}
                            id={arrow.id}
                            points={arrow.points}
                            fill={arrow.color}
                            stroke={arrow.color}
                            strokeWidth={4}
                            onClick={onShapeClick}
                            draggable={isDraggable}
                          />
                        ))}
                        {rectangles.map((rectangle) => (
                          <KonvaRect
                            key={rectangle.id}
                            x={rectangle?.x}
                            y={rectangle?.y}
                            height={rectangle?.height}
                            width={rectangle?.width}
                            stroke={rectangle?.color}
                            id={rectangle?.id}
                            strokeWidth={4}
                            onClick={onShapeClick}
                            draggable={isDraggable}
                          />
                        ))}
                        {circles.map((circle) => (
                          <KonvaCircle
                            key={circle.id}
                            id={circle.id}
                            x={circle?.x}
                            y={circle?.y}
                            radius={circle?.radius}
                            stroke={circle?.color}
                            strokeWidth={4}
                            onClick={onShapeClick}
                            draggable={isDraggable}
                          />
                        ))}
                        {scribbles.map((scribble) => (
                          <KonvaLine
                            key={scribble.id}
                            id={scribble.id}
                            lineCap="round"
                            lineJoin="round"
                            stroke={scribble?.color}
                            strokeWidth={4}
                            points={scribble.points}
                            onClick={onShapeClick}
                            draggable={isDraggable}
                          />
                        ))}
                        <Transformer ref={transformerRef} />
                      </Layer>
                    </Stage>
                  </div>
                </div>
              </Grid>

              <Grid item lg={1} sm={2} md={2} xs={2}>
                <div className=" centerkerahai">
                  <div className=" canvasiconsright" style={{ position: "relative" }}>

                    <a className="link" onClick={() => setDrawAction("scribble")}>
                      <div className="iconnameeee">
                        <img src={lineicons} />
                        <p> Lines </p>
                      </div>
                    </a>


                    <a className="link" onClick={() => setDrawAction("arrow")}>
                      <div className="iconnameeee">
                        <img src={lineicons} />
                        <p> Arrow </p>
                      </div>
                    </a>

                    <a className="link" onClick={() => setDrawAction("rectangle")}>
                      <div className="iconnameeee">
                        <img src={shapesicon} />
                        <p> Rectangle </p>
                      </div>
                    </a>

                    <a className="link" onClick={() => setDrawAction("circle")}>
                      <div className="iconnameeee">
                        <img src={shapesicon} />
                        <p> Circle </p>
                      </div>
                    </a>
                    <hr />
                    <a className="link" onClick={() => handleFullScreenToggle()}>
                      <div className=" iconnameeee">
                        <img src={arrowicons} />
                      </div>
                    </a>

                    <a className="link" onClick={handleLayers}>
                      <div className=" iconnameeee">
                        <img src={groupicons} />
                      </div>
                    </a>

                    <a className="link">
                      <div className=" iconnameeee">
                        <img src={gangg} />
                      </div>
                    </a>

                  </div>
                </div>
              </Grid>
            </Grid>

          </div>
        </div>
      </div>
    </div >
  );
};

export default CanvasPage;