import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useTheme } from "@mui/material/styles"

import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  Container,
} from "@mui/material"
import { useAppContext } from "../Context"

// COMPONENT
export default function Login() {
  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  })
  const {
    authenticateUser,
    setChangeToggle,
    changeToggle,
    fetchTodos,
    setSnackbar,
    setUser,
    setToken,
    colorMode,
    lightInputStyle,
    darkInputStyle,
  } = useAppContext()
  const redirect = useNavigate()
  const theme = useTheme()

  // Functions
  const handleTextChange = (e) => {
    setLoginUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const handleSubmit = async () => {
    const data = await authenticateUser(loginUser)
    console.log(data)
    localStorage.setItem("token", data.token)
    setToken(data.token)
    setUser((prev) => ({
      ...prev,
      name: data.username,
      id: data.user_id,
      isLogin: true,
    }))
    setChangeToggle(!changeToggle)
    setSnackbar((prev) => ({
      ...prev,
      open: true,
      type: "success",
      message: "Signed in successfully",
    }))
    // console.log("submit")
  }

  // Effects
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      fetchTodos(token)
      redirect("/")
    }
  }, [changeToggle])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        id="login-title"
        sx={{
          marginTop: 14,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          Sign in
        </Typography>
      </Box>
      <Box
        id="login-form"
        component="form"
        // onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          value={loginUser.username}
          autoFocus
          onChange={handleTextChange}
          inputProps={
            colorMode == "light"
              ? { style: lightInputStyle }
              : { style: darkInputStyle }
          }
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={loginUser.password}
          onChange={handleTextChange}
          inputProps={
            colorMode == "light"
              ? { style: lightInputStyle }
              : { style: darkInputStyle }
          }
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          // type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleSubmit}
        >
          Sign In
        </Button>
        <Typography variant="body2">
          <Link to="/register" style={{ color: theme.palette.primary.main }}>
            Don't have an account? Sign Up
          </Link>
        </Typography>
      </Box>
    </Container>
  )
}
