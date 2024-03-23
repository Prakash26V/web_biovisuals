import React, { useState } from 'react';
import { Stage, Layer, Image, Text, Rect } from 'react-konva';

const KonvaDemoApp = () => {
  const [selectedTool, setSelectedTool] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedText, setSelectedText] = useState('');
  const [backgroundImage, setBackgroundImage] = useState(null);

  const handleToolSelect = (tool) => {
    setSelectedTool(tool);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const img = new window.Image();
      img.src = reader.result;
      img.onload = () => {
        setSelectedImage(img);
        setSelectedTool(null); // Clear the selected tool after uploading image
      };
    };

    reader.readAsDataURL(file);
  };

  const handleTextChange = (e) => {
    setSelectedText(e.target.value);
  };

  const handleBackgroundUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setBackgroundImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleStageClick = (e) => {
    if (selectedTool === 'text') {
      // Add text to the clicked position on the canvas
      setSelectedTool(null); // Clear the selected tool after adding text
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '200px', padding: '20px', borderRight: '1px solid #ccc' }}>
        <h2>Tools</h2>
        <button onClick={() => handleToolSelect('template')}>Template</button>
        <button onClick={() => handleToolSelect('text')}>Text</button>
        <button onClick={() => handleToolSelect('photo')}>Photo</button>
        <input type="file" onChange={handleImageUpload} />
        <input type="file" onChange={handleBackgroundUpload} />
        <h2>Resize</h2>
        {/ Add resize options here /}
      </div>
      <div style={{ flex: '1', padding: '20px' }}>
        <Stage width={800} height={600} onClick={handleStageClick}>
          <Layer>
            {backgroundImage && (
              <Image
                image={backgroundImage}
                width={800}
                height={600}
              />
            )}
            {selectedImage && selectedTool === 'photo' && (
              <Image
                image={selectedImage}
                x={100}
                y={100}
                width={200}
                height={200}
                draggable
                onTransformEnd={(e) => {
                  const node = e.target;
                  // update state with the new size and position
                  setSelectedImage({
                    ...selectedImage,
                    x: node.x(),
                    y: node.y(),
                    width: node.width() * node.scaleX(),
                    height: node.height() * node.scaleY(),
                  });
                  // reset scale
                  node.scaleX(1);
                  node.scaleY(1);
                }}
              />
            )}
            {selectedTool === 'template' && (
              <Rect
                x={50}
                y={50}
                width={200}
                height={100}
                fill="lightblue"
                draggable
              />
            )}
            {selectedTool === 'text' && (
              <Text
                text={selectedText}
                x={100}
                y={100}
                fontSize={30}
                fill="black"
                draggable
                onTransformEnd={(e) => {
                  const node = e.target;
                  // update state with the new size and position
                  setSelectedText({
                    ...selectedText,
                    x: node.x(),
                    y: node.y(),
                    width: node.width() * node.scaleX(),
                    height: node.height() * node.scaleY(),
                  });
                  // reset scale
                  node.scaleX(1);
                  node.scaleY(1);
                }}
              />
            )}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default KonvaDemoApp;



// import React, { useState } from "react";

// const SignUpForm = () => {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [emailOrPhone, setEmailOrPhone] = useState("");
//     const [userType, setUserType] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Here you can perform form validation and submit data to server
//         // For now, let's just log the form data
//         // console.log({
//         //   firstName,
//         //   lastName,
//         //   emailOrPhone,
//         //   userType,
//         //   password,
//         //   confirmPassword
//         // });
//     };

//     return (
//         <div>
//             <h1>User Sign Up</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>First Name:</label>
//                     <input
//                         type="text"
//                         value={firstName}
//                         onChange={(e) => setFirstName(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Last Name:</label>
//                     <input
//                         type="text"
//                         value={lastName}
//                         onChange={(e) => setLastName(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Email or Phone:</label>
//                     <input
//                         type="text"
//                         value={emailOrPhone}
//                         onChange={(e) => setEmailOrPhone(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>User Type:</label>
//                     <input
//                         type="text"
//                         value={userType}
//                         onChange={(e) => setUserType(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Confirm Password:</label>
//                     <input
//                         type="password"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Sign Up</button>
//             </form>
//         </div>
//     );
// };

// export default SignUpForm;
