import React, { useEffect } from "react"

import TodoList from "../components/TodoList"
import Container from "@mui/material/Container"
import { useAppContext } from "../Context"

import Loading from "../components/Loading"
import Topbar from "./../components/Topbar"
import { useNavigate } from "react-router-dom"

function Home() {
  const { loading } = useAppContext

  return (
    <div>
      <Topbar />
      <Container
        sx={{
          px: {
            sm: 0,
            md: 30,
          },
        }}
      >
        {/* <h1>Home</h1> */}
        {loading ? <Loading /> : <TodoList />}
      </Container>
    </div>
  )
}

export default Home
