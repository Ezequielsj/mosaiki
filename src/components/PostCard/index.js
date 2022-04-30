import React from "react";
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionsAre from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from "@mui/material/Avatar";

import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LightbulbSharpIcon from '@mui/icons-material/LightbulbSharp';
import MessageSharpIcon from '@mui/icons-material/MessageSharp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const useStyles = makeStyles((theme) => ({
    root: {

        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        maxWidth: 800,


    },
    subheader: {
        display: 'flex',

    },
    caption: {
        paddingRight: 10
    },

    image: {
        height: 300,
        width: '100%',
        maxWidth: '100%'
        

    
    },
    Content: {       

        padding: 0
    },

    bigheader: {
        display: 'flex',
        alignItems: 'center'
    
    },


    MoreHoriz: {
        marginLeft: 'auto',
        padding: '1%',
    },

    CardActions:{
        display: 'flex',
        


    }
       


}))

function PostCard({ post }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            
            <div className={classes.bigheader}>
                <CardHeader
                    avatar={<Avatar src={post.author.avatar} />}
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
                
                <div className={classes.MoreHoriz}>
                <IconButton aria-label="like" >
                        <MoreHorizIcon />
                </IconButton>
                </div>
            </div>
            
            <CardContent className={classes.Content}>
                <CardActionsAre >
                    <img src={post.image} className={classes.image} alt="img"/>
                </CardActionsAre>
            </CardContent >


            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label="like">
                    <FavoriteIcon />
                    <Typography style={{cursor: 'pointer'}}
                    color="textSecondary"
                    variant="body2"
                    >
                        {'3000'}
                    </Typography>
                </IconButton>

                <IconButton aria-label="like">
                   <LightbulbSharpIcon />
                    <Typography style={{cursor: 'pointer'}}
                    color="textSecondary"
                    variant="body2"
                    >
                        {'1040'}
                    </Typography>
                </IconButton>

                <IconButton aria-label="like">
                    <MessageSharpIcon />
                    <Typography style={{cursor: 'pointer'}}
                    color="textSecondary"
                    variant="body2"
                    >
                        {'1998'}
                    </Typography>
                </IconButton>

                <IconButton aria-label="like">
                    <MoreVertIcon />
                </IconButton>
                

            

            </CardActions>
            

        </Card>
    )
}

export default PostCard;