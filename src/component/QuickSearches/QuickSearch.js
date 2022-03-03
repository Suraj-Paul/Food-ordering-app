import React, { Component } from 'react'
import QuickSearchDisplay from './QuickSearchDisplay'

const mealUrl = "http://localhost:8900/mealtype"

class QuickSearch extends Component {
    constructor(){
        super()
        this.state={
            mealtype :'',
            name: '',
            id:''
        }
    }

   render() {
        return (
            <div>
                <QuickSearchDisplay mealData = {this.state.mealtype}/>
            </div>
        )
    }
    
    componentDidMount(){
        fetch(mealUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealtype:data})
        })
    }
}

export default QuickSearch;
