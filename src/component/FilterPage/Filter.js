import React, { Component } from 'react';
import axios from 'axios';
import './Filter.css';
import RestaurantList from './RestaurantList';
import Costfilter from '../filter/Costfilter';
import CusineFilter from '../filter/CuisineFilter';
import Header from '../Header&Footer/Header';
import Footer from '../Header&Footer/Footer';

const restdetail = "http://localhost:8900/restaurantlist";
class Filter extends Component{
    constructor(props){
        super(props)
        this.state = {
            citiId: parseInt(sessionStorage.getItem('citiId'))? parseInt(sessionStorage.getItem('citiId')):1,
            restlist:[],
        }
    }
    setDataPerCuisine(sortedData){
        this.setState({restlist:sortedData})
    }

    setDataPerCost(sortedData){
        this.setState({restlist:sortedData})
    }

    render() {
        return (
            <body>
                <Header/>
                
                <div className="container"> 
                <h1 className="heading">Mealtype places in City</h1>    
                    <div class="row">
                        <div className="mealtype col-lg-2" >
                            <div className = "mealtype__container">
                                <center class="titles"><h3>Cuisines</h3><hr /></center>
                                <CusineFilter mealIdNumber={this.props.match.params.id} citiIdNo={this.state.citiId} restpercuisine={(data) => { this.setDataPerCuisine(data) }} />
                            </div>
                            <div className = "mealtype__container">
                                <center className="titles"><h3>Cost for two</h3><hr /></center>
                                <Costfilter restpercost={(data) => { this.setDataPerCost(data) }} mealIdNumber={this.props.match.params.id} citiIdNo={this.state.citiId} />
                            </div>
                            <div className = "mealtype__container">
                                <center className="titles"><h3>Sort</h3><hr /></center>
                                <input type="radio" name="sort"  value="" /><span class="text">Price High to Low </span><br />
                                <input type="radio" name="sort" value="" /><span class="text">Price Low to High</span><br />
                            </div>
                        </div>
                    {/* restaurant list */}
                        <div className ="col-lg-8">
                            <RestaurantList restdata={this.state.restlist}/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </body>
        )
    }
    componentDidMount(){
        sessionStorage.setItem('mealid',this.props.match.params.id)
        let mealid = parseInt(this.props.match.params.id)
        axios.get(`${restdetail}/${this.state.citiId}/${mealid}`)
        .then((response) => {this.setState({restlist:response.data})})
    }
}

export default Filter;