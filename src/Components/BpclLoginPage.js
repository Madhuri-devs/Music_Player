// import React from 'react';
// import { Container, Stack, Typography, Grid, Divider, Select, TextField, Fab, Button, Box, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
// import { useState, useEffect, useRef } from 'react';
// import { MenuItem } from '@mui/material';
// import * as Yup from "yup";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { useNavigate } from 'react-router-dom';
// import { Link } from '@mui/material';
// import bgimage from '../Images/bg-bpcl.png';
// import fimage from '../Images/bpcl5.png';
// // import fimage from '../Images/bpcl5.png';
// import image1 from '../Images/bpcl4.png';
// import image2 from '../Images/bpcl2.png';
// import img3 from '../Images/bpcl3.png';
// import RestartAltIcon from '@mui/icons-material/RestartAlt';
// import CloseIcon from "@mui/icons-material/Close";
// import axios from "axios";

// const BpclLoginPage = () => {

//     const [userEmailPhone, setUserEmailPhone] = useState('');
//     const [userName, setUserName] = useState('');
//     const [password, setPassword] = useState('');
//     const [verificationCode, setVerificationCode] = useState('');
//     const [verificationCodeError, setVerificationCodeError] = useState(false);
//     const [errorMessage, setErrorMessage] = useState('');
//     // state variables for error messages
//     const [userNameError, setUserNameError] = useState('');
//     const [passwordError, setPasswordError] = useState('');
//     const [captchaError, setCaptchaError] = useState('');
//     const [open, setOpen] = React.useState(false);
//     const passwordRef = useRef(null);
//     const verificationCodeRef = useRef(null);

//     const navigate = useNavigate();
//     const coursesPage = () => {
//         navigate("/verifybottle")
//     }
//     const handleUserNameChange = (e) => {
//         setUserName(e.target.value);
//         setUserNameError('');
//     };
//     // Add a useEffect to log the updated userName state
//     useEffect(() => {
//         console.log(userName);
//     }, [userName]);

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//         setPasswordError('');
//     };

//     const handleVerificationCodeChange = (event) => {
//         setVerificationCode(event.target.value);
//         setVerificationCodeError(false);
//         setCaptchaError('');
//     };

//     const handleUserNameBlur = () => {
//         if (!userName) {
//             setUserNameError('Username/Email/Phone cannot be empty');
//         }
//     };

//      const handlePasswordBlur = () => {
//         if (password.trim() === '') {
//             setPasswordError('Please enter a password');
//         }
//     };

//     const handleVerificationCodeBlur = () => {
//         if (verificationCode.trim() === '') {
//             setCaptchaError('Please enter the verification code');
//         }
//     };

//     const handleSignIn = async () => {
//         // Initialize error messages
//         let userNameError = '';
//         let passwordError = '';
//         let captchaError = '';

//         if (!userName) {
//             userNameError = 'Username/Email/Phone cannot be empty';
//         }
//         // Validate password field
//         if (!password) {
//             passwordError = 'Password cannot be empty';
//             passwordRef.current.focus();
//         }

//         if (!verificationCode) {
//             captchaError = 'Verification code cannot be blank';
//             verificationCodeRef.current.focus();
//         } else if (verificationCode !== captchaCode) {
//             captchaError = 'Please enter a valid CAPTCHA code';
//             verificationCodeRef.current.focus();
//         }
//         // Update the state with error messages
//         setUserNameError(userNameError);
//         setPasswordError(passwordError);
//         setCaptchaError(captchaError);

//         // Check if there are any validation errors
//         if (userNameError || passwordError || captchaError) {
//             return; // Return early if there are errors
//         }

//         try {
//             // Make an API call to verify the username and password
//             console.log("haii")
//             const response = await axios.post('http://localhost:8099/user/login', {
//                 userName: userName,
//                 password: password,
//             });

//             // Assuming your backend returns an authentication token on success
//             const token = response.data.token;
//             console.log(token)

//             if (token) {
//                 // Save the token to localStorage or a secure storage method
//                 sessionStorage.setItem('authToken', token);

