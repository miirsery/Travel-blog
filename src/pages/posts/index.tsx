import React from 'react';
import {Link} from "react-router-dom";

const Posts = () => {
    return (
        <div>
            Posts
            <Link to='/admin/admins'>Admins</Link>
        </div>
    );
};

export default Posts;
