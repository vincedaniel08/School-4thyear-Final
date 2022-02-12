import React, { useEffect } from "react";
import style from "../styles/Profile";
import { Helmet } from "react-helmet";
import {
  Paper,
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
  Modal,
} from "@mui/material";

import Navbar from "../components/Navbar";

import PlaceIcon from "@mui/icons-material/Place";
import CakeIcon from "@mui/icons-material/Cake";
import WorkIcon from "@mui/icons-material/Work";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";

import post1 from "../assets/images/post1.jpeg";
//import bryce from "../assets/images/bryce.jpg";
import { useHistory } from "react-router-dom";
//backend
import { db, auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, collection, addDoc } from "firebase/firestore";
import { useSelector } from "react-redux";

const Profile = () => {
  const userData = useSelector((state) => state.user);
  const history = useHistory();
  const date = new Date();
  const [comment, setComment] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openPass, setOpenPass] = React.useState(false);
  const handleOpenPass = () => setOpenPass(true);
  const handleClosePass = () => setOpenPass(false);

  const HandleChangeComment = (e) => {
    setComment(e.target.value);
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
  };
  const buttonUpdateProfile = () => {
    // auth.onAuthStateChanged(async (user) => {
    //   const docRef = await addDoc(collection(db, "Comment"), {
    //     UserUid: user.uid,
    //     Comment: comment,
    //     PostUid: post.id,
    //     PostUserUid: post.UserUid,
    //     CreatedDate:
    //       date.toLocaleDateString() + " " + date.toLocaleTimeString(),
    //   });
    // });
    // alert("Your Comment was Succesfully Posted on the Board!");
    // setComment("");
  };
  useEffect(() => {
    const getData = () => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const docRef = doc(db, "User", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            console.log("data exist");
          } else {
            history.push("/");
            console.log("not exist");
            console.log(user.email);
          }
        }
      });
    };
    return getData();
  }, [history]);
  return (
    <Box sx={style.root}>
      <Helmet>
        <title>{userData.users.map((user) => user.Name)}</title>
        <meta
          name="Profile"
          content="Name, Bio, Birth Day, Address, Email, Edit Profile, Settings "
        />
      </Helmet>
      <Navbar />

      <Box sx={style.holder}>
        <Paper sx={style.mainContainer}>
          {/*Cover Photo*/}
          <Box>
            <img
              alt="cover"
              src={post1}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "20vh",
              }}
            />
          </Box>

          {/*Profile Picture*/}
          <Box sx={style.proPicContainer}>
            <Avatar
              alt="profile picture"
              src={userData.users.map((user) => user.ProfileImg)}
              sx={style.profilePicture}
            />
            <Box>
              <Button
                onClick={handleOpen}
                variant="outlined"
                sx={style.editButton}
              >
                Edit Profile
              </Button>
              <IconButton onClick={handleOpenPass}>
                <SettingsIcon sx={style.changePass} />
              </IconButton>
            </Box>
          </Box>

          {/*Info*/}
          <Box sx={style.infoContainer}>
            <Typography sx={style.nameInfo} color="textPrimary">
              {userData.users.map((user) => user.Name)}
            </Typography>
            <Typography sx={style.codeName}>@Papayang-Hilaw.exe</Typography>
          </Box>

          {/*Bio Description*/}
          <Box sx={style.infoContainer}>
            <Typography sx={style.bioData}>
              Bio? {userData.users.map((user) => user.Bio)}.
            </Typography>
          </Box>

          {/*Other Info*/}
          <Box sx={style.infoContainer}>
            <Box sx={style.perInfo}>
              <WorkIcon sx={style.icon2} />
              <Typography sx={style.otherInfoText}>
                {userData.users.map((user) => user.Work)}
              </Typography>
            </Box>
            <Box sx={style.perInfo}>
              <PlaceIcon sx={style.icon2} />
              <Typography sx={style.otherInfoText}>
                {userData.users.map((user) => user.Address)}
              </Typography>
            </Box>
            <Box sx={style.perInfo}>
              <CakeIcon sx={style.icon2} />
              <Typography sx={style.otherInfoText}>
                {userData.users.map((user) => user.BirthDay)}
              </Typography>
            </Box>
            <Box sx={style.perInfo}>
              <MailIcon sx={style.icon2} />
              <Typography sx={style.otherInfoText}>
                {userData.users.map((user) => user.Email)}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>

      {/*Warnings*/}

      {/* <Box sx={style.warningSuccess}>
                <Typography sx={style.warningText}>Your Profile is Successfully Updated!</Typography>
            </Box>

            <Box sx={style.warningFailed}>
                <Typography sx={style.warningText}>There was a problem in updating your profile, Please try Again!</Typography>
            </Box> */}

      {/*User Posts*/}

      {userData.posts
        .filter(
          (post) =>
            post.UserUid === userData.users.map((user) => user.UserUid)[0]
        )
        .map((filterPost) => (
          <Box sx={style.holder2}>
            {/*Eto ung main container*/}
            <Box sx={style.mainContainer}>
              {/*Per Post Container*/}

              <Box sx={style.postContainer}>
                <Card sx={style.cardMain}>
                  <Box sx={style.posterDetails}>
                    <Box sx={style.propicHolder}>
                      <Avatar
                        alt="picture"
                        src={
                          userData.allusers.find(
                            (user) => filterPost.UserUid === user.UserUid
                          ).ProfileImg
                        }
                        sx={style.propic}
                      />
                    </Box>
                    <Box sx={style.infoName}>
                      <Typography sx={style.namePoster}>
                        {
                          userData.allusers.find(
                            (user) => filterPost.UserUid === user.UserUid
                          ).Name
                        }
                      </Typography>
                      <Typography sx={style.timePoster}>
                        {filterPost.CreatedDate}
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
                    <Typography sx={style.post}>
                      {filterPost.Caption}
                    </Typography>
                  </CardContent>
                  {filterPost.PostImg === "" ? (
                    ""
                  ) : (
                    <CardMedia
                      component="img"
                      alt="post"
                      image={filterPost.PostImg}
                      height="400px"
                    />
                  )}

                  <CardActions sx={style.iContainer}>
                    <IconButton disableRipple sx={style.iconButtonContainer}>
                      <ThumbUpIcon sx={style.icon} />
                      <Typography sx={style.iconText}>Like</Typography>
                    </IconButton>

                    <IconButton disableRipple sx={style.iconButtonContainer}>
                      <ModeCommentIcon sx={style.icon} />
                      <Typography sx={style.iconText}>Comment</Typography>
                    </IconButton>
                  </CardActions>

                  <Box sx={style.commentMainContainer}>
                    <TextField
                      sx={style.commentBox}
                      placeholder="Write a comment ..."
                      multiline
                      inputProps={{ maxLength: 100, style: { color: "gray" } }}
                      value={comment}
                      onChange={HandleChangeComment}
                    />
                  </Box>
                  <Box sx={style.buttonContainer}>
                    <Button
                      variant="contained"
                      sx={style.commentButton}
                      onClick={() => buttonComment(filterPost)}
                    >
                      Comment
                    </Button>
                  </Box>

                  <CardContent>
                    {/*Comment MAIN*/}

                    {userData.comments
                      .filter((comment) => filterPost.id === comment.PostUid)
                      .map((filterComment) => (
                        <Box sx={style.commentMain}>
                          {/*Commentor Info*/}
                          <Box sx={style.posterDetailsNew}>
                            <Box sx={{ marginRight: "10px" }}>
                              <Avatar
                                alt="picture"
                                src={
                                  userData.allusers.find(
                                    (user) =>
                                      filterComment.UserUid === user.UserUid
                                  ).ProfileImg
                                }
                                sx={style.propic}
                              />
                            </Box>
                            <Box sx={style.infoName}>
                              <Typography sx={style.namePoster}>
                                {
                                  userData.allusers.find(
                                    (user) =>
                                      filterComment.UserUid === user.UserUid
                                  ).Name
                                }
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

      <Modal open={open} onClose={handleClose}>
        <Box sx={style.modalStyle}>
          <Box sx={style.modalBoxButtonContainer}>
            <Button variant="contained" sx={style.coverPhotoButton}>
              Choose Cover Photo
            </Button>
            <Button variant="contained" sx={style.profilePictureButton}>
              Choose Profile Picture
            </Button>
          </Box>
          <Box sx={style.textAndBoxContainer}>
            <Box sx={style.textAndBox}>
              <Typography sx={style.infoLabel}>Name</Typography>
              <TextField
                sx={style.infoText}
                defaultValue={userData.users.map((user) => user.Name)}
              />
            </Box>

            <Box sx={style.textAndBox}>
              <Typography sx={style.infoLabel}>Work</Typography>
              <TextField
                sx={style.infoText}
                defaultValue={userData.users.map((user) => user.Work)}
              />
            </Box>

            <Box sx={style.textAndBox}>
              <Typography sx={style.infoLabel}>Address</Typography>
              <TextField
                sx={style.infoText}
                defaultValue={userData.users.map((user) => user.Address)}
              />
            </Box>

            <Box sx={style.textAndBox}>
              <Typography sx={style.infoLabel}>Birthday</Typography>
              <TextField
                sx={style.infoText}
                defaultValue={userData.users.map((user) => user.BirthDay)}
              />
            </Box>
            <Box sx={style.textAndBox}>
              <Typography sx={style.infoLabel}>Email</Typography>
              <TextField
                disabled
                sx={style.infoText}
                defaultValue={userData.users.map((user) => user.Email)}
              />
            </Box>

            <Box sx={style.textAndBox}>
              <Button
                variant="contained"
                sx={style.updateProfileButton}
                onClick={buttonUpdateProfile}
              >
                Update Profile
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>

      <Modal open={openPass} onClose={handleClosePass}>
        <Box sx={style.modalStyle}>
          <Box sx={style.textAndBoxContainer}>
            <Box sx={style.textAndBox}>
              <Typography sx={style.infoLabel}>New Username</Typography>
              <TextField sx={style.infoText} />
            </Box>
            <Box sx={style.textAndBox}>
              <Typography sx={style.infoLabel}>Old Password</Typography>
              <TextField sx={style.infoText} />
            </Box>
            <Box sx={style.textAndBox}>
              <Typography sx={style.infoLabel}>New Password</Typography>
              <TextField sx={style.infoText} />
            </Box>
            <Box sx={style.textAndBox}>
              <Typography sx={style.infoLabel}>Confirm Password</Typography>
              <TextField sx={style.infoText} />
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Profile;
