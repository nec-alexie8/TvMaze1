import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from 'react-router-dom'

import { Home, Search, Tvid } from './pages'
import { Root } from  './components'

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' elemnent={<Root/>}>
    <Route index element={<Home/>} />
    <Route path='Tvshow/:id' element={<Tvid/>} />
    <Route path='search' element={<Search/>}/>
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
