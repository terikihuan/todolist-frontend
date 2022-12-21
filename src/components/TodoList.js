import React from "react"

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"

import TodoCard from "./TodoCard"
import { useAppContext } from "../Context"
import TodoModal from "./TodoModal"
import CreateTodoModal from "./CreateTodoModal"

function TodoList() {
  const { todos, isCreateModalOpen, setIsCreateModalOpen, user } =
    useAppContext()

  return (
    <Box
      sx={{
        mt: 5,
        px: {
          xs: 0,
          sm: 10,
          md: 0,
        },
      }}
    >
      <h2>
        You have {todos.filter((todo) => todo.completed == false).length} tasks
        left
      </h2>
      <List
        sx={{
          mt: 3,
          border: 2,
          borderColor: "primary.main",
          borderRadius: "16px",
          py: "3ch",
          px: "4ch",
        }}
      >
        {/* This part lists out all available todo item */}
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}

        {/* This is a button to add new todo item */}
        <ListItem>
          <ListItemButton
            onClick={() => {
              setIsCreateModalOpen(!isCreateModalOpen)
            }}
            sx={{ pl: 0, borderRadius: "8px" }}
          >
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText>Add new item</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <TodoModal />
      <CreateTodoModal />
    </Box>
  )
}

export default TodoList
