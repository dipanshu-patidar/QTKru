import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Website/Home'

const AllRoutes = () => {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
