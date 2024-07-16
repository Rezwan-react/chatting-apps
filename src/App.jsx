import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import NotFountd from './components/NotFound/NotFountd'

function App() {

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element ={<LoginPage/>}/>
        <Route path='*' element ={<NotFountd/>}/>
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router ={route}/>
    </>
  )
}

export default App
