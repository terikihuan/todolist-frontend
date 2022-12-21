import React, { useState, useEffect } from "react"

// Material UI
import { Box, Dialog, DialogTitle, keyframes } from "@mui/material"

import { useAppContext } from "./../Context"
import EditTodoForm from "./EditTodoForm"
import TodoDetails from "./TodoDetails"

// COMPONENT
export default function TodoModal() {
  const { isModalOpen, setIsModalOpen, editTodo, isEdit, setIsEdit } =
    useAppContext()

  return (
    <Dialog
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <Box>
        <DialogTitle
          id="dialog-title"
          onClick={() => {
            setIsEdit(false)
          }}
        >
          {isEdit ? "Edit Task" : null}
        </DialogTitle>
        {isEdit ? <EditTodoForm /> : <TodoDetails todo={editTodo} />}
      </Box>
    </Dialog>
  )
}
