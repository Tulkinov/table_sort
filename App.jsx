import React, { Component } from 'react'
import './App.css'
import login from './login.png'
import logout from './logout.png'
import Table from './table.jsx'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoggedIn: true,
      isActive: 'today',
    };
  }
  render() {
    const onChange=()=>{
      this.setState({isLoggedIn: !this.state.isLoggedIn})
    }
    const change=(title)=>{
      this.setState({isActive: title})
    }
      return (
        <div>
         {
          this.state.isLoggedIn? (
          <h1>Welcom to Facebook</h1>
          ) : (<h1>Bye to Facebook</h1>
          )}
          <img src={this.state.isLoggedIn? login : logout} alt="" onClick={onChange} />
          {/* <button onClick={onChange}>
            {this.state.isLoggedIn? `LogOut`: `LogIn`}
          </button> */}
          <hr />
          <div>
            <div className="wrapper">
              <h1 onClick={()=>change('today')} className={`title ${this.state.isActive === 'today' && 'active'}`}>TODAY</h1>
              <h1 onClick={()=>change('week')} className={`title ${this.state.isActive === 'week' && 'active'}`}>WEEK</h1>
              <h1 onClick={()=>change('month')} className={`title ${this.state.isActive === 'month' && 'active'}`}>MONTH</h1>
            </div>
            <div>
              {this.state.isActive === 'today'&& <Table/> }
            </div>
          </div>
        </div>
      )
  }
}