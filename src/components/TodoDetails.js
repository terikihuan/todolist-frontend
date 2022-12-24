import React from "react"
import { DialogContent, Box, Typography, Divider } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import TodoCheckbox from "./TodoCheckbox"

import { useAppContext } from "./../Context"
import DeleteButton from "./DeleteButton"

// COMPONENT
function TodoDetails({ todo }) {
  const { setIsEdit } = useAppContext()

  // Functions
  const enableEdit = () => {
    setIsEdit(true)
  }

  return (
    <>
      <DialogContent
        sx={{
          m: 1,
          width: "60ch",
        }}
      >
        <Box id="big-box">
          <Box id="top-box">
            <Grid
              container
              // spacing={2}
              sx={{ mb: 1 }}
            >
              <Grid
                xs={1}
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <TodoCheckbox todo={todo} sx={{ pl: 0 }} />
              </Grid>
              <Grid
                xs={10}
                display="flex"
                // justifyContent="center"
                alignItems="center"
              >
                <Typography variant="h5" component="div" onClick={enableEdit}>
                  {todo?.title}
                </Typography>
              </Grid>
              <Grid
                xs={1}
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
              >
                <DeleteButton id={todo?.id} />
              </Grid>
            </Grid>
          </Box>
          <Divider sx={{ my: 3 }} />
          <Box>
            <Typography
              // color="text.secondary"
              gutterBottom
              variant="body1"
              component="div"
              onClick={enableEdit}
              sx={{ fontSize: 18 }}
            >
              {todo?.description}
            </Typography>
            <Typography
              color="text.secondary"
              gutterBottom
              variant="body2"
              onClick={enableEdit}
            >
              {todo?.deadline ? `Deadline: ${todo?.deadline}` : "No deadline"}
            </Typography>
          </Box>
        </Box>
      </DialogContent>
    </>
  )
}

export default TodoDetails
