import React from "react"
import  {Header}  from '../components/header'
import Container from '../components/container'
import { Link } from 'gatsby'
import "../styles/global.css"

export default () => (
    <div>
        <Container>
        <Link to='/about'>About</Link>
        <Header headerText="Index Page" />
        <div>Hello world!</div>
        </Container>
    </div> 
)