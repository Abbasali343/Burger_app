import './App.css';
import Burger from './Burger';

function App() {
  return (
    <div className='page'>
      <div className='upper'>
        <div className='left'>
        <img src="./Pictures/icon.jpg" />
        </div>
        <div className='right'>
          <div className='nav'>
            <a>Register</a>
            <a>Login</a>
          </div>
        </div>
        
      </div>
      <div className='lower'>

        <Burger />
      </div>
    </div>


  );
}

export default App;
