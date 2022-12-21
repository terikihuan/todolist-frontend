import React, { useEffect, useState } from "react"
import { Checkbox } from "@mui/material"
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked"
import TaskAltIcon from "@mui/icons-material/TaskAlt"

import { useAppContext } from "./../Context"

function TodoCheckbox({ todo, sx = {} }) {
  let { completed } = todo
  const { updateData, setChangeToggle, changeToggle, setEditTodo } =
    useAppContext()

  // Functions
  const handleCheck = () => {
    updateData({
      ...todo,
      completed: !completed,
    })
    setEditTodo((prev) => ({
      ...prev,
      completed: !completed,
    }))
    setChangeToggle(!changeToggle)
  }

  return (
    <>
      <Checkbox
        checked={completed}
        disableRipple
        onClick={() => {
          handleCheck()
        }}
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<TaskAltIcon />}
        sx={sx}
      />
    </>
  )
}

export default TodoCheckbox
