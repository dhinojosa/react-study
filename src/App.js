import React, {Component} from 'react';
import './App.css';
import MyForm from './MyForm'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Enter information to site</h1>
                </header>
                <MyForm/>
            </div>
        );
    }
}

export default App;
