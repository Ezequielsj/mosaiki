import React from "react";
import { makeStyles } from '@mui/styles';

import PostButton from "../../../components/PostButton";

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

const posts = [
    {
      id: 1,
      author: { 
         avatar: '/images/avatars/avatar_1.jpeg'
      },
    },
    

];

function NewPost() {
     const classes = useStyles();
    return (
        <div className={classes.root}>
            {
                posts.map(post => (
                    <PostButton post={post} />
                ))
            }
            
        </div>
    )
}




export default NewPost;