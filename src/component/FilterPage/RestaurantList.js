import React from 'react';
import { Link } from 'react-router-dom'
import './RestaurantList.css'

const RestaurantList = (props) => {
    const renderList = ({restdata}) => {
        if(restdata){
            return restdata.map((item) => {
                return (
                    <div className="restaurantlist__container">                        
                        <div className="restaurantlist__details">
                            <img className="restaurantlist__image" src={item.thumb}/>
                            <div className = "restaurantlist__name">
                                <Link to={`/rest/${item._id}`}>
                                    <h2>{item.name}</h2>
                                </Link>       
                                    <h4>{item.locality}</h4>
                            </div>
                        </div>
                        <hr />
                        <div className="restaurantlist__price">
                            <p>Mealtype : {item.type[0].name},{item.type[1].name}</p> 
                            <p>CUISINES : {item.Cuisine[0].name},{item.Cuisine[1].name}</p>
                            <p>COST FOR TWO:₹{item.cost}</p>
                        </div>      
                    </div>
                )
            })
        }
    }
    return(
        <div> 
            {renderList(props)}
        </div>
    )
}

export default RestaurantList;