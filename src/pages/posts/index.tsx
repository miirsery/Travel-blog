import React from 'react';
import {Link} from "react-router-dom";
import {Box} from "@mui/material";
import PostTable from "../../components/Posts/PostTable";

const Posts = () => {
    return (
        <Box>
            <PostTable />
        </Box>
    );
};

export default Posts;
