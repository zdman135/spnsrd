import React from "react";
import './Login.css';

function Login(props) {
  return(
    <div className="ui middle aligned center aligned grid">
    <div className="column margin-top">
      <h2 className="ui purple image header">
        <div className="content ui">
          Spnsrd Account Login
        </div>
      </h2>
      <form className="ui large form" _lpchecked="1">
        <div className="ui stacked segment">
          <div className="field">
            <div className="ui left icon input">
              <i className="user icon"></i>
              <input className="test-a" onChange={props.handleInputChange} type="text" name="username" placeholder="E-mail address" autoComplete="off" />
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <i className="lock icon"></i>
              <input className="test-a" onChange={props.handleInputChange} type="password" name="password" placeholder="Password" autoComplete="off" />
            </div>
          </div>
          <div className="ui fluid large purple submit button" onClick={props.handleLogin}>Login</div>
        </div>
    
        <div className="ui error message"></div>
      </form>
    
      <div className="ui message">
        New to us? <a href="/register">Sign Up</a>
      </div>
    </div>
    </div>    
      );
}

export default Login;

