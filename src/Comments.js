import SingleComment from './SingleComment'
import { useState } from 'react';
import { commentCreate } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid'

function Comments (props) {
    // console.log(props)

    const [textComment ,setTextComment] = useState('');

    const comments = useSelector(state => {
        const { commentsReducer } = state;
        return commentsReducer.comments
    })

    const dispatch = useDispatch()

    const handleInput = (event) => {
        console.log('input', event.target.value)

        setTextComment(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit' ,textComment )
        
        const id = uniqid();
        dispatch(commentCreate(textComment,id))
    }

    return ( 
        <div className="card-comments">
            <form className="comments-item-create" onSubmit={handleSubmit}>
                <input type='text' placeholder="your comment" value={textComment} onChange={handleInput}/>
                {/* такая запись дает возможность обойтись без кнопки и submit по нажатию на enter */}
                <input type='submit' hidden/> 
            </form>
            {!!comments.length && comments.map(res => {
                return <SingleComment key={res.id} data={res}/>
            })}
          
        </div>
    )
}

export default Comments;