import { useEffect, useState } from 'react';

import  Axios  from 'axios';
import axios from 'axios';
import style from './style.module.scss';
import { useParams } from 'react-router-dom';

const PostScreen=()=>{

    const { id } = useParams();
    const [post, setPost] = useState(null),
          [loadingPost, setLoadingPost] = useState(true);
    const [commentState, setCommentState] = useState({
          commentContent: ""
        });


  useEffect(() => {
    const fetchPost = async () => {
      const result = await Axios(`http://localhost:8080/api/post/${id}`);
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
  

  const handleChange = (event) => {
    const value = event.target.value;
    setCommentState({
    ...commentState,
    [event.target.name] : value
});
}

const handleSubmit = (event) => {

  const userData = {
    commentContent: commentState.commentContent
}

axios.post(`http://localhost:8080/api/post/${id}/add-comment`, userData).
then((response) => {
    console.log(response.status);
    console.log(response.data);
    setPost(response.data);
})
}

  
return (

  loadingPost ? <h2 className={style.singlePostLoad}>Loading</h2> :

    <div className={style.postInfo}>
      
        <h2>Questions</h2>
        <h3>A Safe Place to Educate Yourself On Important Differences & Bring Us Closer Together</h3>
        {loadingPost ? <h3>Loading...</h3> :
                 <div className={style.post}>
    
                    <p className={style.postBox}>{post.bodyOfPost}</p>
                    
                </div>
  
 
}
{post.comments && post.comments.map(comment=> (
  <div key={comment.id}>
                      <p>{comment.commentContent}</p>
                      </div>
                  ))}
                 
              <form onSubmit={handleSubmit}>
                <input type="text"
                name="commentContent"
                value={commentState.commentContent}
                onChange={handleChange}
                placeholder='Write'
            />
            <button type='submit'>Add Comment</button>
            </form>
  
    </div>
    
    // <div>
    //     <section className={style.postForm}>
    //         <h2 className={style.posts}></h2>
    // <div className={style.post}>
    // <Post/>
    // <h3>{posts.bodyOfPost}</h3>
    // </div>
    //     </section>
    // </div> 
);
 }  


export default PostScreen