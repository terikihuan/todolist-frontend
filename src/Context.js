import React, { useState, useContext, useEffect } from "react"
// import { useCallback } from "react"
import APIService from "./APIService"

const AppContext = React.createContext()

const INITIAL_USER = {
  id: null,
  name: "TempUser",
  isLogin: false,
}

function AppProvider({ children }) {
  const [loading, setLoading] = useState(true)
  const [todos, setTodos] = useState(new Array())

  const [editTodo, setEditTodo] = useState({})
  const [isEdit, setIsEdit] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [changeToggle, setChangeToggle] = useState(false)

  const [token, setToken] = useState(localStorage.getItem("token") || "")
  const [snackbar, setSnackbar] = useState({
    open: false,
    type: "success",
    message: "This is a snackbar",
  })
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("todo_user")) || INITIAL_USER
  )

  const [colorMode, setColorMode] = useState("dark")
  const lightInputStyle = { WebkitBoxShadow: "0 0 0 1000px #fff inset" }
  const darkInputStyle = { WebkitBoxShadow: "0 0 0 1000px #121212 inset" }

  // API Functions
  const fetchTodos = async () => {
    setLoading(true)
    try {
      const data = await APIService.ListTodos(token)
      setTodos(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  const createTodo = async (body) => {
    try {
      const data = await APIService.CreateTodo(body, token)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  const updateData = async (body) => {
    try {
      APIService.UpdateTodo(body, token)
    } catch (error) {
      console.log(error)
    }
  }
  const deleteData = async (id) => {
    try {
      APIService.DeleteTodo(id, token)
    } catch (error) {
      console.log(error)
    }
  }
  const createUser = async (body) => {
    try {
      const data = await APIService.CreateUser(body)
      console.log(data)
      return data
    } catch (error) {
      console.log(error)
    }
  }
  const authenticateUser = async (body) => {
    try {
      const data = await APIService.AuthenticateUser(body)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  // Effects
  // Refresh the todo list when there is a new change / token
  useEffect(() => {
    if (user.isLogin) {
      fetchTodos()
    }
  }, [changeToggle, isCreateModalOpen, isModalOpen])
  // Turn off edit mode when closing the modal
  useEffect(() => {
    setIsEdit(false)
  }, [isModalOpen, isCreateModalOpen])
  // Get user / token
  useEffect(() => {
    localStorage.setItem("token", token)
  }, [token])
  useEffect(() => {
    localStorage.setItem("todo_user", JSON.stringify(user))
  }, [user.id])

  const value = {
    loading,
    todos,
    editTodo,
    setEditTodo,
    isModalOpen,
    setIsModalOpen,
    updateData,
    changeToggle,
    setChangeToggle,
    isCreateModalOpen,
    setIsCreateModalOpen,
    createTodo,
    isEdit,
    setIsEdit,
    deleteData,
    createUser,
    authenticateUser,
    token,
    setToken,
    fetchTodos,
    snackbar,
    setSnackbar,
    user,
    setUser,
    colorMode,
    setColorMode,
    lightInputStyle,
    darkInputStyle,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
