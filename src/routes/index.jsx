import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />

    </Routes>
    </BrowserRouter>
  )
}