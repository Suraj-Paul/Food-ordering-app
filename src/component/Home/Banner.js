import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { useStateValue } from './StateProvider';
// import { auth } from './firebase';

const locurl = "http://localhost:8900/location";
const resturl = "http://localhost:8900/restauranthome?city=";

class Banner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: '',
            city: '',
            restaurants: '',
        }
    }

    handleCity = (event) => {
        this.setState({ restaurents: '' })
        this.setState({ city: event.target.value })
        var cityid = parseInt(event.target.value)
        sessionStorage.setItem('citiId', event.target.value)
        fetch(`${resturl}${cityid}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ restaurents: data })
            })
    }

    renderCity = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option value={item.city}>
                        {item.name}
                    </option>
                )
            })
        }
    }

    renderRest = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    // issue resolved, (*item._id were not passing)
                    <option value={item._id}> 
                        {item.name} | {item.locality}
                    </option>
                )
            })
        }
    }

    handleRestaurent = (event) => {
        // console.log(event.target.value)
        this.props.restid((event.target.value))
    }

    render() {
        return (
            <div>
                <div class="imgcontainer">
                <div class = "btnContainer">
                    {/* <Link to="/Login"><button>Login</button></Link> */}
                    {/* <Link to="/Register"><button>Sign Up</button></Link> */}
                </div>
                    <div class="logo">
                    </div>
                    <div class="tagline">
                        <h1>-:ZAIKA:-</h1>
                    </div>
                    <div class="HeadComp">
                        <h2>Find the best Restaurants,Cafés & Bars</h2>
                    </div>
                    <div class="locationselector">
                        <select class="dropdown" onChange={this.handleCity}>
                            <option value="">Select Location</option>
                            {this.renderCity(this.state.location)}
                        </select>
                        <input class="restaurantsinput" type="text" list="city" placeholder="Search for Restaurants..." onChange={this.handleRestaurent} /><i class=" fa fa-search"></i>
                        <datalist id="city">
                            {this.renderRest(this.state.restaurents)}
                        </datalist>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        fetch(locurl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ location: data })
            })
    }
}

export default Banner;