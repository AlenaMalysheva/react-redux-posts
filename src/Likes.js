import { connect } from 'react-redux' // функция соединяет реакт компонент с редаксом
import { incrementLikes,decrementLikes } from './redux/actions'

function Likes (props) {
    console.log(props)
return (
    <div className="button-controls">
        <button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
        <button onClick={props.onDecrementLikes}>Dislike</button>
    </div>
    )
}

// функция передает данные из хранилища рекдакс(store)
// в компонент используя обьект props
// принимает состояние которое находится в store

// используем функцию mapStateToProps чтобы пробросить состояние из хранилища редакс в наш компонент
function mapStateToProps(state) {
    console.log('mapStateToProps >', state)

    const { likes } = state;
    return {   // возвращаем свойство likes, которое хранится в состоянии которое лежит в store
        likes: likes.likes // делаем копию состояния likes :  и берем его из состояния likes  в сторе(в редьюсере) , по ключу likes
    }
}

// используем функцию чтобы пробросить методы 
function mapDispatchToProps(dispatch) {
    return {  // возвращает ОБЬЕКТ В КОТОРОМ ЛЕДИТ функциЯ
        onIncrementLikes: () => {
        // обьект который содержит type и  payload(передаваемые в экшен данные)
            return dispatch(incrementLikes())
            //чтобы запустить action нужно его задеспатчить и передать в метод aqction
           //данные из экшен зафиксировались в редьюсере
        },
        onDecrementLikes: () => {
            // обьект который содержит type и  payload(передаваемые в экшен данные)
            return dispatch(decrementLikes())
            //чтобы запустить action нужно его задеспатчить и передать в метод aqction
             //данные из экшен зафиксировались в редьюсере
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes) ; 
// 1.подсоединяем компонент к редаксу с помощью импортированной функции connect
// получаем компонент которые принимает свойства из хранилища store