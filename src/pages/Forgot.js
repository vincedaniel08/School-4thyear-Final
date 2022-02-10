import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Typography,
  Divider,

} from "@mui/material";
import style from "../styles/Forgot";
import LoadingButton from "@mui/lab/LoadingButton";
import { useHistory } from "react-router-dom";
//icon

import { getAuth, sendPasswordResetEmail } from "firebase/auth";


export default function Forgot() {

  const history = useHistory();


  const [email, setEmail] = useState("");
  

  const [loading, setLoading] = React.useState(false);

  const buttonShop = () => {
    history.push('/shop');
  };
  const buttonHome = () => {
    history.push("/");
  };

 
  const buttonSignup = () => {
    history.push("/register");
  };
  const buttonLogin = () => {
    history.push("/login");
  };

  const handleChange =  (e) => {
    setEmail(e.target.value);
  };



  const buttonSend = () => {
    setLoading(true);

    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        alert("Password reset email sent!");
        setEmail("");
        setLoading(false);
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        setLoading(false);
        // ..
      });
    
  };

  return (
    <Box sx={style.root}>
      {/* <AppBar position="static" sx={style.appbar}>
        <Toolbar sx={{ background: "white", boxShadow: 1 }}>

          <Button onClick={buttonShop} >
           Shop
          </Button>

          <Typography
            variant="h6"
            component="div"
            color="primary"
            sx={{ flexGrow: 0.5 }}
          />

          <Box sx={style.logo} onClick={buttonHome} />
          <Button color="primary" variant="outlined"  >
            Download this App
          </Button>
        </Toolbar>
      </AppBar> */}

      <Box sx={style.boxOne}>
        <Box sx={style.boxImage}></Box>
        <Paper sx={style.paperOne}>
          <Typography color="textPrimary">Forgot Account</Typography>
          <TextField
            label="Email"
            variant="outlined"
            sx={style.textField}
            fullWidth
            onChange={handleChange}
            value={email}
          />

          

          <LoadingButton
            fullWidth
            sx={style.button}
            variant="contained"
            onClick={buttonSend}
            size="large"
            loading={loading}
          >
             Send
          </LoadingButton>
         

          <Typography color="textPrimary">
            {" "}
            <Divider sx={{ mt: 2 }} />
          </Typography>

         

          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              mt: 1,
            }}
          >
            <Typography
              color="textPrimary"
              sx={style.signUpTypography}
              onClick={buttonLogin}
            >
              Login
            </Typography>
            <Typography color="textPrimary" sx={{ fontSize: 12 ,ml:2}}>
              New to Agrishop?
            </Typography>
            <Typography
              color="textPrimary"
              sx={style.signUpTypography}
              onClick={buttonSignup}
            >
              Sign Up
            </Typography>
          </Box>
        </Paper>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: 110,
          backgroundColor: (theme) => theme.palette.primary.main,
        }}
      />
      <Box sx={{height:{xs:"20px",lg:0}}}/>
     
    </Box>
  );
}
