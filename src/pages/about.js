import React from "react"
import { Header } from '../components/header'
import {Link} from 'gatsby'
import "../styles/global.css"
import Container from '../components/container'

export default () => (
    <div>
        <Container>
        <Link to='/'>Home</Link>
        <Header headerText="About Page"/>
        <div>Hello About Page</div>
        </Container>
    </div> 
)