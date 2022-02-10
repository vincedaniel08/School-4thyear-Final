const theme = (isDarkMode) => ({

    palette: {
        mode: isDarkMode ? 'light' : "dark",
        primary: {
          main: "#1c7c99",
        },
        secondary: {
          main: '#8c8c8c',
        },
      },
});

export default theme;