// import { Layout, Menu } from "antd";
// import React, { useState } from "react";
// import {
//     PlusOutlined,
//     FileOutlined,
//     TeamOutlined,
//     DeleteOutlined,
//     ContainerOutlined,
//   } from "@ant-design/icons";

// const { Sider } = Layout;

// const Sidebar = () => {
//     const [openKeys, setOpenKeys] = useState([]); // State to track open keys
    

//     const handleSubMenuClick = (key) => {
//         setOpenKeys((prevKeys) => {
//             const isKeyOpen = prevKeys.includes(key);
//             return isKeyOpen ? prevKeys.filter((k) => k !== key) : [...prevKeys, key];
//         });
//     };

//     return ( 
//         <>
//             <Sider
//                 width={200}
//                 // height={1800}
//                 style={{
//                     overflowY: "auto", // Enable vertical scrolling
//                     height: "50vh", // Set a fixed height or use '100%' based on your layout
//                 }}
//             >
//                 <Menu
//                     mode="vertical"
//                     openKeys={openKeys}
//                     onOpenChange={(keys) => setOpenKeys(keys)}
//                     style={{
//                         background: "#f4a805", // Background color for the entire menu
//                         borderRight: 0, // Remove border to avoid double border when wrapped in a Card
//                     }}
//                 >

//                     {/* New */}
//                     <Menu.Item key="new" icon={<PlusOutlined />}>
//                         New
//                     </Menu.Item>

//                     {/* My Files */}
//                     <Menu.Item key="myFiles" icon={<FileOutlined />}>
//                         My Files
//                     </Menu.Item>

//                     {/* Shared */}
//                     <Menu.Item key="shared" icon={<TeamOutlined />}>
//                         Shared
//                     </Menu.Item>

//                     {/* Trash */}
//                     <Menu.Item key="trash" icon={<DeleteOutlined />}>
//                         Trash
//                     </Menu.Item>

//                     {/* Templates */}
//                     <Menu.Item key="templates" icon={<ContainerOutlined />}>
//                         Templates
//                     </Menu.Item>

//                 </Menu>


//             </Sider>
//         </>
//     );
// }

// export default Sidebar;


// Sidebar.jsx
import React, { useState, useEffect } from "react";
import { Button, List, Avatar } from "antd";
import axios from "axios";

const Sidebar = ({ onFetchAllIcons }) => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    // Fetch all icons when the component mounts
    fetchAllIconsFromDatabase();
  }, []);

  const fetchAllIcons = () => {

  }

  const fetchAllIconsFromDatabase = async () => {
    const response = await axios.get(`http://localhost:5000/api/user/adminIcons`)
    setIcons(response.data.result);
    console.log("data", response.data.result)
  };

//   console.log("icons", icons)

  const handleFetchIcon = (icon) => {
    // Trigger the parent component callback to fetch a specific icon
    onFetchAllIcons(icon);

    // axios.get(`url`, iconData)

  };

  return (
    <div>
      <h2>Sidebar</h2>
      {/* <List
        dataSource={icons}
        renderItem={(icon) => (
          <List.Item key={icon.id}>
            <List.Item.Meta
              avatar={<Avatar style={{ backgroundColor: icon.color }}>{icon.name[0]}</Avatar>}
              title={icon.name}
              description={
                <Button onClick={() => handleFetchIcon(icon)}>Fetch Icon from Database</Button>
              }
            />
          </List.Item>
        )}
      /> */}
      <List
        dataSource={icons}
        renderItem={(icon) => (
          <List.Item key={icon.id}>
            <List.Item.Meta
              avatar={<Avatar style={{ backgroundColor: icon.color }}>{icon.iconName ? icon.iconName[0] : ''}</Avatar>}
                //   title={icon.iconName}
                //   description={
                //     <Button onClick={() => handleFetchIcon(icon)}>Fetch Icon from Database</Button>
                //   }
                // iconImage
                // avatar={<Avatar style={{ backgroundColor: icon.color }}>{icon.iconName ? icon.iconName[0] : ''}</Avatar>}
              title={icon.iconImage}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Sidebar;


