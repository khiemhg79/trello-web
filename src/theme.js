import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
  colorSchemes : {
    light: {
      palette: {
        primary: {
          main: '#1976d2'
        }       
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#90caf9'
        }
      }
    }
  }
})

export default theme;