//                 // Navigate to the dashboard page
//                 navigate('/dashboard');
//             } else {
//                 setErrorMessage("Invalid username or password");
//             }
//         } catch (error) {
//             console.error("Error in authentication:", error);
//             // Handle authentication error, show an error message, etc.
//             setErrorMessage("An error occurred. Please try again later.");
//         }
//     };


//     // useEffect(() => {
//     //     if (sessionStorage.getItem('authToken')) {
//     //         //     return sessionStorage.clear();
//     //         return navigate('/dashboard');
//     //     }
//     //     else{
//     //         sessionStorage.clear();
//     //         navigate('/');
//     //     }
//     // }, [navigate]);
//     useEffect(() => {
//         const token = sessionStorage.getItem("authToken");
//         if (token) {
//             if (window.location.pathname !== '/dashboard') {
//                 navigate('/dashboard');
//             }
//         } else {
//             navigate('/');
//         }
//     }, []);
//     const generateRandomCode = (length) => {
//         const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//         let code = '';
//         for (let i = 0; i < length; i++) {
//             const randomIndex = Math.floor(Math.random() * characters.length);
//             code += characters[randomIndex];
//         }
//         return code;
//     };

//     const [captchaCode, setCaptchaCode] = useState(generateRandomCode(6));

//     const handleCaptchaRestart = () => {
//         const newCaptchaCode = generateRandomCode(6);
//         setCaptchaCode(newCaptchaCode);
//     };

//     const initialValues = {
//         selectedLocationType: "",
//         selectedLocationName: "",
//         selectedRole: "",
//         firstName: "",
//         middleName: "",
//         lastName: "",
//         email: "",
//         mobileNo: "",
//         otp: "",
//     };

//     const validationSchema = Yup.object().shape({
//         selectedLocationType: Yup.string().required("Location Type cannot be blank"),
//         selectedLocationName: Yup.string().required("Location Name cannot be blank"),
//         selectedRole: Yup.string().required("Role Name cannot be blank"),
//         firstName: Yup.string().required("First Name cannot be blank"),
//         middleName: Yup.string().required("Middle Name cannot be blank"),
//         lastName: Yup.string().required("Last Name cannot be blank"),
//         email: Yup.string()
//             .required("Email cannot be blank")
//             .email("Invalid email address"),
//         mobileNo: Yup.string()
//             .required("Mobile Number cannot be blank")
//             .matches(/^[0-9]{10}$/, "Invalid mobile number"),

//         otp: Yup.string()
//             .required("Enter OTP cannot be blank")
//             .matches(/^[0-9]{6}$/, "Invalid OTP"),
//     });


//     const onSubmit = async (values, { setSubmitting }) => {
//         try {
//             const addObject = {
//                 locationType: values.selectedLocationType,
//                 locationName: values.selectedLocationName,
//                 roleName: values.selectedRole,
//                 firstName: values.firstName,
//                 middleName: values.middleName,
//                 lastName: values.lastName,
//                 email: values.email,
//                 mobileNo: values.mobileNo,
//                 otp: values.otp,
//             };

//             const response = await axios.post(
//                 "http://localhost:8068/user/saveUsers",
//                 addObject
//             );

//             console.log(response.data);
//             setOpen(false);
//             alert("You are Registered Successfully...");
//         } catch (error) {
//             console.error("Error in Inserting data:", error);
//         } finally {
//             setSubmitting(false);
//         }
//     };


//     const GetOtpClick = () => {
//         console.log('otp submitted')
//     }

//     const cancelButtonStyle = {
//         backgroundColor: '#007BC9',
//         border: '3px solid white',
//         stroke: 'white',
//         color: 'white',
//         position: 'absolute',
//         top: '8px',
//         right: '8px',
//         width: '35px',
//         height: '35px',
//         '&:hover': {
//             backgroundColor: 'yellow',
//             stroke: 'black',
//             color: 'black',
//             border: '3px solid black',
//             transform: 'rotate(180deg)',
//             transition: 'transform 0.3s ease-in-out',
//             cursor: 'pointer',
//         },
//     };
//     const backgroundImage = {
//         display: 'flex',
//         justifyContent: 'center', // Center the boxes horizontally
//         alignItems: 'center',
//         minHeight: '100vh',
//         backgroundImage: `url(${bgimage})`,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         // paddingTop: '10px',
//     };

