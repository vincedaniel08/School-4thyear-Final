const style = {
    root:{
        backgroundColor: (theme) => theme.palette.background.default,
    },
    modalBox: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 320,
        bgcolor: "background.paper",
        border: "2px solid #1c7c99",
        boxShadow: 24,
        p: 3,
       // overflow: "hidden",
        display: "block",
      },

    mainContainer: {
        width: {
            xs: '90%',
            sm: '90%',
            md: '60%',
            lg: '60%',
            xl: '45%',
        },
        backgroundColor: (theme) => theme.palette.background.default,
        boxShadow: 1,
        padding: '10px',
    },

    holder: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '85px',
    },

    holder2: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px',
    },

    posterDetails: {
        display: 'flex',
    },

    posterDetailsNew: {
        display: 'flex',
        marginBottom: '10px',
    },

    infoName: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    cardMain: {
        backgroundColor: (theme) => theme.palette.background.default,
    },

    propicHolder: {
        padding: '10px',
    },

    propic: {
    },

    namePoster: {
        fontFamily: 'Semibold',
        color: '#1c7c99',
    },

    timePoster: {
        fontFamily: 'Poppins',
        fontSize: '14px',
        color: '#6e6e6e',
    },

    post: {
        fontFamily: 'Poppins',
    },

    iconButtonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
    },

    icon: {
        marginRight: '10px',
    },

    iconText: {
        fontFamily: 'Poppins',
        fontSize: '14px',
    },

    commentText: {
        fontFamily: 'Poppins',
    },

    commentMain: {
        border: 'solid 1px #cdcdcd',
        padding: '10px',
        marginBottom: '10px',
    },

    commentBox: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#1c7c99',
            },
            '&:hover fieldset': {
                borderColor: '#1c7c99',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#1c7c99',
            },


            fontFamily: 'Poppins',
            fontSize: '15px',
            height: '80px',
            borderRadius: 0,
        },

        '& .MuiInputBase-input': {
            color: '#000',
            padding: 0,
        },

        width: '95%',
    },

    iContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    commentMainContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
    },

    commentButton: {
        boxShadow: 0,
        borderRadius: 0,
        marginRight: '20px',
        marginTop: '5px',
        fontFamily: 'Poppins',
        textTransform: 'capitalize',
        backgroundColor: '#1c7c99',
    },

    statusContainer: {
        display: 'flex',
        justifyContent: 'space-around',
    },

    statusText: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#1c7c99',
            },
            '&:hover fieldset': {
                borderColor: '#1c7c99',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#1c7c99',
            },


            fontFamily: 'Poppins',
            fontSize: '15px',
            height: '80px',
            borderRadius: 0,
            marginRight: {
                xs: '5px',
                sm: '5px',
                md: '5px',
                lg: 0,
            },
        },

        '& .MuiInputBase-input': {
            color: '#000',
            padding: '0px 10px 0px 10px',
        },

        width: '100%',
    },

    statusTextContainer: {
        width: '79%',
    },

    postButton: {
        fontFamily: 'Poppins',
        textTransform: 'capitalize',
        boxShadow: 0,
        borderRadius: 0,
        width: {
            xs: '80%',
            sm: '80%',
            md: '80%',
            lg: '100%',
        },
        backgroundColor: '#1c7c99',
    },

    uploadButton: {
        fontFamily: 'Poppins',
        textTransform: 'capitalize',
        boxShadow: 0,
        borderRadius: 0,
        width: {
            xs: '80%',
            sm: '80%',
            md: '80%',
            lg: '100%',
        },
        backgroundColor: '#1c7c99',
    },

    statusButtonContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    warningSuccess: {
        backgroundColor: '#b2edaf',
        width: {
            xs: '90%',
            sm: '90%',
            md: '60%',
            lg: '60%',
            xl: '45%',
        },
        height: '5vh',
        padding: '10px',
        margin: 'auto',
        border: '1px solid #06bd00',
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    warningFailed: {
        backgroundColor: '#edafaf',
        width: {
            xs: '90%',
            sm: '90%',
            md: '60%',
            lg: '60%',
            xl: '45%',
        },
        height: '5vh',
        padding: '10px',
        margin: 'auto',
        border: '1px solid #c40606',
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    warningText: {
        fontFamily: 'Poppins',
    },






}
export default style;