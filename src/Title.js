import { useDispatch, useSelector } from 'react-redux';
import { inputText } from './redux/actions'


function Title (props) {
    console.log('props title', props)

    const dispatch = useDispatch();

    const text = useSelector(state => {
    //  console.log('state >>>>',state)

    const { inputReducer } = state;
    return inputReducer.text
    })

    const handleChange = (event) => {
        // console.log('handletext', event.target.value);

        dispatch(inputText(event.target.value))
    }

    return (
        <div className="card-title">
            <div className="card-title-top">
                <input type='text' onChange={handleChange} />
            </div>
            <p>{text}</p>
        </div>
    )
}

export default Title;