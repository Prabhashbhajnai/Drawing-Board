import { Routes, Route } from 'react-router-dom'
import HomeLayout from './_root/Layout/HomeLayout'
import Home from './_root/Pages/Home'

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App