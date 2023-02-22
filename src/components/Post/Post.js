import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {  Container } from '@mui/system';
import { useEffect,useState } from 'react';
import Comment from '../Comment/Comment';
import { Button } from '@mui/material';
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Post(props) {
    const {title,text,UserId,UserName,postId}=props;

  const [expanded, setExpanded] = React.useState(false);
  const [comments,setcomments]=React.useState([]);
  const [isloadingcomments,setIsloadingcomments]=React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const refreshComments=()=>{
    fetch("/comments").then((res) => res.json().then(

        (result)=>{
            setIsloadingcomments(true);
            setcomments(result);
         }
            ),(error)=>{
                setIsloadingcomments(true);
                console.log("error"+error)
            }
        )
}
useEffect(() => {
  refreshComments();
  console.log(comments.toString())
}, [setcomments]);


  return (
   <Container fixed  >
    <Card   sx={{ maxWidth: 3450 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {UserName}
          </Avatar>
        }
    
        title={title}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <Typography paragraph>
            {
                    comments.map(comment => (
                        
                        <Comment key={comment.id} text={comment.commentTxt} Commentpostid={comment.post.id} postId={postId} ></Comment>

                          )
                    )}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Container>
  );
}