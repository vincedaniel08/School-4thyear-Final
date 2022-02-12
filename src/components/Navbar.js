import React, { useState } from "react";
import style from "../styles/Navbar";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import logo from "../assets/images/logo.png";
import { Link as RLink } from "react-router-dom";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Link,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  Menu,
} from "@mui/material";

//language

import * as en from "../language/en";
import * as tl from "../language/tl";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, setLang } from "../redux/actions/uiAction";
import { getAuth, signOut } from "firebase/auth";
const Navbar = () => {
  const ui = useSelector((state) => state.ui);
  const [language] = useState(ui.lang === "en" ? en : tl);
  const dispatch = useDispatch();
  const _toggleTheme = () => {
    dispatch(toggleTheme(!ui.isDarkMode));
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const buttonLogout = () => {
    const auth = getAuth();
    signOut(auth)
          .then(() => {
            // Sign-out successful.
           // dispatch(setCart([]))
            
            
           
          })
         
  }
  return (
    <Box>
      {/*Navbar start*/}
      <AppBar sx={style.appbarMain}>
        <Toolbar sx={style.mainNavContainer}>
          <Box component="span" sx={{ flexGrow: 0.05 }} />

          <Box sx={style.logoContainer}>
            <img
              alt="logo"
              src={logo}
              style={{
                width: "100px",
              }}
            />
          </Box>

          <Box component="span" sx={{ flexGrow: 1 }} />

          <Box
            sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center" }}
          >
            <Link
              to="/"
              component={RLink}
              style={{ textDecoration: "none", margin: "10px" }}
            >
              <Typography sx={style.linkText1}>
                {language.HEADER_Home}
              </Typography>
            </Link>

            <Link
              to="/profile"
              component={RLink}
              style={{ textDecoration: "none", margin: "10px" }}
            >
              <Typography sx={style.linkText1}>
                {language.HEADER_Profile}
              </Typography>
            </Link>

            <Link
              // to="/"
               component={RLink}
              style={{ textDecoration: "none", margin: "10px" }}
            >
              <Typography sx={style.linkText1}  onClick={buttonLogout}>
                {language.HEADER_Logout}
              </Typography>
            </Link>

            <IconButton onClick={_toggleTheme}>
              {ui.isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>

            <FormControl variant="standard" sx={{ mb: 3, ml: 1, mt: 3 }}>
              <Select
                value={ui.lang}
                label="Language"
                onChange={(event) => dispatch(setLang(event.target.value))}
                sx={{ fontSize: 10, color: "white" }}
                disableUnderline
              >
                <MenuItem value={"en"} sx={{ fontSize: 10 }}>
                  English
                </MenuItem>
                <MenuItem value={"tl"} sx={{ fontSize: 10 }}>
                  Tagalog
                </MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box
            sx={{ display: { xs: "flex", lg: "none" }, alignItems: "center" }}
          >
            <IconButton
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuRoundedIcon
                fill="white"
                style={{ height: "inherit", fontSize: 30,color:"white" }}
               
              />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link
                  to="/"
                  component={RLink}
                  style={{ textDecoration: "none", margin: "10px" }}
                >
                  <Typography sx={style.linkText} color="textPrimary" >
                    {language.HEADER_Home}
                  </Typography>
                </Link>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <Link
                  to="/profile"
                  component={RLink}
                  style={{ textDecoration: "none", margin: "10px" }}
                >
                  <Typography sx={style.linkText} color="textPrimary" >
                    {language.HEADER_Profile}
                  </Typography>
                </Link>
              </MenuItem>

              <MenuItem onClick={handleClose}>
              <Link
              //to="/"
              //component={RLink}
              style={{ textDecoration: "none", margin: "10px" }}
              
            >
              <Typography sx={style.linkText} color="textPrimary"  onClick={buttonLogout}>
                {language.HEADER_Logout}
              </Typography>
            </Link>
              </MenuItem>

              <MenuItem onClick={_toggleTheme}>
                  <Typography color="textPrimary" style={{   fontFamily: 'Poppins', margin: "10px" }} onClick={_toggleTheme}>
                    {ui.isDarkMode ? "Dark Mode" : "Light Mode"}
                  </Typography>
              </MenuItem>

              <MenuItem>
              <FormControl variant="standard" fullWidth sx={{ml:1.5}}>
              <Select
                value={ui.lang}
                label="Language"
                onChange={(event) => dispatch(setLang(event.target.value))}
                sx={{ fontSize: 15,fontFamily: 'Poppins' ,color:"textPrimary"}}
                disableUnderline
              >
                <MenuItem value={"en"} sx={{ fontSize: 10, fontFamily: 'Poppins',color:"textPrimary"}}>
                  English
                </MenuItem>
                <MenuItem value={"tl"} sx={{ fontSize: 10, }}>
                  Tagalog
                </MenuItem>
              </Select>
            </FormControl>
            </MenuItem>

            </Menu>
          </Box>

          <Box component="span" sx={{ flexGrow: 0.1 }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
