import React from 'react';
import './Homepage.css';
import Banner from './Banner';
import QuickSearch from '../QuickSearches/QuickSearch'
import Footer from '../Header&Footer/Footer';

const Homepage = (props) => {
    const handleRestaurent = (data) => {
        props.history.push(`/rest/${data}`)
    }

    return (
        <div className= "contain">
            <body>
                <Banner restid={(data) => {handleRestaurent(data)}}/>
                <QuickSearch /> 
                <Footer/>
            </body>
        </div>
    )
}

export default Homepage;