//     const gridContainerStyle = {
//         backgroundImage: `url(${fimage})`,
//         backgroundSize: 'auto',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         borderRadius: '32px',
//         justifyContent: 'center',
//         alignItems: 'center',
//         minHeight: '100%',
//         bottom: 'auto',
//         display: 'flex',
//         flexDirection: {
//             xs: 'column', // mobile
//             sm: 'row', // tablet and up
//         }

//     };
//     const buttonStyle = {
//         width: '100%',
//         height: '40px',
//         backgroundColor: '#0073CF',
//         color: 'yellow',
//         whiteSpace: 'nowrap',
//         transition: 'background-color 0.3s ease', // Add a transition effect for smoother color change
//         '&:hover': {
//             backgroundColor: 'red'
//         },

//     };
//     const textfieldStyle = {
//         borderRadius: '10px',
//     }
//     return (
//         <div style={backgroundImage}>
//             <Container maxWidth="lg">
//                 <Grid container style={gridContainerStyle}
//                     sx={{ backgroundColor: '#fff3f375' }} >

//                     <Grid item xs={12} sm={6} md={5.5}>
//                         <Box sx={{ position: 'relative', border: '1px solid #ccc0', mb: '2%', mt: '2%' }}>
//                             <Box container sx={{ borderRadius: 10, mb: '0%', pt: '7%', pb: '7%', }}>
//                                 <Stack direction="column" spacing={6.5}>
//                                     <img src={image1} style={{ height: '68%', width: '58%', paddingLeft: '20%' }} alt="Mak Lubricants Logo" />
//                                     <Typography variant='h5' style={{ color: "#007BC9", fontWeight: '200%', fontSize: '190%', textAlign: 'center' }}><b>LUBES QR CODE APPLICATION</b></Typography>
//                                     <img src={image2} style={{ height: '25%', width: '90%', paddingLeft: '4%' }} alt="Mak Bottles img" />
//                                     <img src={img3} style={{ width: '55%', paddingLeft: '20%', paddingBottom: '10%' }} alt="Mak quote" />
//                                 </Stack>
//                             </Box>
//                         </Box>
//                     </Grid>

//                     <Grid item xs={12} sm={6} md={6} >
//                         <Box sx={{
//                             position: 'relative',
//                             border: '20px solid #ccc0',
//                             mb: '2%', mt: '2%'

//                         }}>
//                             <Box container sx={{
//                                 backgroundColor: "rgba(218, 242, 254, 1)",
//                                 borderRadius: 10,
//                                 mb: '0%',
//                                 pt: '5%', pb: '5%', textAlign: 'center', pr: '7%', pl: '7%'
//                             }}
//                                 pl={5} pr={5} textAlign={'center'}>

//                                 <Stack direction="column" spacing={4}>
//                                     <TextField
//                                         label="Username/Email/Phone"
//                                         variant="outlined"
//                                         size="small"
//                                         required
//                                         InputProps={{
//                                             style: textfieldStyle,
//                                         }}
//                                         value={userName}
//                                         onChange={handleUserNameChange}
//                                         onBlur={handleUserNameBlur}
//                                         helperText={userNameError && <span style={{ color: 'red' }}>{userNameError}</span>}
//                                     />
//                                     <TextField
//                                         variant="outlined"
//                                         size='small'
//                                         type="password"
//                                         placeholder='Password'
//                                         required
//                                         value={password}
//                                         onChange={handlePasswordChange}
//                                         onBlur={handlePasswordBlur}
//                                         InputProps={{
//                                             style: textfieldStyle
//                                         }}
//                                         helperText={passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
//                                     />
//                                 </Stack>
//                                 <Grid container spacing={3} mt={1}>

//                                     {/* First row */}
//                                     <Grid item xs={12} sm={6} md={6}>
//                                         <TextField
//                                             type="text"
//                                             size='small'
//                                             placeholder="Verification Code"
//                                             style={{
//                                                 width: "100%",
//                                                 height: "40px",
//                                                 border: '1px solid',
//                                                 borderColor: 'lightgray',
//                                                 borderRadius: '10px',
//                                             }}

