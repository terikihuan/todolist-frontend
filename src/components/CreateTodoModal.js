import React, { useState, useEffect } from "react"
import dayjs from "dayjs"

// Material UI
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  TextField,
} from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"

import { useAppContext } from "./../Context"

function CreateTodoModal() {
  const {
    isCreateModalOpen,
    setIsCreateModalOpen,
    createTodo,
    changeToggle,
    setChangeToggle,
    user,
  } = useAppContext()

  const EMPTY_TODO = {
    title: "",
    description: "",
    deadline: dayjs(),
    completed: false,
    user: parseInt(user.id),
  }

  const [newTodo, setNewTodo] = useState(EMPTY_TODO)

  // Functions
  const handleTextChange = (e) => {
    setNewTodo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const formatDate = () => {
    setNewTodo((prev) => ({
      ...prev,
      deadline: dayjs(newTodo.deadline).format("YYYY-MM-DD"),
    }))
  }
  const handleSubmit = () => {
    createTodo(newTodo)
    setChangeToggle(!changeToggle)
    setIsCreateModalOpen(false)
    setNewTodo(EMPTY_TODO)
  }

  // Effects
  useEffect(() => {
    if (newTodo.deadline !== null) {
      formatDate()
    }
  }, [newTodo.deadline])

  // Log
  // console.log(newTodo.title)
  // console.log(newTodo.description)

  return (
    <Dialog
      open={isCreateModalOpen}
      onClose={() => setIsCreateModalOpen(false)}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-form"
    >
      <DialogTitle id="dialog-title">Create new Todo</DialogTitle>
      <DialogContent id="dialog-form">
        <Box
          component="form"
          autoComplete="off"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "60ch" },
          }}
        >
          <div id="create-todo-title">
            <TextField
              label="Title"
              name="title"
              variant="standard"
              value={newTodo.title}
              required
              onChange={handleTextChange}
            />
          </div>
          <div id="create-todo-description">
            <TextField
              label="Description"
              name="description"
              variant="outlined"
              value={newTodo.description}
              multiline
              rows={4}
              onChange={handleTextChange}
            />
          </div>
          <div id="create-todo-deadline">
            <DatePicker
              label="Deadline"
              value={newTodo.deadline}
              onChange={(newValue) => {
                setNewTodo((prev) => ({ ...prev, deadline: newValue }))
              }}
              openTo="year"
              views={["year", "month", "day"]}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsCreateModalOpen(false)}>Cancel</Button>
        <Button onClick={handleSubmit}>Create</Button>
      </DialogActions>
    </Dialog>
  )
}

export default CreateTodoModal
