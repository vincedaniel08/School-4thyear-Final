import React from 'react';
import style from '../styles/Home';
import Navbar from '../components/Navbar';

import { Box, Typography, Card, CardActions, CardContent, CardMedia, Avatar, IconButton, Button, TextField,Paper} from '@mui/material';

import post1 from '../assets/images/post1.jpeg';
import bryce from '../assets/images/bryce.jpg';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const Home = () => {
    return (
        <Box sx={style.root}>
            <Navbar />

            <Box sx={style.holder}>
                <Paper sx={style.mainContainer}>
                    <Box sx={style.statusContainer}>
                        <Box>
                            <Avatar
                                alt="profile2"
                                src={bryce}
                            />
                        </Box>
                        <Box sx={style.statusTextContainer}>
                            <TextField  placeholder='Ask or Share Something ...' sx={style.statusText} multiline
                                inputProps={{ maxLength: 100, style:{color:"gray"} }} />
                        </Box>
                        <Box sx={style.statusButtonContainer}>
                            <Button variant="contained" sx={style.postButton}>Post</Button>
                            <Button variant="contained" sx={style.uploadButton}><AddPhotoAlternateIcon/></Button>
                        </Box>
                    </Box>
                </Paper>
            </Box>

            <Box sx={style.warningSuccess}>
                <Typography sx={style.warningText}>Your Post was Succesfully Posted on the Board!</Typography>
            </Box>

            <Box sx={style.warningFailed}>
                <Typography sx={style.warningText}>There was a problem in posting your status, Please try Again!</Typography>
            </Box>

            {/*Main White Holder*/}
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

                            <Paper sx={style.commentMainContainer}>
                                <TextField sx={style.commentBox} placeholder='Write a comment ...' multiline
                                    inputProps={{ maxLength: 100, style:{color:"gray"} }} />
                            </Paper>
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

        </Box>
    );
}

export default Home;
