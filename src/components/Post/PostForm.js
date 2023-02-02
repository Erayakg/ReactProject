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
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { InputAdornment, OutlinedInput } from '@mui/material';
import { json } from 'react-router-dom';
export default function PostForm(props) {
    const {UserId,UserName}=props;
  const [expanded, setExpanded] = React.useState(false);
  const[text,setText]=React.useState("")
  const[title,setTitle]=React.useState("")
 
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleSubmit= ()=>{
    SavePost();
  }
  const handleTitle=(value)=>{
    setTitle(value);
  }
  const handleTxt=(value)=>{
    setText(value);
  }
  const SavePost=()=>{
    fetch("/post",{
      method:"POST",
      headers:{
        "COntent-Type":"application/json",
      },
      body:JSON.stringify({
      title:title,
      UserId:52,
      text:text

      }),



    }).then((res)=>res.json()).catch((err)=>console.log("error"))
  }




  return (
   <Container fixed  >
    <Card   sx={{ maxWidth: 3450 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {UserName}
          </Avatar>
        }
        title={<OutlinedInput  
        id="outlined-adorment-amount"
        multiline
        placeholder='Title'
        inputProps={{ maxLength:25}}
        fullWidth
        onChange={(i)=>handleTitle(i.target.value)}
        >
        </OutlinedInput>}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <OutlinedInput  
        onChange={(i)=>handleTxt(i.target.value)}
        id="outlined-adorment-amount"
        multiline
        placeholder='Text'
        inputProps={{ maxLength:250}}
        fullWidth
        endAdornment={
          <InputAdornment position='end'>
          <Button  onClick={handleSubmit} variant="contained" color="success" >save</Button>
          </InputAdornment>
        }
        >
        </OutlinedInput>
        </Typography>
      </CardContent>
    </Card>
    </Container>
  );
}