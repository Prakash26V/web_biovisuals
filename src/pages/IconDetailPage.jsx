// import React, { useEffect, useState } from 'react'
// import Header from '../components/Header'
// import { Button, Grid, TextField } from '@mui/material'
// import { useParams } from 'react-router-dom';
// import { base_url, image_url } from '../utils/service';
// import axios from 'axios';

// const IconDetailPage = () => {
//     // /user/detail/icon
//     const params = useParams();
//     const { _id } = useParams();
//     console.log("Dynamic Id ::: ", _id)

//     const [selectedIcon, setSelectedIcon] = useState();  // State to store the selected icon data
//     console.log("selected ",selectedIcon)

//     // Fetch the specific icon data based on the 'id' parameter
//     const fetchIconData = async () => {
//         try {
//             const response = await axios.post(`${base_url}/api/user/adminIconss`, {
//                 _id: _id
//             });
//             console.log("resp", response)
//             response?.data?.result?.map(value => setSelectedIcon(value?.iconImage))
//             // setSelectedIcon(response.data.result);  // Update state with fetched icon data
//             console.log("response", response.data.result)
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     useEffect(() => {
//         fetchIconData();  // Call the function to fetch icon data when the component mounts
//     }, [_id]);  // 

//     return (
//         <>
//             <Grid spacing={0}>
//                 <Header />
//                 {/* <p>IconDetailPage</p> */}
//                 <Grid item lg={12} sm={12} md={12} xs={12} style={{ textAlign: "center", marginTop: "135px", backgroundColor: '#F29728', width: '100%', height: "150px", color: 'white' }}>
//                     <h3 >Make scientific figures in minutes</h3>
//                     <p >Create publication-quality figures with pre-made icons and templates, all from BioRender's web-based software.</p>
//                     <TextField
//                         fullWidth
//                         // onChange={handleInputChange}
//                         placeholder="Search for Icons..."
//                         variant="outlined"
//                         style={{ margin: '10px 0', backgroundColor: 'white' }}
//                     />
//                     <Button>USE ICON IN THE APP</Button>
//                 </Grid>
//                 <Grid item lg={12} sm={12} md={12} xs={12}>
//                     <Grid item lg={6} sm={6} md={6} xs={6} >
//                         <p>Epithelial layers (large intestine)</p>
//                         <div>
//                             <img src={image_url + selectedIcon} alt={selectedIcon} />
//                             <h2>{selectedIcon}</h2>
//                         </div>
//                     </Grid>
//                     <Grid item lg={6} sm={6} md={6} xs={6} >
//                         <p>Use this icon in BioRender along with 1000s of others to make your next science figure in minutes</p>
//                     </Grid>
//                 </Grid>
//             </Grid>
//         </>
//     )
// }

// export default IconDetailPage




import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Button, Grid, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import { base_url, image_url } from '../utils/service';
import axios from 'axios';

const IconDetailPage = () => {
    const { _id } = useParams();
    console.log("Dynamic Id ::: ", _id)

    const [selectedIcon, setSelectedIcon] = useState();  // State to store the selected icon data

    // Fetch the specific icon data based on the '_id' parameter
    const fetchIconData = async () => {
        try {
            const response = await axios.post(`${base_url}/api/user/adminIconss`, {
                _id: _id
            });
            console.log("resp", response)
            response?.data?.result?.map(value => setSelectedIcon(value?.iconImage))
            // setSelectedIcon(response.data.result);  // Update state with fetched icon data
            console.log("response", response.data.result)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchIconData();  // Call the function to fetch icon data when the component mounts
    }, [_id]);  // 

    return (
        <>
            <Grid container spacing={2} style={{ marginTop: '90px'}}>
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center", backgroundColor:'orange', marginTop: "20px" }}>
                    <h3>Make scientific figures in minutes</h3>
                    <p>Create publication-quality figures with pre-made icons and templates, all from BioRender's web-based software.</p>
                    <TextField
                        fullWidth
                        placeholder="Search for Icons..."
                        variant="outlined"
                        style={{ margin: '10px 0', backgroundColor: 'white' }}
                    />
                    <Button style={{color: 'white' }}>USE ICON IN THE APP</Button>
                </Grid>
                <Grid item container xs={12} spacing={2}>
                    <Grid item lg={6} sm={6} md={6} xs={12}>
                        <div>
                            <img src={image_url + selectedIcon} alt={selectedIcon} style={{ width: '100%' }} />
                        </div>
                    </Grid>
                    <Grid item lg={6} sm={6} md={6} xs={12}>
                        <div>
                            <h2>{selectedIcon}</h2>
                            <p>Epithelial layers (large intestine)</p>
                        </div>
                        <div>
                            <p>Use this icon in BioRender along with 1000s of others to make your next science figure in minutes</p>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default IconDetailPage;
