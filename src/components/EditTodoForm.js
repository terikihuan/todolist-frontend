import React, { useState, useEffect } from "react"
import dayjs from "dayjs"

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Box,
  TextField,
} from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { useAppContext } from "./../Context"

function EditTodoForm() {
  const { editTodo, setEditTodo, setIsModalOpen, setIsEdit, updateData } =
    useAppContext()

  // Functions
  const handleTextChange = (e) => {
    setEditTodo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const formatDate = () => {
    setEditTodo((prev) => ({
      ...prev,
      deadline: dayjs(editTodo.deadline).format("YYYY-MM-DD"),
    }))
  }
  const submitData = () => {
    updateData(editTodo)
    setIsModalOpen(false)
  }

  // Effects
  useEffect(() => {
    if (editTodo.deadline !== null) {
      formatDate()
    }
  }, [editTodo.deadline])

  return (
    <>
      <DialogContent>
        <Box
          component="form"
          autoComplete="off"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "60ch" },
          }}
        >
          <div id="edit-todo-title">
            <TextField
              label="Title"
              name="title"
              variant="standard"
              value={editTodo.title}
              required
              onChange={handleTextChange}
            />
          </div>
          <div id="edit-todo-description">
            <TextField
              label="Description"
              name="description"
              variant="outlined"
              value={editTodo.description}
              multiline
              onChange={handleTextChange}
            />
          </div>
          <div id="edit-todo-deadline">
            <DatePicker
              label="Deadline"
              value={editTodo.deadline}
              onChange={(newValue) => {
                setEditTodo((prev) => ({ ...prev, deadline: newValue }))
              }}
              openTo="year"
              views={["year", "month", "day"]}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsEdit(false)}>Cancel</Button>
        <Button onClick={submitData} autoFocus>
          Save
        </Button>
      </DialogActions>
    </>
  )
}

export default EditTodoForm
