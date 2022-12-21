import React, { useEffect, useState } from "react"

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import { useAppContext } from "./../Context"

function DeleteButton({ color, id }) {
  const { deleteData, setChangeToggle, changeToggle, setIsModalOpen } =
    useAppContext()

  const deleteTodoItem = () => {
    deleteData(id)
    setChangeToggle(!changeToggle)
    setIsModalOpen(false)
  }

  return (
    <>
      <IconButton edge="end" aria-label="delete" onClick={deleteTodoItem}>
        <DeleteIcon color={color ? color : ""} />
      </IconButton>
    </>
  )
}

export default DeleteButton
