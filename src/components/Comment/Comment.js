export default function Comment(props){
    const {text,Commentpostid,postId}=props;

    return(

        <div>
            
              {Commentpostid==postId ? <div>{text}</div> :null}
                         
        </div>

)
}