import React from 'react'
import ListItems from '../List/ListItems';
import Header from '../layout/Header'
const Home = () => {
    return (
        <div style = {{background:"#A7D1E1",minHeight:"100vh",paddingTop:'30px'}}>
            <Header />
            <ListItems/>
        </div>
    )
}

export default Home
