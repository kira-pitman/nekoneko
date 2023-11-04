import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import App from './components/App'
import NekoList from './components/nekoList'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<NekoList />} />
  </Route>
)

export const router = createBrowserRouter(routes)
