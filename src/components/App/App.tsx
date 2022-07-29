import './App.css'
// material ui
import { ThemeProvider, createTheme } from "@mui/material/styles";

import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Login from "../../pages/login";
import {useEffect, useState} from "react";
import Posts from "../../pages/posts";
import Admins from "../../pages/admins";
import General from "../../pages/general";
import Sidebar from "../Common/Sidebar";
import Box from '@mui/material/Box';
import Header from "../Common/Header";
import CreatePost from "../CreatePost";

const customTheme = createTheme({
    palette: {
        // type: 'dark',
        primary: {
            main: '#6ad7e5'
        }
    }
})

const App = () => {
    const [isAuth, setIsAuth] = useState(true)
    const [isCreatePostDialogVisible, setIsCreatePostDialogVisible] = useState(false)


    const navigate = useNavigate()

    const handleLogin = (isAuth: boolean): void => {
        setIsAuth(isAuth)
    }

    const handleTogglePostDialogVisible = (isVisible: boolean) => {
        setIsCreatePostDialogVisible(isVisible)
    }

    useEffect(() => {
        if (isAuth) {
            return navigate('/admin/general')
        }
    }, [isAuth])

    return (
        <>
            <Box sx={{ display: 'flex'}}>
                {isAuth && <Sidebar/> }

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        padding: '0 20px',
                        backgroundColor: "#e5e5e5"
                }}>
                    <Header />
                    <Routes>
                        {
                            isAuth
                                ? (
                                    <>
                                        <Route path='/admin/general' element={<General />}/>
                                        <Route path='/admin/posts' element={<Posts setIsCreatePostDialogVisible={handleTogglePostDialogVisible} />}/>
                                        <Route path='/admin/admins' element={<Admins />}/>
                                        <Route path='/admin' element={<Navigate to='/admin/general' />} />
                                    </>
                                )
                                : <Route path='/admin' element={<Login setIsAuth={handleLogin} />} />
                        }
                    </Routes>
                </Box>
            </Box>
           <CreatePost isVisible={isCreatePostDialogVisible} setIsCreatePostDialogVisible={handleTogglePostDialogVisible} />
        </>
  )
}

export default App
