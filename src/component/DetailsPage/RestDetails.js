import React,{Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Restdetails.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Header from '../Header&Footer/Header';
import Footer from '../Header&Footer/Footer';
import 'react-tabs/style/react-tabs.css';

const restdetail = "http://localhost:8900/restaurantdetails";
class RestDetails extends Component {
    constructor(props){
        super(props)
        this.state={
            rest: ''
        }
    }

    backbutton = () => {
        let mealid = parseInt(sessionStorage.getItem('mealid'))
        this.props.history.push(`/filter/${mealid}`)
    }
    
    render(){
        // console.log("--->>>>",this.state.rest)
        var {rest} = this.state
        return (
            <div>
                <Header/>
                <div className=" details__container container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h2>{rest.name}</h2>
                    </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-12">
                            <img className="details__image" src={rest.thumb} alt = {rest.name}/>
                        </div>
                    </div> 
                    <br />
                    <div>
                    <Tabs>
                        <TabList>
                            <Tab><span className="overview">Overview</span></Tab>
                            <Tab><span className="overview">Contact</span></Tab>
                        </TabList>
                        <TabPanel>
                            <div>
                                <div className="about">About this Place</div>
                                <div className="cuisine">Cuisine</div>
                                <div className="bakery">
                                    {rest.type ? rest.type.map((i) => {
                                        return i.name+" "
                                    }) : null}
                                </div>
                                <br />
                                <div className="cost">Average Cost</div>
                                <div className="bakery">₹{rest.cost} for two people(approx).</div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div>
                                <div className="phone-number">Phone Number</div>
                                <div className="pdigit">45456556</div>
                                <br />
                                <div className="address__header">Address</div>
                                    {rest.address}
                            </div>
                        </TabPanel>
                    </Tabs>
                    </div>
                    <div className="row">
                        <button class="btn btn-danger btn-lg"
                        onClick={this.backbutton}>Back</button>
                        &nbsp;
                        <Link to={`/placeOrder/${this.props.match.params.id}`} class="btn btn-success btn-lg">Place Order</Link>
                    </div>
                </div>
                </div>
            </div>
                <Footer/>
            </div>
        )       
    }

    componentDidMount(){
        let restid =parseInt(this.props.match.params.id)
        axios.get(`${restdetail}/${restid}`)
        .then((response) => {this.setState({rest:response.data[0]})})
    }
}

export default RestDetails;