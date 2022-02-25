import React, { useState } from 'react'
import "./Search.css"
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const Search = ({ hideButtons = false }) => {

    const [{},dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const history = useHistory();

    const search = e => {
        e.preventDefault();

        console.log('You hit the search button >>', input);

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,//object
            term: input
        })

        // do somthing with input...
        history.push('/search')
        // when you click enter after typing in search it will push you in search page

    };

    return (

        //  the form written below , when i wring code of it , I write it as div but for to get serach using enter button i convet it into form 
        // type = submit...... 
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                {/* this arrow function stores the value of search in input */}
                {/* onChange fires event */}
                <MicIcon className="search__micIcon" />
            </div>


            {!hideButtons ? (
                <div className="search__buttons">
                    <Button type='submit' onClick={search}>Google Search</Button>
                    <Button>I'm Feeling Lucky</Button>
                </div>
            ) :
                (
                    <div className="search__buttons">
                        <Button className="search__buttonsHidden" type='submit' onClick={search}>Google Search</Button>
                        <Button className="search__buttonsHidden">I'm Feeling Lucky</Button>
                    </div>
                )}

        </form>
    )
}

export default Search
