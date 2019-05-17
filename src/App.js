import React from 'react';
import './assets/css/App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home'
import Pcontent from './components/Pcontent'
import Login from './components/Login'


function App() {
  return (
    <div className="App">
        <Router>
      <header className="App-header">

           <h4>react请求数据实现  商品列表 商品详情demo总结</h4>
          <Route exact path="/" component={ Home } />
          <Route path="/login" component={ Login } />
          <Route path="/pcontent/:id" component={ Pcontent } />
      </header>
        </Router>
    </div>
  );
}

export default App;
