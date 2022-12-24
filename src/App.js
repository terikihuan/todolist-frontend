import "./App.css"
import React from "react"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import PrivateRoutes from "./utils/PrivateRoutes"
import Register from "./pages/Register"
import CustomSnackbar from "./components/CustomSnackbar"
import Background from "./components/Background"

import { useAppContext } from "./Context"

function App() {
  const { colorMode } = useAppContext()

  const theme = createTheme({
    palette: {
      mode: colorMode,
      primary: {
        main: "#E84545",
      },
      secondary: {
        main: "#903749",
      },
      // grey: {
      //   900: "#2B2E4A",
      // },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <div className="App">
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Background />
          <CustomSnackbar />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default App
