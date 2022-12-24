import React from "react"
import { useTheme } from "@mui/material/styles"
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
  const theme = useTheme()

  // Functions
  const openModal = () => {
    setEditTodo(todo)
    setIsModalOpen(true)
  }
  const giveCompletedStyle = () => {
    return (
      completed && {
        color: theme.palette.grey[700],
        textDecoration: "line-through",
      }
    )
  }
  const primaryStyle = {
    color: theme.palette.grey[700],
    textDecoration: "line-through",
  }
  const givePrimaryTextStyle = () => {
    return completed
      ? {
          style: primaryStyle,
        }
      : {}
  }

  const giveSecondaryTextStyle = () => {
    return {
      style: {
        color: "yellow",
        textDecoration: "none",
      },
    }
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
          secondaryTypographyProps={{
            style: {
              color: theme.palette.grey[600],
            },
          }}
          primaryTypographyProps={
            completed
              ? {
                  style: {
                    color: theme.palette.grey[700],
                    textDecoration: "line-through",
                  },
                }
              : {}
          }
          // sx={giveCompletedStyle}
        />
      </ListItemButton>
    </ListItem>
  )
}

export default TodoCard