//                                             value={verificationCode}
//                                             onBlur={handleVerificationCodeBlur}
//                                             onChange={handleVerificationCodeChange}
//                                             inputRef={verificationCodeRef}
//                                         />
//                                         {captchaError && (
//                                             <span style={{ color: 'red' }}>{captchaError}</span>
//                                         )}
//                                     </Grid>
//                                     <Grid item xs={12} sm={6} md={3}>

//                                         <Box
//                                             size="small"
//                                             style={{
//                                                 marginRight: "30px",
//                                                 marginLeft: "auto",
//                                                 backgroundColor: "whitesmoke",
//                                                 fontFamily: "Comic Sans MS",
//                                                 backgroundImage: "linear-gradient(whitesmoke)",
//                                                 letterSpacing: "1px",
//                                                 fontSize: "20px",
//                                                 textAlign: "right",
//                                             }}
//                                         >
//                                             {captchaCode}
//                                         </Box>
//                                     </Grid>
//                                     <Grid item xs={12} sm={6} md={3}>

//                                         <RestartAltIcon onClick={handleCaptchaRestart} style={{ color: "blue", marginLeft: "20px", textAlign: "left" }}
//                                             fontSize="large"
//                                         />

//                                     </Grid>
//                                 </Grid>

//                                 <Grid container spacing={2} mt={1}>
//                                     <Grid item xs={12} sm={6} md={6}>
//                                         <input type="checkbox" id="rememberMe" />
//                                         <label htmlFor="rememberMe">Remember Me</label>
//                                     </Grid>

//                                     <Grid item xs={12} sm={6} md={6}>
//                                         <Link href="/pvasswordrecovery" alignItems="end" underline="hover">
//                                             Recover Password
//                                         </Link>
//                                     </Grid>
//                                 </Grid>

//                                 <Grid container spacing={2} mt={1}>
//                                     <Grid item xs={6}>
//                                         <Button color="primary" variant="contained" style={{ textTransform: 'capitalize', width: '100%', height: '40px' }}
//                                             onClick={handleSignIn}
//                                         >
//                                             SignIn
//                                         </Button>
//                                     </Grid>
//                                     <Grid item xs={6}>
//                                         {/* <button style={buttonStyle} onClick={handleClickToOpen}> Sign Up</button> */}

//                                         <div>
//                                             <Button
//                                                 variant="outlined"
//                                                 color="primary"
//                                                 style={buttonStyle}
//                                                 onClick={() => setOpen(true)}
//                                             >
//                                                 Sign Up
//                                             </Button>

//                                             <Dialog open={open} style={{ alignItems: 'center', justifyContent: 'center' }} PaperProps={{ sx: { borderRadius: '16px', minWidth: "60%" } }}  >
//                                                 <DialogTitle style={{ backgroundColor: "#F1F1F5" }}>
//                                                     <Typography variant="h6" pb={1}>
//                                                         <b>SignUp</b>
//                                                     </Typography>
//                                                     <Fab
//                                                         size="small"
//                                                         aria-label="close"
//                                                         onClick={() => setOpen(false)}
//                                                         sx={cancelButtonStyle}
//                                                     >
//                                                         <CloseIcon
//                                                             sx={{
//                                                                 marginBottom: 0.7,
//                                                                 filter: "drop-shadow(0px 2px 4px red)",
//                                                             }}
//                                                             fontSize="small"
//                                                         />
//                                                     </Fab>
//                                                     <Divider sx={{ border: 1, borderColor: "white" }} fullWidth />
//                                                 </DialogTitle>

