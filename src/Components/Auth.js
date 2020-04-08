import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getUser} from '../redux/reducer'

class Auth extends Component{
    constructor(){
        super()
        this.state={
            username: '',
            password: ''
        }
    }

registerUser = () => {
    const {username, password} = this.state
    axios.post('/api/register', {username, password})
    .then(res => {
        // console.log(res.data)
        this.props.getUser(res.data)
        this.props.history.push('/dash')
    }).catch(err => console.log(err))
}

loginUser = () => {
    const {username, password} = this.state
    axios.post('/api/login', {username, password})
    .then(res => {
        // console.log(res.data)
        this.props.getUser(res.data)
        this.props.history.push('/dash')
    }).catch(err => console.log(err))
}

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

    render(){
        // console.log(this.props)
        return(
            <div>
                <div>
                    <p>Shelfie</p>
                    <input placeholder='username' name='username' onChange={e => this.handleChange(e)} />
                    <input placeholder='password' name='password' onChange={e => this.handleChange(e)} />
                    <button onClick={this.loginUser}>Login</button>
                    <button onClick={this.registerUser}>Register</button>
                </div>
            </div>
        )
    }
}
export default connect(null, {getUser})(Auth)