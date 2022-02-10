import React from 'react';
import style from '../styles/Profile';

import { Paper, Box, Typography, Card, CardActions, CardContent, CardMedia, Avatar, IconButton, Button, TextField, Modal, } from '@mui/material';

import Navbar from '../components/Navbar';

import PlaceIcon from '@mui/icons-material/Place';
import CakeIcon from '@mui/icons-material/Cake';
import WorkIcon from '@mui/icons-material/Work';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';

import post1 from '../assets/images/post1.jpeg';
import bryce from '../assets/images/bryce.jpg';

const Profile = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openPass, setOpenPass] = React.useState(false);
    const handleOpenPass = () => setOpenPass(true);
    const handleClosePass = () => setOpenPass(false);

    return (
        <Box sx={style.root}>
            <Navbar />

            <Box sx={style.holder}>
                <Paper sx={style.mainContainer}>

                    {/*Cover Photo*/}
                    <Box>
                        <img
                            alt="cover"
                            src={post1}
                            style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '20vh',
                            }}
                        />
                    </Box>

                    {/*Profile Picture*/}
                    <Box sx={style.proPicContainer}>
                        <Avatar
                            alt="profile picture"
                            src={bryce}
                            sx={style.profilePicture}
                        />
                        <Box>
                            <Button onClick={handleOpen} variant="outlined" sx={style.editButton}>Edit Profile</Button>
                            <IconButton onClick={handleOpenPass}>
                                <SettingsIcon sx={style.changePass} />
                            </IconButton>
                        </Box>
                    </Box>

                    {/*Info*/}
                    <Box sx={style.infoContainer}>
                        <Typography sx={style.nameInfo} color="textPrimary">Bryce Ganotice</Typography>
                        <Typography sx={style.codeName} >@Papayang-Hilaw.exe</Typography>
                    </Box>

                    {/*Bio Description*/}
                    <Box sx={style.infoContainer}>
                        <Typography sx={style.bioData}>Bio? Biogesic. Ha? Hotdog. Ha? Halaman.</Typography>
                    </Box>

                    {/*Other Info*/}
                    <Box sx={style.infoContainer}>
                        <Box sx={style.perInfo}>
                            <WorkIcon sx={style.icon2} />
                            <Typography sx={style.otherInfoText}>Front-end Developer</Typography>
                        </Box>
                        <Box sx={style.perInfo}>
                            <PlaceIcon sx={style.icon2} />
                            <Typography sx={style.otherInfoText}>Pulilan, Bulacan</Typography>
                        </Box>
                        <Box sx={style.perInfo}>
                            <CakeIcon sx={style.icon2} />
                            <Typography sx={style.otherInfoText}>August 27, 2003</Typography>
                        </Box>
                        <Box sx={style.perInfo}>
                            <MailIcon sx={style.icon2} />
                            <Typography sx={style.otherInfoText}>bryceganotice.22@gmail.com</Typography>
                        </Box>
                    </Box>
                </Paper>
            </Box>

            {/*Warnings*/}

            <Box sx={style.warningSuccess}>
                <Typography sx={style.warningText}>Your Profile is Successfully Updated!</Typography>
            </Box>

            <Box sx={style.warningFailed}>
                <Typography sx={style.warningText}>There was a problem in updating your profile, Please try Again!</Typography>
            </Box>

            {/*User Posts*/}
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
                                        src={bryce}
                                        sx={style.propic}
                                    />
                                </Box>
                                <Box sx={style.infoName}>
                                    <Typography sx={style.namePoster}>Bryce Angel Ganotice</Typography>
                                    <Typography sx={style.timePoster}>02/08/2022 16:44</Typography>
                                </Box>
                            </Box>

                            <hr
                                style={{
                                    width: '95%',
                                    border: '1px solid #cdcdcd',
                                    marginTop: '5px',
                                }}
                            />

                            <CardContent>
                                <Typography sx={style.post}>Is there anyone here who is familiar with this tech-tip man? Like if you know him!</Typography>
                            </CardContent>

                            <CardMedia
                                component="img"
                                alt="post"
                                image={post1}
                                height="400px"
                            />

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
                                <TextField sx={style.commentBox} placeholder='Write a comment ...' multiline
                                    inputProps={{ maxLength: 100,  style:{color:"gray"} }} />
                            </Box>
                            <Box sx={style.buttonContainer}>
                                <Button variant="contained" sx={style.commentButton}>Comment</Button>
                            </Box>


                            <CardContent>

                                {/*Comment MAIN*/}
                                <Box sx={style.commentMain}>
                                    {/*Commentor Info*/}
                                    <Box sx={style.posterDetailsNew}>
                                        <Box sx={{ marginRight: '10px', }}>
                                            <Avatar
                                                alt="picture"
                                                src={bryce}
                                                sx={style.propic}
                                            />
                                        </Box>
                                        <Box sx={style.infoName}>
                                            <Typography sx={style.namePoster}>Bryce Angel Ganotice</Typography>
                                            <Typography sx={style.timePoster}>02/08/2022 16:44</Typography>
                                        </Box>
                                    </Box>

                                    {/*Comments*/}
                                    <Box>
                                        <Typography sx={style.commentText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, accusantium placeat. Voluptatum numquam earum eveniet, dolore qui magnam officiis labore temporibus, nam pariatur doloribus porro possimus eaque laboriosam tempore optio!
                                        </Typography>
                                    </Box>
                                </Box>

                            </CardContent>

                        </Card>
                    </Box>

                </Box>
            </Box>

            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style.modalStyle}>
                    <Box sx={style.modalBoxButtonContainer}>
                        <Button variant="contained" sx={style.coverPhotoButton}>Choose Cover Photo</Button>
                        <Button variant="contained" sx={style.profilePictureButton}>Choose Profile Picture</Button>
                    </Box>
                    <Box sx={style.textAndBoxContainer}>
                        <Box sx={style.textAndBox}>
                            <Typography sx={style.infoLabel}>Name</Typography>
                            <TextField sx={style.infoText} />
                        </Box>

                        <Box sx={style.textAndBox}>
                            <Typography sx={style.infoLabel}>Work</Typography>
                            <TextField sx={style.infoText} />
                        </Box>

                        <Box sx={style.textAndBox}>
                            <Typography sx={style.infoLabel}>Address</Typography>
                            <TextField sx={style.infoText} />
                        </Box>

                        <Box sx={style.textAndBox}>
                            <Typography sx={style.infoLabel}>Birthday</Typography>
                            <TextField sx={style.infoText} />
                        </Box>
                        <Box sx={style.textAndBox}>
                            <Typography sx={style.infoLabel}>Email</Typography>
                            <TextField sx={style.infoText} />
                        </Box>

                        <Box sx={style.textAndBox}>
                            <Button variant="contained" sx={style.updateProfileButton}>Update Profile</Button>
                        </Box>
                    </Box>

                </Box>
            </Modal>

            <Modal
                open={openPass}
                onClose={handleClosePass}
            >
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
}

export default Profile;
