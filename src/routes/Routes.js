import React,{useEffect, useState} from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import theme from '../utils/theme';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import PublicRoute from "./publicRoute";
import PrivateRoute from "./privateRoute";
import Home from "../pages/Home";

import NotFound from "../pages/NotFound"
import Loading from "../components/Loading";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomeNoUser from "../pages/HomeNoUser";
import Forgot from "../pages/Forgot";
import Profile from "../pages/Profile";

//backend
import { onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { getTheme, getLang, } from "../redux/actions/uiAction";
// import { setCart, setProduct, setUser, setChatUser} from "../redux/actions/userAction";
// import {  where,collection,query,onSnapshot,orderBy } from "firebase/firestore";

export default function Routes() {
    const dispatch = useDispatch();
    const ui = useSelector(state => state.ui)
   // const userData = useSelector(state => state.user)
    const THEME = createTheme(theme(ui.isDarkMode));
    const [state, setstate] = useState({
        isAuth: false,
        isLoading: true,
      });

      useEffect(() => {
        console.log("gago")
        onAuthStateChanged(auth, (user) => {
         // console.log(user.uid);
            
            
          if (user && user.emailVerified) {
            // ...
            console.log(auth);
            setstate({ isAuth: true, isLoading: false });
    
      
           
    
          } else {
            setstate({ isAuth: false, isLoading: false });
            
          }
        });

        dispatch(getLang(), getTheme());
        
      }, [dispatch]);
    
    
    
    
      if (state.isLoading) {
        return <Loading />;
      }

    return (
        <ThemeProvider theme={THEME}>
        <Router>
            <Switch>
    
                <Route path="/" exact>
            <Redirect to="/homenouser" />
          </Route>

          <PrivateRoute
            component={Home} 
            isAuth={state.isAuth}
            path="/home"
            exact
          />
           <PrivateRoute
            component={Profile} 
            isAuth={state.isAuth}
            path="/profile"
            exact
          />
          
          <PublicRoute
            restricted={true}
            component={HomeNoUser}
            isAuth={state.isAuth}
            path="/homenouser"
            exact
          />
            <PublicRoute
            restricted={true}
            component={Login}
            isAuth={state.isAuth}
            path="/login"
            exact
          />
            <PublicRoute
            restricted={true}
            component={Register}
            isAuth={state.isAuth}
            path="/register"
            exact
          />
           <PublicRoute
            restricted={true}
            component={Forgot}
            isAuth={state.isAuth}
            path="/forgot"
            exact
          />
         
         
          <Route component={NotFound} />
            </Switch>

        </Router>
        </ThemeProvider>

    );
}