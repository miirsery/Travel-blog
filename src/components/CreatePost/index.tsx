import React from 'react';
import {Button, Dialog, DialogTitle} from "@mui/material";

const CreatePost = ({ setIsCreatePostDialogVisible, isVisible }) => {
    const handleVisibleCreatePostDialog = () => {
        setIsCreatePostDialogVisible(false)
    }
    return (
        <div>
            {/*<Dialog open={open} onClose={handleClose}>*/}
            {/*    <DialogTitle>Subscribe</DialogTitle>*/}
            {/*    <DialogContent>*/}
            {/*        <DialogContentText>*/}
            {/*            To subscribe to this website, please enter your email address here. We*/}
            {/*            will send updates occasionally.*/}
            {/*        </DialogContentText>*/}
            {/*        <TextField*/}
            {/*            autoFocus*/}
            {/*            margin="dense"*/}
            {/*            id="name"*/}
            {/*            label="Email Address"*/}
            {/*            type="email"*/}
            {/*            fullWidth*/}
            {/*            variant="standard"*/}
            {/*        />*/}
            {/*    </DialogContent>*/}
            {/*    <DialogActions>*/}
            {/*        <Button onClick={handleClose}>Cancel</Button>*/}
            {/*        <Button onClick={handleClose}>Subscribe</Button>*/}
            {/*    </DialogActions>*/}
            {/*</Dialog>*/}
            <Dialog open={isVisible} onClose={handleVisibleCreatePostDialog}>
                <DialogTitle>Subscribe</DialogTitle>
                <Button onClick={handleVisibleCreatePostDialog}>
                    Close
                </Button>
            </Dialog>
        </div>
    );
};

export default CreatePost;
