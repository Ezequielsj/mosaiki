import React from "react";
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionsAre from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from "@mui/material/Avatar";



const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        maxWidth: 800,
    },
    subheader: {
        display: 'flex',
        alignItems: 'center'
    },
    caption: {
        paddingRight: 2,
    },
    image: {
        height: '100%',
        width: '100%',
        maxWidth: '100%' 
    },
    content: {
        padding: 0,
    }
}))

function PostCard({ post }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={<Avatar disableSpacing src={post.author.avatar} />}
                title={<Typography variant="h6">{post.title}</Typography>}
                subheader={
            <div className={classes.subheader}>
                <Typography variant="caption" className={classes.caption}>
                    {'Criado por:'}
                </Typography>
                <Typography variant="subtitle2" className={classes.caption}>
                    {post.author.name}
                </Typography>
                <Typography variant="caption" className={classes.caption}>
                    {post.date}
                </Typography>    
            </div>
                }
            />
            
            <CardContent className={classes.content}>
                <CardActionsAre >
                    <img src={post.image} className={classes.image} alt="img"/>
                </CardActionsAre>
            </CardContent >
            <CardActions disableSpacing>

            </CardActions>

        </Card>
    )
}

export default PostCard;