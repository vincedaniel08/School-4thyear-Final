const style = {
    root:{
        backgroundColor: (theme) => theme.palette.background.default,
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

    profilePicture: {
        width: '150px',
        height: '150px',
        boxShadow: 1,
        border: '5px solid #fff',
        marginTop: '-80px',
        marginLeft: '10px',
    },

    proPicContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },

    editButton: {
        height: '40px',
        fontFamily: 'Semibold',
        textTransform: 'capitalize',
        borderRadius: '20px',
        color: '#1c7c99',
        borderColor: '#1c7c99',
        transition: 'all ease .5s',
        marginRight: '5px',
        '&:hover': {
            color: '#fff',
            backgroundColor: '#1c7c99',
        },
    },

    infoContainer: {
        marginTop: '-2px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
    },

    nameInfo: {
        fontFamily: 'Bold',
        fontSize: '25px',
    },

    codeName: {
        fontFamily: 'Poppins',
        color:"textPrimary",
        marginTop: '-5px',
    },

    bioData: {
        fontFamily: 'Poppins',
        color:"textPrimary"
    },

    perInfo: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '2px',
    },

    icon2: {
        marginRight: '10px',
        color:"textPrimary",
        fontSize: '18px',
    },

    otherInfoText: {
        fontFamily: 'Poppins',
        color:"textPrimary"
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

    modalStyle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: {
            xs: '90%',
            sm: '90%',
            md: '80%',
            lg: '50%',
        },
        bgcolor: '#fff',
        boxShadow: 24,
        padding: '10px',
    },

    modalBoxButtonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    coverPhotoButton: {
        boxShadow: 0,
        borderRadius: 0,
        backgroundColor: '#1c7c99',
        fontFamily: 'Poppins',
        textTransform: 'capitalize',
        width: '49%',
    },

    profilePictureButton: {
        boxShadow: 0,
        borderRadius: 0,
        backgroundColor: '#1c7c99',
        fontFamily: 'Poppins',
        textTransform: 'capitalize',
        width: '49%',
    },

    infoText: {
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
            borderRadius: 0,
            height: '35px',
           
        },

        '& .MuiInputBase-input': {
            color: '#000',
            padding: '0px 10px 0px 10px',
        },

        width: '80%',
    },

    textAndBoxContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '5px',
    },

    textAndBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '5px',
    },
    
    infoLabel: {
        fontFamily: 'Poppins',
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

    updateProfileButton: {
        boxShadow: 0,
        borderRadius: 0,
        width: '100%',
        fontFamily: 'Poppins',
        textTransform: 'capitalize',
        backgroundColor: '#479923',
    },

    changePass: {
        color: '#1c7c99',
    },

}
export default style;