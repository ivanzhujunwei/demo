import React, {Component} from 'react';
import './App.css';
import AppNav from './AppNav';
import AppFooter from './AppFooter';
import Promotion from './home/Promotion';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSignUp: true
        };
        // this.setState = this.setState.bind(this);
    }

    set_sign_up_state = (isSignUp) => {
        this.isSignUp = isSignUp;
        {console.log("this->props->isSignUp: "+this.isSignUp)}
    };

    get_sign_up_state = () => {
        console.log("current sign up state=>" + this.isSignUp);
        return this.isSignUp;
    };

    render() {
        return (
            <div>
                <AppNav set_sign_up_state = {this.set_sign_up_state}/>
                <Promotion get_sign_up_state = {this.get_sign_up_state}/>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <AppFooter/>
            </div>
            // <div className="App">
            //   <header className="App-header">
            //     <img src={logo} className="App-logo" alt="logo" />
            //     <h1 className="App-title">Welcome to React, Ivan</h1>
            //   </header>
            //   <p className="App-intro">
            //     To get started, edit <code>src/App.js</code> and save to reload.
            //   </p>
            // </div>
        );
    }
}

export default App;
