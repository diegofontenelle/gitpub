import React from "react"
import style from "./App.style"

const App = ({ callback }) => {
  return (
    <div style={style.container} data-testid="app">
      <h1>Live reload!</h1>
      <button onClick={callback} data-testid="app-button">
        Click me
      </button>
    </div>
  )
}

export default App
