import react, {useEffect, useState} from 'react';

import axios from 'axios';
import style from './style.module.scss';

const AddPost=({ posts })=>{
  
  
    const[addPostState, setAddPostState] = useState({
        bodyOfPost: ""
    });

    const handleChange = (e) => {
      const value = e.target.value;
      setAddPostState({
          ...addPostState,
          [e.target.name]: value
      });
  };
  
  const handleSubmit = (e) => {
    
    const userData = {
      bodyOfPost: addPostState.bodyOfPost
    };

        axios.post('http://localhost:8080/api/post/add-post', userData).then((response) => {
        console.log(response.data);
        setAddPostState(response.data);
      });
    };   
      
      return(
     
        <div className={style.postForm}>
            <form onSubmit={handleSubmit}>
               <textarea 
                name="bodyOfPost"
                value={addPostState.bodyOfPost}
                onChange={handleChange}
                placeholder="Write here"
              />
              <button className={style.postButton} type="submit">Create Post</button>
              </form>
        </div>

      );

    }

  

export default AddPost
