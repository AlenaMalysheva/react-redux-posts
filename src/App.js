import './App.css';
import Likes from './Likes'

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src='https://klike.net/uploads/posts/2019-07/1562069947_1.jpg' alt='sea' width= '400px'/>
            <Likes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

