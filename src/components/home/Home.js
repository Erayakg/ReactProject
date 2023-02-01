
import Post from "../Post/Post";
import React,{useState,useEffect} from "react";
import { makeStyles } from '@mui/styles';


function Home(){
    const [error,setError]=useState(null);
    const [isLoaded,setisLoaded]=useState(false);
    const [postlist,setPostlist]=useState([]);
   
    useEffect(()=>{
        fetch("/post").then((res) => res.json().then(

    (result)=>{
        setisLoaded(true);
        setPostlist(result);
     }
        ),(error)=>{
            setisLoaded(true);
            setError(error);
        }
    )
        console.log(postlist);
},[])

    if(error){
        return <div>Error</div>
    }else if(!isLoaded)
    {return   <div>loading</div>}
    else{

        return <div>  
        
        <div> {
            postlist.map(post=>(
                    <Post title={post.title} text={post.txt} UserId={post.userId} UserName={post.userName} ></Post>
            )
            )
         }   </div>
        </div>
    }
}
export default Home;