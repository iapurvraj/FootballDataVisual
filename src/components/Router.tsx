import { useEffect, useState } from "react"
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Private from "../Pages/Private"
import ProtectedRouter from "./ProtectedRouter"

const Router: React.FC = () => {
    const [auth, setAuth] = useState(false)
    return (
        <>
            <BrowserRouter>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/private">Private</NavLink></li>
                    <button onClick={() => {
                        setAuth(!auth)
                    }}>{
                            auth ? 'Logout' : 'Login'
                        }</button>

                </ul>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/private"
                        element={
                            <ProtectedRouter Component={Private} authState={auth} />
                        } />
                </Routes>
            </BrowserRouter>
        </>
    )
}


export default Router