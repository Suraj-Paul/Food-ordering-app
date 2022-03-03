import React from 'react'
import { Link } from 'react-router-dom'

const QuickSearchDisplay = (props) => {
    const listMealtype = ({ mealData }) => {
        if (mealData) {
            return mealData.map((item) => {
                return (
                    <Link to = {`/filter/${item.mealtype}`}>
                        <div class="titleContainer">
                            <div class="titleComponent1">
                                <img src={item.image}/>
                            </div>
                            <div class="titleComponent2">
                                <div class="componentHeading">
                                    {item.name}
                                </div>
                                <div class="componentSubHeading">
                                    <>Start your day with exclusive {item.name} options</>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }
    return (
        <div>
            <div className="quickSearchContainer">
                <p className="quickSearchHeading">
                    Quick Searches
                </p>
                <p className="quickSearchSubHeding">
                    Discover restaurants by type of meal
                </p>
                {listMealtype(props)}
            </div>
        </div>
    )
}

export default QuickSearchDisplay;
