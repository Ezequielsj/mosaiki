import React from "react";
import { makeStyles } from '@mui/styles';

import PostCard from "../../../components/PostCard";

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

const posts = [
    {
      id: 1,
      author: { 
         id: 1,
         name: 'Leonardo da Vici,',
         username: 'lucasnhimi',
         avatar: '/images/avatars/avatar_1.jpeg'
      },
      title: "uma ferramenta pra registrar sentimentos dos alunos",
      date: "April 7, 2020",
      description: 'Fala pessoal',
      hashtags: "#dotnet, #javascript",
      image: "/images/posts/post9.jpeg"
    },
    {
        id: 2,
        author: { 
           id: 1,
           name: 'Leonardo da Vici',
           username: 'lucasnhimi',
           avatar: '/images/avatars/avatar_1.jpeg'
        },
        title: "uma ferramenta pra registrar sentimentos dos alunos",
        date: "April 7, 2020",
        description: 'Fala pessoal',
        hashtags: "#dotnet, #javascript",
        image: "/images/posts/post8.jpeg"
      },

];

function Feed() {
     const classes = useStyles();
    return (
        <div className={classes.root}>
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))
            }
            
        </div>
    )
}

export default Feed;