import React, { useEffect, useState } from "react"

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"

import { useAppContext } from "./../Context"
import TodoCheckbox from "./TodoCheckbox"
import DeleteButton from "./DeleteButton"

function TodoCard({ todo }) {
  let { id, title, deadline, completed } = todo
  const { setIsModalOpen, setEditTodo } = useAppContext()

  // Functions
  const openModal = () => {
    setEditTodo(todo)
    setIsModalOpen(true)
  }

  return (
    <ListItem
      secondaryAction={<DeleteButton color="disabled" id={id} />}
      disablePadding
    >
      <ListItemIcon>
        <TodoCheckbox todo={todo} />
      </ListItemIcon>
      <ListItemButton
        role={undefined}
        onClick={openModal}
        sx={{ borderRadius: "8px" }}
      >
        <ListItemText
          primary={title}
          secondary={deadline}
          sx={
            completed && {
              color: "gray",
              textDecoration: "line-through",
            }
          }
        />
      </ListItemButton>
    </ListItem>
  )
}

export default TodoCard
