import { ThemeProvider,createTheme } from "@mui/material"

interface MuiThemeProps {
  children: React.ReactNode;
}

const MuiThemeProvider: React.FC<MuiThemeProps> = ({children}) => {
  const theme = createTheme({
  palette: {
    primary: {
      main:"#0B7285",
    },
     secondary: {
      main:"#44850b",
  },
  },
  components: {},
  typography: {},
});

  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}

export default MuiThemeProvider