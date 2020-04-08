import React from 'react'
import {connect} from 'react-redux'
import './header.css'

function Header(props){
    return(
        <div className='header'>
            <h1>Shelfie</h1>
            <h1>{props.username}</h1>
        </div>
    )
}
const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(Header)