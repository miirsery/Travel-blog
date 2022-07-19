import React from 'react';
import {Link} from "react-router-dom";
import {Box, Button} from "@mui/material";
import PostTable from "../../components/Posts/PostTable";
import styles from "../../components/Common/Header/index.module.scss";
import plusIcon from "/icons/plus-icon.svg";

const Posts = ({ setIsCreatePostDialogVisible }) => {
    const handleVisibleCreatePostDialog = () => {
        setIsCreatePostDialogVisible(true)
    }
    return (
        <Box>
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
            <PostTable />
        </Box>
    );
};

export default Posts;
