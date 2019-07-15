import React, {Component} from 'react';
import './App.css';
/*
Screen:LoginScreen
Loginscreen is the main screen which the user is shown on first visit to page and after
hitting logout
*/
import LoginScreen from './Loginscreen';
import Dashboard from './components/Dashboard';
/*
Module:Material-UI
Material-UI is used for designing ui of the app
*/
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

var apiBaseUrl = "http://localhost:4000/api/";
var request = require('superagent');

class UploadScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    /*
      Function:handleLogout
      Parameters: event
      Usage:This fxn is used to end user session and redirect the user back to login page
      */
    handleLogout(event) {
        // console.log("logout event fired",this.props);
        var loginPage = [];
        loginPage.push(<LoginScreen appContext={this.props.appContext}/>);
        this.props.appContext.setState({loginPage: loginPage, uploadScreen: []})
    }

    render() {
        // const element = <Welcome name="Sara" />;

        return (
            <div style={BackGround}>
                <div className="App">
                    <MuiThemeProvider>
                        <RaisedButton disabled={this.state.first_name} label="Log Out!!" primary={true}
                                      style={btnLogOut} onClick={(event) => this.handleLogout(event)}/>
                    </MuiThemeProvider>
                    <div style={centralMessage}>
                        Welcome to the First Dashboard!
                    </div>
                    <div >
                    <Dashboard data={this.state.data} />
                    </div>
                </div>
            </div>
        );
    }
}

const btnLogOut = {
    // margin: 15,
    float: "right",
    marginRight: 40,
    marginTop: 3
};

const centralMessage = {
    fontSize: "200%",
    fontWeight: "bolder",
    background: "YellowGreen",
    textAlign: "center"
};

const BackGround = {
    backgroundColor: "gray",
    backgroundSize: "cover",
};

const styleColumns = {
    marginRight: "100px",
};


export default UploadScreen;