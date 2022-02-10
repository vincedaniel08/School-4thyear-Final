import loginBg from "../assets/images/forgotBg.png";
import agri from "../assets/images/loginBg.png";

const style = {
  root: {
    //backgroundColor: (theme) => theme.palette.background.default,
    backgroundColor: '#f5f5f5',
  },
  boxOne: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: (theme) => theme.palette.primary.main,
    //backgroundColor: "white",
    

  },
  textField: {
    mt: 4,
  
  },
  button: {
    mt: 4,
  },

  boxImage: {
    display: {
      xs: "flex",
      md: "flex",
    },
   // backgroundColor: (theme) => theme.palette.primary.main,
    backgroundImage: `url(${loginBg})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: {
      md: "none",
      lg: 800,
    },
    width: {
      md: "none",
      lg: "70%",
    },

    height: "100vh",
    mx: 1,
  
  },
  paperOne: {
    p: 4,
    m: 1,
    mx: {
      xs: 2,
      md: 3,
      lg: 12,
    },
    mt:8
   

    
  },
  signUpTypography: {
    fontSize: 12,
    ml: 1,
    color: (theme) => theme.palette.primary.main,
    cursor: "pointer",
  },
  boxLoadingButton:{
    display:"flex",
    m:2
    
  },
  logo: {
    backgroundImage: `url(${agri})`,
    backgroundPosition: 'center left',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: '120px',
    height: '25px',
    margin: 0,
    flexGrow: .5
},
appbar:{
  display:{
    xs:"none",
    md: "flex"
  }
},
};

export default style;
