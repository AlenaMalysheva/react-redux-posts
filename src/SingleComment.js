import { useState,useEffect } from "react";
import { commentUpdate } from "./redux/actions";
import { useDispatch } from "react-redux";
function SingleComment ({data}) {
    
    const [commentText, setCommentText] = useState('')
    const { text, id } = data;

    const dispatch = useDispatch();

    useEffect(() => {
        if(text) { // когда появляется переменная text
            setCommentText(text);
        }
    }, [text])

    const handleInput = (event) => {
        setCommentText(event.target.value)
    }

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(commentUpdate(commentText,id))
    }

    return (
        <form className="comments-item" onSubmit={handleUpdate}>
            <div className="comments-item-delete">&times;</div>
            <input type='text'value={commentText} onChange={handleInput}/>
            <input type='submit' hidden/>
        </form>
    )
}

export default SingleComment;