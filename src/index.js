import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Navigation from './Navigation';
import Header from './Header';
// import Background from './img/background1.png'
// import registerServiceWorker from './registerServiceWorker';


class App extends Component {
render(){
    return(
        <div className="myStyles">
            <Navigation logoTitle= 'Lawerence Williams'/>
            <Header title= 'Stylish Portfolio' button= 'Find Out More'/>
        </div>
    )
    //test
}

}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// registerServiceWorker();
