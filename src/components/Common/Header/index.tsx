import React, {useState} from 'react';
import Search from "../Search";
import homeIcon from '/icons/notification-icon.svg'
import {Badge, Box, Button} from "@mui/material";
import styles from './index.module.scss'
import avatar from  '/images/avatar.jpg'

const Header = ({ setIsCreatePostDialogVisible }) => {
    const handleVisibleCreatePostDialog = () => {
        setIsCreatePostDialogVisible(true)
    }
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center' }} className={styles.header}>
                <Search />
                <Badge badgeContent={4} color="primary" className={styles.header__notification}>
                    <img src={homeIcon} alt="notification" />
                </Badge>
                <Box sx={{ display: 'flex', alignItems: 'center' }} className={styles.header__profile}>
                    <span className={styles['header__profile-name']}>Тарас</span>
                    <div className={styles['header__profile-avatar']}>
                        <img src={avatar} alt="avatar" />
                    </div>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div className={styles.header__actions}>
                    <Button
                        className={`${styles['header__actions-button']} ${styles['header__actions-create']}`}
                        onClick={ handleVisibleCreatePostDialog }
                    >
                        Создать пост
                    </Button>
                </div>
            </Box>
        </>
    );
};

export default Header;
