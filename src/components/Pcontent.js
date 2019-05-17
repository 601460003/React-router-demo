import React, {Component} from 'react';
//所有的bug都用if解决

import axios from 'axios'
import {Link} from "react-router-dom";

import '../assets/css/content.css'

class Pcontent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            domain: 'http://a.itying.com/'
        }
    }

    requserData = (id) => {
        let api = this.state.domain + 'api/productcontent?id=' + id;
        axios.get(api)
            .then(res => {
                this.setState({
                    list: res.data.result[0]
                })
            })
            .catch(error => {
                console.log(error)
            })
    };

    //钩子获取数据id
    componentDidMount() {
        let id = this.props.match.params.id;
        this.requserData(id);

        // http://a.itying.com/api/productcontent?id=5ac1a22011f48140d0002955

    }

    render() {
        return (
            <div className='container'>
                <div className='back'><Link to='/'>返回</Link></div>
                <div className='box'>
                    <div className='p-content'>
                        {this.state.list.img_url?<img src={`${this.state.domain}${this.state.list.img_url}`} alt="55"/>:''}
                        <h4>{this.state.list.title}</h4>
                        <p>{this.state.list.price}</p>
                    </div>
                    <div className='detial'>
                        <h3>商品详情</h3>
                        <div>
                            {this.state.list.description}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Pcontent;