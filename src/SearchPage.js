import React from 'react'
import "./searchPage.css"
import { useStateValue } from './StateProvider'
import useGoogleSearch from './useGoogleSearch';
import Response from './Response'
import { Link } from 'react-router-dom';
import Search from './components/Search';
import SearchIcon from '@mui/icons-material/Search';
import { Description, LocalOffer, MoreVert, Room, TextFormatSharp } from '@mui/icons-material';
import { Image } from '@mui/icons-material';


const SearchPage = () => {

    const [{ term }, dispatch] = useStateValue();

    // const{ data } = useGoogleSearch(term);
    const { data } = useGoogleSearch(term); //Live api call

    // const data = Response;

    // google custum api - go on website
    // htttps://cse.google.com/cse/create/new
    // MOck api call
    console.log(data)
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">

                    <img className="searchPage__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="" />
                </Link>
                <div className="searchPage__headerBody">
                    <Search hideButtons />
                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="container1">
                                <div className="searchPage__option">
                                    <SearchIcon />
                                    <Link to="/all">All</Link>
                                </div>
                                <div className="searchPage__option">
                                    <Description />
                                    <Link to="/news">News</Link>
                                </div>
                                <div className="searchPage__option">
                                    <Image />
                                    <Link to="/images">Iamges</Link>
                                </div>
                            </div>
                            <div className="container2">
                                <div className="searchPage__option">
                                    <LocalOffer />
                                    <Link to="/shopping">Shopping</Link>
                                </div>
                                <div className="searchPage__option">
                                    <Room />
                                    <Link to="/maps">Maps</Link>
                                </div>
                                <div className="searchPage__option">
                                    <MoreVert />
                                    <Link to="/more">More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">

                                <Link to="/setting"> Setting</Link>
                            </div>
                            <div className="searchPage__option">

                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {term && (

                <div className="searchPage__results">
                    <p className="searchPage_resultCount">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>

                    {data?.items.map(item => (
                        <div className="searchPage__result">
                            <a href={item.link}>
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img className="searchPage__resultImage" src={
                                        item.pagemap?.cse_image[0]?.src
                                    } alt="" />
                                )}



                                {item.displayLink}
                            </a>

                            <a href={item.link} className="searchPage__Title">
                                <h2>{item.title}</h2>
                            </a>
                            <p
                                className="searchPage__resultSnippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchPage
