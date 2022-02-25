import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from '../components/Search';

const Home = () => {
    return (
        <div className="home">
            {/* <h1>This is home page</h1> */}
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to='/gmail'>Gamil</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon/>
                    <AccountCircleIcon/>
                </div>
            </div>
            <div className="home__body">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="" />

                {/* Search */}
                <div className="input__container">

                <Search />
                </div>

            </div>
        </div>
    )
}

export default Home
