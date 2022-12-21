import React, { useEffect } from "react"
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useAppContext } from "../Context"
import { useNavigate } from "react-router-dom"
import ColorModeBtn from "./ColorModeBtn"

function Topbar() {
  const { changeToggle, setChangeToggle, user, setUser, colorMode } =
    useAppContext()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const redirect = useNavigate()

  // Functions
  const logout = () => {
    localStorage.setItem("token", "")
    setUser((prev) => ({
      ...prev,
      id: null,
      name: "TempUser",
      isLogin: false,
    }))
    setChangeToggle(!changeToggle)
  }
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  // Effects
  useEffect(() => {
    const token = localStorage.getItem("token")
    // console.log(token)
    if (!token) {
      redirect("/login")
    }
  }, [changeToggle])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* News */}
            {user.name}'s To-do List
          </Typography>
          <IconButton
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Avatar
              sx={
                colorMode == "light"
                  ? {
                      bgcolor: "primary.contrastText",
                      color: "primary.main",
                    }
                  : {
                      bgcolor: "grey.900",
                      color: "primary.light",
                    }
              }
            >
              {user?.name[0].toUpperCase()}
            </Avatar>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            // anchorOrigin={{
            //   vertical: "top",
            //   horizontal: "right",
            // }}
            keepMounted
            // transformOrigin={{
            //   vertical: "top",
            //   horizontal: "right",
            // }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={logout}>Logout</MenuItem>
            <MenuItem disableRipple>
              <ColorModeBtn />
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Topbar
