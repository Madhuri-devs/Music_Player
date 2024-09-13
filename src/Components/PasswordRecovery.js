// import React, { useState } from 'react';
// import {
//   Grid,
//   Stack,
//   Typography,
//   Box,
//   TextField,
//   Button,
//   Container,
//   IconButton,
//   Link,
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import { useNavigate } from 'react-router-dom';

// // import fimage from '../Images/bpcl5.png';
// // import image1 from '../Images/bpcl4.png';
// // // import image2 from '../Images/bpcl2.png';
// // import img3 from '../Images/bpcl3.png';
// // import bgimage from '../Images/bg-bpcl.png';
// import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

// const PasswordRecovery = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//   });

//   const [formErrors, setFormErrors] = useState({
//     username: '',
//     email: '',
//   });

//   const navigate = useNavigate();

//   const backgroundImage = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '100vh',
//     // backgroundImage: `url(${bgimage})`,
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//   };

//   const gridContainerStyle = {
//     backgroundImage: `url(${fimage})`,
//     backgroundSize: 'auto',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     borderRadius: '32px',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '100%',
//     bottom: 'auto',
//     display: 'flex',
//     flexDirection: {
//       xs: 'column',
//       sm: 'row',
//     },
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const errors = {};

//     // Validation for username (can't be empty)
//     if (!formData.username) {
//       errors.username = 'Username/Mobile No cannot be null';
//     }

//     // Validation for email (can't be empty)
//     if (!formData.email) {
//       errors.email = 'Email cannot be null';
//     }

//     // If there are any errors, update formErrors state
//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//     } else {
//       // Form is valid, proceed with submission
//       console.log('Form submitted:', formData);
//       // Reset the form and errors if needed
//       setFormData({ username: '', email: '' });
//       setFormErrors({ username: '', email: '' });
//     }
//   };

//   const login = () => {
//     navigate('/');
//   };



//   return (
//     // <div style={backgroundImage}>
//       <Container maxWidth="lg">
//       <Grid container style={gridContainerStyle}
//           sx={{ backgroundColor: '#fff3f375' }} >
//           <Grid item xs={12} sm={6} md={5.5}>
//             <Box sx={{ position: 'relative', border: '1px solid #ccc0', mb: '2%', mt: '2%' }}>
//               <Box container sx={{ borderRadius: 10, mb: '0%', pt: '7%', pb: '7%' }}>
//                 <Stack direction="column" spacing={6.5}>
//                   {/* <img src={image1} style={{ height: '68%', width: '58%', paddingLeft: '20%' }} alt="Mak Lubricants Logo" /> */}
//                   <Typography variant="h5" style={{ color: "#007BC9", fontWeight: '200%', fontSize: '190%', textAlign: 'center' }}>
//                     <b>LUBES QR CODE APPLICATION</b>
//                   </Typography>
//                   {/* <img src={image2} style={{ height: '25%', width: '90%', paddingLeft: '4%' }} alt="Mak Bottles img" />
//                   <img src={img3} style={{ width: '55%', paddingLeft: '20%', paddingBottom: '10%' }} alt="Mak quote" /> */}
//                 </Stack>
//               </Box>
//             </Box>
//           </Grid>

//           <Grid item xs={12} sm={6} md={6}>
//             <Box sx={{
//               position: 'relative',
//               border: '40px solid #ccc0',
//               mb: '2%', mt: '2%'
//             }}>
//               <Box container sx={{
//                 backgroundColor: "rgba(218, 242, 254, 1)",
//                 borderRadius: 10,
//                 mb: '0%',
//                 pt: '7%', pb: '2%', textAlign: 'center',
//               }}
//                 pl={5} pr={5} textAlign={'center'}>
//                 <Typography variant='h5' sx={{ color: '#007BC9' }}>Recover Password</Typography>
//                 <br />
//                 <form onSubmit={handleSubmit}>
//                   <Stack direction="column" spacing={2}>
//                     <label style={{ display: 'inline-block', marginRight: '50%' }}>Username/Mobile No <span style={{ color: 'red' }}>*</span></label>
//                     <TextField
//                       size='small'
//                       type="text"
//                       name="username"
//                       value={formData.username}
//                       onChange={handleInputChange}
//                     />
//                     {formErrors.username && (
//                       <span style={{ color: 'red', marginRight: "60%" }}>{formErrors.username}</span>
//                     )}


//                     <label style={{ display: 'inline-block', marginRight: '70%' }}>Email <span style={{ color: 'red' }}>*</span></label>
//                     <TextField
//                       size='small'
//                       type="text"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                     />
//                     {formErrors.email && (
//                       <span style={{ color: 'red', marginRight: "60%" }}>{formErrors.email}</span>
//                     )}

//                     <br /><br />

//                     <Button
//                       type="submit"
//                       variant="contained"
//                       fullWidth
//                     >
//                       Submit
//                     </Button>
//                   </Stack>
//                 </form>

//                 <br />
//                 <br />

//                 <Grid style={{ padding: '20px' }}>
//                   <Stack spacing={1}>
//                     <Typography color="textSecondary">Bharth Petroleum Corporation Limited | Copyright @ 2021</Typography>
//                     <Typography color="textSecondary">
//                       A Product of <Link href="https://www.ctel.in/">C-TEL InfoSystem Pvt.Ltd</Link>
//                     </Typography>
//                   </Stack>
//                 </Grid>

//                 <HighlightOffRoundedIcon
//             onClick={login}
//             sx={{
//               position: 'absolute',
//               top: '10px',
//               right: '10px',
//             backgroundColor:'#0b6396',
//             border:'#fff',
//             color:'white',
//               cursor: 'pointer',
//               fontSize: '2rem',
//               borderRadius: '50%',
//               transition: 'transform 0.3s ease',
//               '&:hover': {
//                 color: 'red',
//                 backgroundColor:'yellow',
//                 transform: 'rotate(180deg)',
//               },
//             }}
//           />
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default PasswordRecovery;