import React from "react";
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";



const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        display: 'flex',
        alignItems: 'center',
        paddingRight: 40,
        paddingBottom: 5,
        paddingTop: 5,

    },

    button: {
        width: '100%',
        


    },

   
}))

function PostButton({ post }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={<Avatar src={post.author.avatar} />}
            />
            <Button variant="outlined" color="primary" className={classes.button}>Qual problema você quer resolver?</Button>

        </Card>
    )
}

export default PostButton;