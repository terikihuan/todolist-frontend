import React from "react"

import { Snackbar, Alert as MuiAlert } from "@mui/material"
import { useAppContext } from "../Context"

// COMPONENTS
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export default function CustomSnackbar() {
  const { snackbar, setSnackbar } = useAppContext()

  // Functions
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }))
  }

  return (
    <>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snackbar.type}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  )
}
