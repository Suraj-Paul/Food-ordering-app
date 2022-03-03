import React,{Component} from 'react';
import axios from 'axios';
import ViewOrders from './ViewOrders';

const orderdetail = "http://localhost:8900/orderlist";

class OrderDisplay extends Component{
    constructor(){
        super()

        this.state={
            orders:''
        }
    }

    render(){
        return(
            <div>
            <div className="container">
                <div>
                    <ViewOrders orderdata={this.state.orders}/> 
                </div>
            </div>
        </div>
        )
    }

    componentDidMount(){
        axios.get(`${orderdetail}`)
        .then((response) => {this.setState({orders:response.data})})
    }
}


export default OrderDisplay;