import React, { useState, useEffect } from "react";
import DatePicker from "@mui/lab/DatePicker";
import DateAdapter from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import style from "../styles/Home";
import Navbar from "../components/Navbar";
import {Helmet} from "react-helmet";
import {
  Box,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Avatar,
  IconButton,
  Button,
  TextField,
  Paper,
  Modal,
} from "@mui/material";
import Portal from "@mui/material/Portal";
import LoadingButton from "@mui/lab/LoadingButton";
// import post1 from "../assets/images/post1.jpeg";
// import bryce from "../assets/images/bryce.jpg";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

//backend
import { signOut } from "firebase/auth";
import { db, auth, storage } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  collection,
  addDoc,

} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useSelector } from "react-redux";

const Home = () => {
  const userData = useSelector((state) => state.user);
  const [comment, setComment] = React.useState("");
  const [caption, setCaption] = React.useState("");
  const [show, setShow] = React.useState(false);
  const container = React.useRef(null);
  const [loading, setLoading] = useState(false);
  const date = new Date();
  const [name, setName] = useState([""]);
  const [bio, setBio] = useState([""]);
  const [work, setWork] = useState([""]);
  const [birthDate, setBirthDate] = React.useState(new Date(""));

  const [modalNewAccount, setModalNewAccount] = useState(false);

  const [address, setAddress] = useState("");

  const handleClick = () => {
    setShow(!show);
  };

  const HandleChangeComment = (e) => {
    setComment(e.target.value);
  };
  const HandleChangeCaption = (e) => {
    setCaption(e.target.value);
  };
  const HandleChangeName = (e) => {
    setName(e.target.value);
  };
  const HandleChangeBio = (e) => {
    setBio(e.target.value);
  };
  const HandleChangeWork = (e) => {
    setWork(e.target.value);
  };
  const HandleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const buttonModalLogout = () => {

    signOut(auth)
    .then(() => {
      // Sign-out successful.
     // dispatch(setCart([]))
      
    
      
    })
  };

  const [userImg, setUserImg] = useState(null);
  const [, setError] = useState("");
  const types = ["image/png", "image/jpeg"]; // image types
  const productImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setUserImg(selectedFile);
      setError("");
    } else {
      setUserImg(null);
      setError("Please select a valid image type (jpg or png)");
    }
  };

  const buttonPost = () => {
    if (caption === "") {
      //alert("walang caption");

     // alert("my image at caption");
      auth.onAuthStateChanged((user) => {
        const storageRef = ref(
          storage,
          `post-images/${date.toLocaleTimeString() + userImg.name}`
        );
        const uploadTask = uploadBytesResumable(storageRef, userImg, types);

        // const uploadTask = ref(storage, `product-images/${productImg.name}`).put(productImg);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
          },
          (err) => setError(err.message),
          () => {
            //  const UserDocRef = doc(collection(db, "Products"));
            // var UserDocRef = doc(db, "Post", user.uid);
            var UserDocRef = collection(db, "Post");
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
              addDoc(UserDocRef, {
                UserUid: user.uid,
                UserEmail: user.email,
                PostPicName: date.toLocaleTimeString() + userImg.name,
                Caption: "",
                PostImg: url,
                CreatedDate:
                  date.toLocaleDateString() + " " + date.toLocaleTimeString(),
              })
                .then(() => {
                  setCaption("");
                  setShow(false);
                  setUserImg(null);
                  setError("");
                  document.getElementById("file").value = "";
                  alert("Your Post was Succesfully Posted on the Board!");
                  setTimeout(() => {}, 3000);
                })
                .catch((err) => setError(err.message));
            });
          }
        );
      });
    } else if (userImg === null) {
     // alert("walang image");
      auth.onAuthStateChanged(async (user) => {
       await addDoc(collection(db, "Post"), {
          UserUid: user.uid,
          UserEmail: user.email,
          PostPicName: "",
          Caption: caption,
          PostImg: "",
          CreatedDate:
            date.toLocaleDateString() + " " + date.toLocaleTimeString(),
        });
      });
      alert("Your Post was Succesfully Posted on the Board!");
      setCaption("");
      setShow(false);
    } else {
     // alert("my image at caption");
      auth.onAuthStateChanged((user) => {
        const storageRef = ref(
          storage,
          `post-images/${date.toLocaleTimeString() + userImg.name}`
        );
        const uploadTask = uploadBytesResumable(storageRef, userImg, types);

        // const uploadTask = ref(storage, `product-images/${productImg.name}`).put(productImg);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
          },
          (err) => setError(err.message),
          () => {
            //  const UserDocRef = doc(collection(db, "Products"));
            // var UserDocRef = doc(db, "Post", user.uid);
            var UserDocRef = collection(db, "Post");
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
              addDoc(UserDocRef, {
                UserUid: user.uid,
                UserEmail: user.email,
                PostPicName: date.toLocaleTimeString() + userImg.name,
                Caption: caption,
                PostImg: url,
                CreatedDate:
                  date.toLocaleDateString() + " " + date.toLocaleTimeString(),
              })
                .then(() => {
                  setCaption("");
                  setShow(false);
                  setUserImg(null);
                  setError("");
                  document.getElementById("file").value = "";
                  alert("Your Post was Succesfully Posted on the Board!");
                  setTimeout(() => {}, 3000);
                })
                .catch((err) => setError(err.message));
            });
          }
        );
      });
    }
  };

  const buttonSaveModal = () => {
    setLoading(true);
    if (
      name === "" ||
      bio === "" ||
      work === "" ||
      userImg === null ||
      address === ""
    ) {
      alert("All Field Required");
      setLoading(false);
    } else {
      onAuthStateChanged(auth, (user) => {
        const storageRef = ref(
          storage,
          `users-images/${date.toLocaleTimeString() + userImg.name}`
        );
        const uploadTask = uploadBytesResumable(storageRef, userImg, types);

        // const uploadTask = ref(storage, `product-images/${productImg.name}`).put(productImg);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
          },
          (err) => setError(err.message),
          () => {
            //  const UserDocRef = doc(collection(db, "Products"));
            var UserDocRef = doc(db, "User", user.uid);
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
              setDoc(UserDocRef, {
                UserUid: user.uid,
                UserEmail: user.email,
                ProfilePicName: date.toLocaleTimeString() + userImg.name,
                CoverPicName: "",
                CoverImg: "",
                Name: name,
                Address: address,
                ProfileImg: url,
                Work: work,
                Bio: bio,
                Email: user.email,
                BirthDay: birthDate.toString(),
                CreatedDate:
                  date.toLocaleDateString() + " " + date.toLocaleTimeString(),
              })
                .then(() => {
                  setName("");
                  setBio("");
                  setWork("");
                  setAddress("");

                  setError("");
                  document.getElementById("file").value = "";
                  alert(" Your Account has been successfully created");
                  setLoading(false);
                  setModalNewAccount(false);
                  setTimeout(() => {}, 3000);
                })
                .catch((err) => setError(err.message));
            });
          }
        );
      });
    }
  };

  const buttonComment = (post) => {
    auth.onAuthStateChanged(async (user) => {
      await addDoc(collection(db, "Comment"), {
        UserUid: user.uid,
        Comment: comment,
        PostUid: post.id,
        PostUserUid: post.UserUid,
        CreatedDate:
          date.toLocaleDateString() + " " + date.toLocaleTimeString(),
      });
    });
    alert("Your Comment was Succesfully Posted on the Board!");
    setComment("");
    

  }

  const buttonLike = (post)=>{
    auth.onAuthStateChanged(async (user) => {
       await addDoc(collection(db, "Like"), {
        UserUid: user.uid,
        Like: true,
        PostUid: post.id,
        PostUserUid: post.UserUid,
        CreatedDate:
          date.toLocaleDateString() + " " + date.toLocaleTimeString(),
      });
    });
    alert("Your Comment was Succesfully Posted on the Board!");
    setComment("");
    
  }

  useEffect(() => {
    const getData = () => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const docRef = doc(db, "User", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setModalNewAccount(false);
            console.log("data exist");
          } else {
            setModalNewAccount(true);
            console.log("not exist");
            console.log(user.email);
          }
        }
      });
    };
    return getData();
  }, []);

  return (
    <Box sx={style.root}>
       <Helmet>
                <title>Volt</title>
                <meta
                  name="Home"
                  content="Volt, Home,  Profile , Dark Mode, Change Language"
                />
                
            </Helmet>



      <Navbar />
      <Modal
        open={modalNewAccount}
        //onClose={handleClose}
      >
        <Box sx={style.modalBox}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color="textPrimary"
          >
            Setting up your account!
          </Typography>

          <TextField
            multiline
            variant="filled"
            size="small"
            fullWidth
            label="Name"
            margin="normal"
            color="primary"
            value={name}
            onChange={HandleChangeName}
          />
          <TextField
            multiline
            variant="filled"
            size="small"
            fullWidth
            label="Bio"
            margin="normal"
            color="primary"
            value={bio}
            onChange={HandleChangeBio}
          />
          <TextField
            multiline
            variant="filled"
            size="small"
            fullWidth
            label="Work"
            margin="normal"
            color="primary"
            value={work}
            onChange={HandleChangeWork}
          />

          <TextField
            multiline
            variant="filled"
            size="small"
            fullWidth
            label="Address"
            margin="normal"
            color="primary"
            value={address}
            onChange={HandleChangeAddress}
          />

          <Box>
            {" "}
            {/* 
            <FormControl fullWidth variant="filled" size="small" margin="normal">
              <InputLabel id="demo-simple-select-label">Region</InputLabel>
              <Select
                // sx={style.labelSelect}
                // labelId="demo-simple-select-label"
                // id="demo-simple-select"
                // value={barangay}
                // label="Barangay"
                // onChange={handleChangeBarangay}
                onSelect={region}
                onChange={province} 
               
              
              >
        
                {
                        regionData && regionData.length > 0 && regionData.map((item) => <MenuItem 
                            key={item.region_code} value={item}>{item.region_name}</MenuItem >)
                    }
              </Select>
            </FormControl>

            <FormControl fullWidth variant="filled" size="small" margin="normal">
              <InputLabel id="demo-simple-select-label">Province</InputLabel>
              <Select
                // sx={style.labelSelect}
                // labelId="demo-simple-select-label"
                // id="demo-simple-select"
                // value={barangay}
                // label="Barangay"
                // onChange={handleChangeBarangay}
                
                onChange={city} 
               
              >
        
                {provinceData && provinceData.length > 0 && provinceData.map((item) => <MenuItem
                            key={item.province_code} value={item}>{item.province_name}</MenuItem>)
                    }
              </Select>
            </FormControl>

            <FormControl fullWidth variant="filled" size="small" margin="normal">
              <InputLabel id="demo-simple-select-label">City</InputLabel>
              <Select
                // sx={style.labelSelect}
                // labelId="demo-simple-select-label"
                // id="demo-simple-select"
                // value={barangay}
                // label="Barangay"
                // onChange={handleChangeBarangay}
                onChange={barangay} 
               
              >
        
                { cityData && cityData.length > 0 && cityData.map((item) => <MenuItem
                            key={item.city_code} value={item}>{item.city_name}</MenuItem>)
                    }
              </Select>
            </FormControl>

            <FormControl fullWidth variant="filled" size="small" margin="normal">
              <InputLabel id="demo-simple-select-label">Barangay</InputLabel>
              <Select
                // sx={style.labelSelect}
                // labelId="demo-simple-select-label"
                // id="demo-simple-select"
                // value={barangay}
                // label="Barangay"
                // onChange={handleChangeBarangay}
                onChange={brgy}
               
              >
        
                {  barangayData && barangayData.length > 0 && barangayData.map((item) => <MenuItem
                            key={item.brgy_code} value={item.brgy_name}>{item.brgy_name}</MenuItem>)
                    }
              </Select>
            </FormControl>
             */}{" "}
          </Box>

          <Box sx={{ my: 3 }}>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DatePicker
                format="MM/dd/yyy"
                label="Birth Date"
                value={birthDate}
                onChange={(newValue) => {
                  setBirthDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField fullWidth size="small" {...params} />
                )}
              />
            </LocalizationProvider>
          </Box>

          <Paper sx={{ mt: 3, height: "100%", p: 1 }}>
            {/** 
                <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
                  <Button>Upload Product Image</Button>
                </Box>
              </Box>
                */}
            <Typography sx={{ m: 1 }} color="textPrimary" fontSize="caption">
              Select your Volt Profile Picture
            </Typography>
            <Box sx={{ ml: 1 }}>
              <input
                type="file"
                className="form-control"
                id="file"
                required
                onChange={productImgHandler}
              />
            </Box>
          </Paper>

          <LoadingButton
            variant="contained"
            sx={{ mt: 2, backgroundColor: "#EE4B2B" }}
            loading={loading}
            onClick={buttonModalLogout}
          >
            Logout
          </LoadingButton>
          <LoadingButton
            loading={loading}
            variant="contained"
            onClick={buttonSaveModal}
            sx={{ mt: 2, ml: 2 }}
          >
            Save
          </LoadingButton>
        </Box>
      </Modal>

      <Box sx={style.holder}>
        <Paper sx={style.mainContainer}>
          <Box sx={style.statusContainer}>
            <Box>
              <Avatar
                alt="profile2"
                src={userData.users.map((user) => user.ProfileImg)}
              />
            </Box>
            <Box sx={style.statusTextContainer}>
              <TextField
                placeholder="Ask or Share Something ..."
                sx={style.statusText}
                multiline
                inputProps={{ maxLength: 100, style: { color: "gray" } }}
                value={caption}
                onChange={HandleChangeCaption}
              />
            </Box>
            <Box sx={style.statusButtonContainer}>
              <Button
                variant="contained"
                sx={style.postButton}
                onClick={buttonPost}
              >
                Post
              </Button>
              <Button
                variant="contained"
                sx={style.uploadButton}
                onClick={handleClick}
              >
                <AddPhotoAlternateIcon />
              </Button>
            </Box>
          </Box>

          {show ? (
            <Portal container={container.current}>
              <input
                type="file"
                className="form-control"
                id="file"
                required
                onChange={productImgHandler}
              />
            </Portal>
          ) : null}

          <Box sx={{ p: 1, ml: 7 }} ref={container} />
        </Paper>
      </Box>

      {/* <Box sx={style.warningSuccess}>
        <Typography sx={style.warningText}>
          Your Post was Succesfully Posted on the Board!
        </Typography>
      </Box>

      <Box sx={style.warningFailed}>
        <Typography sx={style.warningText}>
          There was a problem in posting your status, Please try Again!
        </Typography>
      </Box> */}

      {userData.posts.map((post, key) => (
        <Box sx={style.holder2} key={key + 1}>
          {/*Eto ung main container*/}
          <Box sx={style.mainContainer}>
            {/*Per Post Container*/}
            <Box sx={style.postContainer}>
              <Card sx={style.cardMain}>
                <Box sx={style.posterDetails}>
                  <Box sx={style.propicHolder}>
                    <Avatar alt="picture" 
                    src={userData.allusers.find((user) => post.UserUid === user.UserUid).ProfileImg}
                     sx={style.propic} />
                  </Box>
                  <Box sx={style.infoName}>
                    <Typography sx={style.namePoster}>
                      {userData.allusers.find((user) => post.UserUid === user.UserUid).Name}
                    </Typography>
                    <Typography sx={style.timePoster}>
                     {post.CreatedDate}
                    </Typography>
                  </Box>
                </Box>

                <hr
                  style={{
                    width: "95%",
                    border: "1px solid #cdcdcd",
                    marginTop: "5px",
                  }}
                />

                <CardContent>
                  <Typography sx={style.post}>{post.Caption}</Typography>
                </CardContent>
                {post.PostImg === "" ? (
                  ""
                ) : (
                  <CardMedia
                    component="img"
                    alt="post"
                    image={post.PostImg}
                    height="400px"
                  />
                )}
             
                <CardActions sx={style.iContainer}>
                  <IconButton disableRipple sx={style.iconButtonContainer} onClick={()=>buttonLike(post)}>
                    <ThumbUpIcon sx={style.icon} color="primary"/>
                    <Typography sx={style.iconText}>{userData.likes.filter(like => (
                      post.id === like.PostUid)).length  } Like </Typography>
                  </IconButton>
          
                  <IconButton disableRipple sx={style.iconButtonContainer}>
                    <ModeCommentIcon sx={style.icon} />
                    <Typography sx={style.iconText}>Comment</Typography>
                  </IconButton>
                </CardActions>


                <Paper sx={style.commentMainContainer}>
                  <TextField
                    sx={style.commentBox}
                    placeholder="Write a comment ..."
                    multiline
                    inputProps={{ maxLength: 100, style: { color: "gray" } }}
                    value={comment}
                    onChange={HandleChangeComment}
                  />
                </Paper>
                <Box sx={style.buttonContainer}>
                  <Button variant="contained" sx={style.commentButton} onClick={() =>buttonComment(post)}>
                    Comment
                  </Button>
                </Box>

                <CardContent>
                  {/*Comment MAIN*/}
                  
                      
                  {userData.comments.filter(comment => (
                      post.id === comment.PostUid)).map(filterComment => (

                      
                  <Box sx={style.commentMain} >
                    {/*Commentor Info*/}
                    <Box sx={style.posterDetailsNew}>
                      <Box sx={{ marginRight: "10px" }}>
                        <Avatar alt="picture" 
                        src={userData.allusers.find((user) => filterComment.UserUid === user.UserUid).ProfileImg}
                        sx={style.propic} />
                      </Box>
                      <Box sx={style.infoName}>
                        <Typography sx={style.namePoster}>
                        {userData.allusers.find((user) => filterComment.UserUid === user.UserUid).Name}
                        </Typography>
                        <Typography sx={style.timePoster}>
                        {filterComment.CreatedDate}
                        </Typography>
                      </Box>
                    </Box>

                    {/*Comments*/}
                    <Box>
                      <Typography sx={style.commentText}>
                        {filterComment.Comment}
                      </Typography>
                    </Box>
                  </Box>
               ))}

                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Home;
