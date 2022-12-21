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
export default function Register() {
  const {
    createUser,
    setSnackbar,
    colorMode,
    lightInputStyle,
    darkInputStyle,
  } = useAppContext()
  const [registerUser, setRegisterUser] = useState({
    username: "",
    password: "",
  })
  const redirect = useNavigate()
  const theme = useTheme()

  // Functions
  const handleTextChange = (e) => {
    setRegisterUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const handleSubmit = async () => {
    const data = await createUser(registerUser)
    if (data?.id) {
      setSnackbar((prev) => ({
        ...prev,
        open: true,
        type: "success",
        message: "User created, please log in.",
      }))
      redirect("/login")
    } else {
      setSnackbar((prev) => ({
        ...prev,
        open: true,
        type: "warning",
        message: data.username[0],
      }))
      redirect("/register")
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        id="register-title"
        sx={{
          marginTop: 14,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          Register
        </Typography>
      </Box>
      <Box
        id="register-form"
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
          // autoComplete="email"
          autoFocus
          value={registerUser.username}
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
          value={registerUser.password}
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
          Register
        </Button>

        <Typography variant="body2">
          <Link to="/login" style={{ color: theme.palette.primary.main }}>
            Already have an account? Sign in
          </Link>
        </Typography>
      </Box>
    </Container>
  )
}
