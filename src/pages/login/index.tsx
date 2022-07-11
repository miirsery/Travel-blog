import React, {useState} from 'react';
import {
    Box,
    Button, Checkbox, FormControlLabel,
    Grid,
    TextField
} from "@mui/material";

import styles from './login.module.scss'
import {Link} from "react-router-dom";
const Login = ({ setIsAuth }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmitForm = (e: any): void => {
        e.preventDefault()

        if (login && password) {
            console.log(login, password, remember)
            setIsAuth(true)
        }
    }

    return (
        <Grid
            direction="column"
            justifyContent="center"
            alignItems="center"
            container
            spacing={2}
            style={{ minHeight: '100vh', width: '100%' }}
            className={styles.login}
        >
            <form noValidate autoComplete="off" onSubmit={handleSubmitForm} className={styles.login__form}>
                <Grid item className="mb-50">
                    <img src="/images/logo.png" alt="logo" />
                </Grid>
                <Grid item className="mb-30">
                    <TextField
                        onChange={(e) => setLogin(e.target.value)}
                        type="text"
                        fullWidth
                        label="Логин"
                    />
                </Grid>
                <Grid item className="mb-12">
                    <TextField
                        onChange={(e) => setPassword(e.target.value)}
                        type="text"
                        fullWidth
                        label="Пароль"
                    />
                </Grid>
                <Grid item>
                    <FormControlLabel
                        value="end"
                        control={<Checkbox />}
                        label="Запомнить данные"
                        labelPlacement="end"
                        onChange={(e: any) => setRemember(e.target.checked)}
                    />
                </Grid>
                <Grid item>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                        <Link className={styles.login__forget} to="/">Забыли пароль?</Link>
                        <Button className="login__submit" onClick={handleSubmitForm}>Войти</Button>
                    </Box>
                </Grid>
            </form>
        </Grid>
    );
};

export default Login;
