import React from 'react'
import ProfilePage from './pages/ProfilePage'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'

function App() {

    return (
        <>
        <Header/>
        <Routes>
            <Route path="/profile" element={<ProfilePage/>} />
        </Routes>
        </>
    )
}

export default App;
