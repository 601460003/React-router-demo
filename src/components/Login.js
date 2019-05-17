import React, {Component} from 'react';
import { BrowserRouter as Router, Redirect} from "react-router-dom";

class Login extends Component {
    constructor() {
        super();
        this.state = {}
    }

    doLogin = (e) => {
        e.preventDefault();
        let user = this.refs.userName.value;
        let word = this.refs.passWord.value;

        if(user=='admin'&&word==123456){
              alert('成功')
        }else {
            alert('失败 ')
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.doLogin}>
                    <input type="text" ref='userName'/>
                    <input type="password" ref='passWord'/>
                    <input type="submit" value='执行登录'/>
                </form>
            </div>
        )
    }
}

export default Login;