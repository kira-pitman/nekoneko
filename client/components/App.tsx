import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <header className="header">
        <h1>Neko neko!!</h1>
      </header>
      <Outlet />
      <section className="main"></section>
    </>
  )
}

export default App