//                                                 <DialogContent sx={{ padding: "20px 40px" }} style={{ backgroundColor: "#F1F1F5" }}>
//                                                     <Formik
//                                                         initialValues={initialValues}
//                                                         validationSchema={validationSchema}
//                                                         onSubmit={onSubmit}
//                                                     >
//                                                         <Form>
//                                                             <Grid container direction="row" columnSpacing={5} rowSpacing={2}>
//                                                                 {/* Left-side form inputs */}
//                                                                 <Grid item xs={12} sm={6}>
//                                                                     <Stack direction="column" spacing={2}>
//                                                                         {/* Location Type */}
//                                                                         <Stack>
//                                                                             <label> Location Type <span style={{ color: 'red' }}>*</span> </label>
//                                                                             <Field
//                                                                                 as={Select}
//                                                                                 labelId="Select-Location-Type"
//                                                                                 id="selectedLocationType"
//                                                                                 name="selectedLocationType"
//                                                                                 size="small"
//                                                                             >
//                                                                                 <MenuItem disabled value="">
//                                                                                     -- Select Location Type --
//                                                                                 </MenuItem>
//                                                                                 {/* Define your locationTypeOptions here */}
//                                                                                 {/* <MenuItem value="Bottling Unit">Bottling Unit</MenuItem>
//                                                                              <MenuItem value="C&F Depot">C&F Depot</MenuItem> */}
//                                                                             </Field>
//                                                                             <ErrorMessage style={{ color: 'red' }}
//                                                                                 name="selectedLocationType"
//                                                                                 component="div"
//                                                                                 className="error"
//                                                                             />
//                                                                         </Stack>

//                                                                         {/* Location Name */}
//                                                                         <Stack>
//                                                                             <label>Location Name<span style={{ color: 'red' }}>*</span></label>
//                                                                             <Field
//                                                                                 as={Select}
//                                                                                 size="small"
//                                                                                 id="selectedLocationName"
//                                                                                 name="selectedLocationName"
//                                                                             >
//                                                                                 <MenuItem disabled value="">
//                                                                                     -- Select Location Type --
//                                                                                 </MenuItem>
//                                                                                 {/* Call your renderLocations function here */}
//                                                                             </Field>
//                                                                             <ErrorMessage style={{ color: 'red' }}
//                                                                                 name="selectedLocationName"
//                                                                                 component="div"
//                                                                                 className="error"
//                                                                             />
//                                                                         </Stack>

//                                                                         {/* Role Name */}
//                                                                         <Stack>
//                                                                             <label>Role Name<span style={{ color: 'red' }}>*</span></label>
//                                                                             <Field
//                                                                                 as={Select}
//                                                                                 size="small"
//                                                                                 id="selectedRole"
//                                                                                 name="selectedRole"
//                                                                             >
//                                                                                 <MenuItem disabled value="">
//                                                                                     -- Select Role --
//                                                                                 </MenuItem>
//                                                                                 {/* Call your renderRoles function here */}
//                                                                             </Field>
//                                                                             <ErrorMessage style={{ color: 'red' }}
//                                                                                 name="selectedRole"
//                                                                                 component="div"
//                                                                                 className="error"
//                                                                             />
//                                                                         </Stack>

//                                                                         {/* First Name */}
//                                                                         <Stack>
//                                                                             <label>First Name <span style={{ color: 'red' }}>*</span></label>
//                                                                             <Field
//                                                                                 as={TextField}
//                                                                                 size='small'
//                                                                                 type="text"
//                                                                                 name="firstName"
//                                                                                 error={false}
//                                                                             />
//                                                                             <ErrorMessage style={{ color: 'red' }}
//                                                                                 name="firstName"
//                                                                                 component="div"
//                                                                                 className="error"
//                                                                             />
//                                                                         </Stack>

//                                                                         {/* Middle Name */}
//                                                                         <Stack>
//                                                                             <label>Middle Name <span style={{ color: 'red' }}>*</span></label>
//                                                                             <Field
//                                                                                 as={TextField}
//                                                                                 size='small'
//                                                                                 type="text"
//                                                                                 name="middleName"
//                                                                                 error={false}
//                                                                             />
//                                                                             <ErrorMessage style={{ color: 'red' }}
//                                                                                 name="middleName"
//                                                                                 component="div"
//                                                                                 className="error"
//                                                                             />
//                                                                         </Stack>

//                                                                         {/* Last Name */}
//                                                                         <Stack>
//                                                                             <label>Last Name <span style={{ color: 'red' }}>*</span></label>
//                                                                             <Field
//                                                                                 as={TextField}
//                                                                                 size='small'
//                                                                                 type="text"
//                                                                                 name="lastName"
//                                                                                 error={false}
//                                                                             />
//                                                                             <ErrorMessage style={{ color: 'red' }}
//                                                                                 name="lastName"
//                                                                                 component="div"
//                                                                                 className="error"
//                                                                             />
//                                                                         </Stack>
//                                                                     </Stack>
//                                                                 </Grid>

