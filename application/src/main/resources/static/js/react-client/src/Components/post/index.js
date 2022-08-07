import style from './style.module.scss';
import react, {useState, useEffect} from 'react';
import Axios from 'axios';


const Post=()=>{

    const [post, setPost] = useState(null),
          [loadingPost, setLoadingPost] = useState(true);
  
    const[addPostState, setAddPostState] = useState({
        postMessage: ""
    });
  
    useEffect(() => {
      const fetchPost = async () => {
        const result = await Axios('http://localhost:8080/api/post');
        console.log(result.data);
        setPost(result.data);
       
      }
      
      if(post) {
        setLoadingPost(false);
      }
  
      const timer = setTimeout(() => {
        !post && fetchPost();
      }, 1000);
      return () => clearTimeout(timer);
    }, [post]);  
    
    const handleChange = (post) => {
      const value = post.target.value;
      setAddPostState({
        ...addPostState,
        [post.target.postId] : value
      });
    }
  
    const handleSubmit = (post) => {
      post.preventDefault();
  
      const userData = {
        postId: addPostState.postId
      }
      
      return(
        loadingPost ? <h2>Loading...</h2>:
        <div>
            {post.map(post=>(
                <div key ={post.id}>
                    <h3>{post.bodyOfPost}</h3>
                </div>    
            ))}
                
        </div>

      );

    }
}
    


export default Post
