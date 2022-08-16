import React, {useEffect, useState} from 'react';

import AddPost  from '../../Components/post';
import Axios from 'axios';
import style from './style.module.scss';

const PostsScreen = () => {

    const [allPosts, setAllPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchAllPostsData = async () => {
            const result = await Axios('http://localhost:8080/api/post');
            console.log(result.data);
            setAllPosts(result.data);
        }

        if(allPosts) {
            setLoading(false);
        }

        const timer = setTimeout(() => {
            !allPosts && fetchAllPostsData();
        }, 1000);

        return () => clearTimeout(timer);

    }, [allPosts]);

    return(
        <div className={style.allPostsContainer}>
            <h2 className={style.postHeader}>Speak Out!</h2> 
            <h3 className={style.postBlurb}>A Safe Place to Educate Yourself On Important Differences & Bring Us Closer Together</h3>
            
            {loading ? <h3>One Moment...</h3> : allPosts.map(post => (
                <a key={post.id} href={`post/${post.id}`}><h2 className={style.postContentTitle}>{post.title}</h2><p className={style.allPosts}>{post.bodyOfPost}</p></a>
            ))}
            <div>
            <section className={style.postForum}>
        <h2 className={style.createPost}>Create A Post</h2>
        <AddPost posts={allPosts} />
        </section>
            </div>
        </div>
    );
    
}
export default PostsScreen;