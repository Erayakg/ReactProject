
import Post from "../Post/Post";
import React, { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles';
import PostForm from '../Post/PostForm'
import { Container } from "@mui/system";

function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setisLoaded] = useState(false);
    const [postlist, setPostlist] = useState([]);

    useEffect(() => {
        fetch("/post")
            .then((res1) => res1.json()
                .then(
                    (result) => {
                        setisLoaded(true);
                        setPostlist(result);
                    }
                ), (error) => {
                    setisLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error</div>
    } else if (!isLoaded) { return <div>loading</div> }
    else {

        return <div>
            <Container fixed >
                <PostForm UserId={52} UserName={"eray"}></PostForm>
                {
                    postlist.map(post => (
                        <Post title={post.title} text={post.txt} UserId={post.userId} UserName={post.userName} postId={post.id} ></Post>
                    )
                    )}
            </Container>

        </div>
    }
}
export default Home;