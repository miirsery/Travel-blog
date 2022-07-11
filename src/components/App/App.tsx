import './App.css'
// material ui
import { ThemeProvider, createTheme } from "@mui/material/styles";

import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Login from "../../pages/login";
import {useEffect, useState} from "react";
import Posts from "../../pages/posts";
import Admins from "../../admins";
import General from "../../pages/general";
import Sidebar from "../Sidebar";
import Box from '@mui/material/Box';

const customTheme = createTheme({
    palette: {
        // type: 'dark',
        primary: {
            main: '#6ad7e5'
        }
    }
})

function App() {
    const [isAuth, setIsAuth] = useState(true);
    const navigate = useNavigate()

    const handleLogin = (isAuth: boolean): void => {
        setIsAuth(isAuth)
    }

    useEffect(() => {
        if (isAuth) {
            return navigate('/admin/general')
        }
    }, [isAuth])

    return (
        <Box sx={{ display: 'flex'}}>
            {isAuth && <Sidebar />}
            <Routes>
                {
                    isAuth
                        ? (
                            <>
                                <Route path='/admin/general' element={<General />}/>
                                <Route path='/admin/posts' element={<Posts />}/>
                                <Route path='/admin/admins' element={<Admins />}/>
                                <Route path='/admin' element={<Navigate to='/admin/general' />} />
                            </>
                    )
                        : <Route path='/admin' element={<Login setIsAuth={handleLogin} />} />
                }
            </Routes>
        </Box>
  )
}

export default App
