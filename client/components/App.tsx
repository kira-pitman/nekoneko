import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <header className="header">
        <h1>Neko neko!!</h1>
        <Outlet />
      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
