import { useEffect, useState } from 'react';

import AddPost  from '../../Components/post';
import Axios from 'axios';
import style from './style.module.scss';

const PostScreen=()=>{

    const [posts, setPost] = useState(null),
        [loadingPost, setLoadingPost] = useState(true);


  useEffect(() => {
    const fetchPost = async () => {
      const result = await Axios('http://localhost:8080/api/post');
      setPost(result.data);
      console.log(result.data)
    }
    
    if(posts) {
      setLoadingPost(false);
    }

    const timer = setTimeout(() => {
      !posts && fetchPost();
    }, 1000);
    return () => clearTimeout(timer);
  }, [posts]);  

  
return (
    <div>
        <section className={style.postForum}>
        <h2>Create A Post</h2>
        <AddPost posts={posts} />
        </section>
        <h2>Questions</h2>
        <h3>A Safe Place to Educate Yourself On Important Differences & Bring Us Closer Together</h3>
        {loadingPost ? <h3>Loading...</h3> :
                 <div className={style.post}>
              {posts.map(post => (
                <div key={post.id}>
                    <p className={style.postBox}>{post.bodyOfPost}</p>
                </div>
              ))}  
            </div>
}
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