import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import {  Container } from '@mui/system';
import Button from '@mui/material/Button';
import { InputAdornment, OutlinedInput } from '@mui/material';
export default function PostForm(props) {
    const {UserId,UserName}=props;
  const[text,setText]=React.useState("")
  const[title,setTitle]=React.useState("")
  

  const handleSubmit= ()=>{
    SavePost();
    refreshpost();
    

  }
  const handleTitle=(value)=>{
    setTitle(value);
   
  }
  const handleTxt=(value)=>{
    setText(value);
 
  }
  const data = { 
        "text": text,
        "title": title,
        "userId": 52
  };

  const SavePost=()=>{
      fetch('/post', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
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
          <InputAdornment  position='end'>
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