//                                                                 {/* Right-side form inputs */}
//                                                                 <Grid item xs={12} sm={6}>
//                                                                     <Stack direction="column" spacing={2}>
//                                                                         {/* Email */}
//                                                                         <Stack>
//                                                                             <label>Email <span style={{ color: 'red' }}>*</span></label>
//                                                                             <Field
//                                                                                 as={TextField}
//                                                                                 size='small'
//                                                                                 type="email"
//                                                                                 name="email"
//                                                                                 error={false}
//                                                                             />
//                                                                             <ErrorMessage style={{ color: 'red' }}
//                                                                                 name="email"
//                                                                                 component="div"
//                                                                                 className="error"
//                                                                             />
//                                                                         </Stack>

//                                                                         {/* Mobile Number */}
//                                                                         <Stack>
//                                                                             <label>Mobile Number <span style={{ color: 'red' }}>*</span></label>
//                                                                             <Field
//                                                                                 as={TextField}
//                                                                                 size='small'
//                                                                                 type="text"
//                                                                                 name="mobileNo"
//                                                                                 error={false}
//                                                                             />
//                                                                             <ErrorMessage style={{ color: 'red' }}
//                                                                                 name="mobileNo"
//                                                                                 component="div"
//                                                                                 className="error"
//                                                                             />
//                                                                         </Stack>

//                                                                         <Stack pt={2} pb={1.5}>

//                                                                             <Button
//                                                                                 variant="contained"
//                                                                                 type="submit"
//                                                                                 color="primary"
//                                                                                 onClick={GetOtpClick}
//                                                                             // style={{ height: '30' }}

//                                                                             >
//                                                                                 Get OTP
//                                                                             </Button>



//                                                                         </Stack>


//                                                                         {/* OTP */}
//                                                                         <Stack>
//                                                                             <label> Enter OTP <span style={{ color: 'red' }}>*</span></label>
//                                                                             <Field
//                                                                                 as={TextField}
//                                                                                 size='small'
//                                                                                 type="text"
//                                                                                 name="otp"
//                                                                                 error={false}
//                                                                             // placeholder="OTP exactly six numberic numbers "

//                                                                             />
//                                                                             <ErrorMessage style={{ color: 'red' }}
//                                                                                 name="otp"
//                                                                                 component="div"
//                                                                                 className="error"
//                                                                             />
//                                                                         </Stack>
//                                                                     </Stack>
//                                                                 </Grid>
//                                                             </Grid>
//                                                             <Stack mt={3} mb={1}>
//                                                                 <Button
//                                                                     variant="contained"
//                                                                     type="submit"
//                                                                     color="primary"

//                                                                 >
//                                                                     Submit
//                                                                 </Button>

//                                                             </Stack>
//                                                         </Form>
//                                                     </Formik>
//                                                 </DialogContent>
//                                             </Dialog>

//                                         </div>


//                                     </Grid>
//                                 </Grid>
//                                 <br />
//                                 <Button type="button" fullWidth variant='outlined' color="primary"
//                                     sx={{ '&:hover': { backgroundColor: '#0073CF', color: "yellow" } }} onClick={coursesPage} >
//                                     <b>Verify Product</b>
//                                 </Button>
//                                 <br /><br />
//                                 <Box>
//                                     <Typography color="textSecondary">Bharth Petroleum Corporation Limited |Copyright @ 2021</Typography>
//                                     <Typography color="textSecondary"> A Product of  <Link href="https://www.ctel.in/">C-TEL InfoSystem Pvt.Ltd </Link></Typography >
//                                     <Typography > <Link href="http://10.10.10.193/BPCL/javacentral/site/build"> BPCL Build  Version Number 11.0.0.15</Link></Typography>
//                                     <Typography style={{ color: "#ad2438" }}>   Helpline  Numbers:+ 91 9553205000,+91  8886603398,+ ,
//                                         7660022717</Typography>
//                                     <Typography style={{ color: "#ad2438" }}> Night Shift(10:00PM to 7:00AM) :+91 9182059391 </Typography>
//                                 </Box>
//                             </Box>
//                         </Box>
//                     </Grid>


//                 </Grid>


//             </Container>



//         </div>
//     );
// };

// export default BpclLoginPage;