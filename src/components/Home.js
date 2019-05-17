import React, {Component} from 'react';
import axios from 'axios'
import '../assets/css/index.css'

import {Link} from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            domain: 'http://a.itying.com/'
        }
    }

    requserData = () => {
        let api = 'http://a.itying.com/api/productlist';
        axios.get(api)
            .then(res => {
                this.setState({
                    list: res.data.result
                })

            })
            .catch(error => {
                console.log(error)
            })
    };

    //钩子获取数据
    componentDidMount() {
        this.requserData();
    }

    render() {
        return (
            <div>
                <div>
                    <button><Link to='login'>跳转到登录页面</Link></button>
                    {
                        this.state.list.map((value, key) => {
                            return (
                                <div key={key}>
                                    <h5 className='title'>{value.title}</h5>
                                    <ul className='bigBox'>
                                        {
                                            value.list.map((v, k) => {
                                                return (
                                                    <li key={k} className='box'>
                                                        <Link to={`/pcontent/${v._id}`}>
                                                            <div className='content'>
                                                                <img src={`${this.state.domain}${v.img_url}`} alt="55"/>
                                                                <p className='box-title'>{v.title}</p>
                                                                <p className='box-price'>{v.price}元</p>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}

export default Home;