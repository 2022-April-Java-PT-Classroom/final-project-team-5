import React,{useEffect, useState} from "react";

import axios from "axios";
import style from './style.module.scss';

const Comment = () => {

    const [comments, setComments] = useState(null);
    const [commentState, setCommentState] = useState({name:"", text:""})
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('/api/comments {name}');
            setComments(result.data);
        }
        fetchData()
    }, [comments]);


    const handleChange = (event) => {
        const value = event.target.value;
        setCommentState({
            ...commentState,
            [event.target.name]: value
        });
    };


    const handleSubmit = (event) => {
        event.preventDefault();


        console.log(commentState)
        axios.post('/api/comments', commentState).then((response) => {
            setComments(response.data)
        });
    };

    return (
        <div className={style.comments}>
            <p className={style.statement}><span>Team Agape' appreciates any feedback form our visitors. Please leave a comment and let us know  your thought about  our website! </span></p>
        <div className={style.comment__form}>
            <form onSubmit={handleSubmit}>
                    <input type="text" name="name" value={commentState.name} onChange={handleChange} placeholder='Enter Your Name' />
                    <textarea type="text" name="text" value={commentState.text} onChange={handleChange} placeholder='Enter Your Comment' />
                    <button type="submit">Submit Comment</button>
                  
            </form>    

        </div > 
        <div className={"comment__section"}>
            {comments===null ? <h3>Loading Comments ...</h3> :
                <div >
                    <h3><span>Comments</span></h3>
                    <div className={"comments__text"}>
                    <ul>
                        {comments.map(comment => (
                        <div className="new__comment" key={comment.commentId}>
                            <div className = {"individual__comment"}>
                                <p>Comment Name: {comments.name}</p>
                                <p>Comment Text: {comments.text}</p>
                            </div>
                        </div>
                        ))}
                    </ul>
                    </div>
                </div>
            }
           </div> 
        </div>
    );
 }

    export default Comment;
