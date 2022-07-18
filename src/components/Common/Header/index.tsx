import React, {useState} from 'react';
import Search from "../Search";
import {Badge, Box, Button} from "@mui/material";
import styles from './index.module.scss'
import avatar from  '/images/avatar.jpg'
import plusIcon from '/icons/plus-icon.svg'
import homeIcon from '/icons/notification-icon.svg'

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
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '24px 0 35px 0' }}>
                <h2 className="admin-title">Посты</h2>
                <div className={styles.header__actions}>
                    <Button
                        className={`${styles['header__actions-button']} ${styles['header__actions-create']}`}
                        onClick={ handleVisibleCreatePostDialog }
                    >
                        Создать пост
                        <div className={styles['header__actions-plus']}>
                            <img src={plusIcon} alt="plus"/>
                        </div>
                    </Button>
                </div>
            </Box>
        </>
    );
};

export default Header;
