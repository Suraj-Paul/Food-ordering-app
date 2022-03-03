import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Details.css'

const detailUrl = '';



class Details extends Component {
  constructor() {
    super()
    this.state = {

    }

  }
  render() {
    return (
      <body>
        <div class=" titlebar nav-bar">
          <Link to="/">
            <div id="Logo" />
          </Link>
          <h2 style={{
            marginLeft: "75px",
            marginTop: "-35px",
            fontWeight: "600",
            fontFamily: "Poppins",
            color: "antiquewhite",
          }}>EDUMATO</h2>
          <button class="Creataccount">
            <p>Creataccount</p>
          </button>
          <button class="Login">
            <p>Login</p>
          </button>
        </div>
        <div class="Container">
          <div id="myCarousel" class="carousel slide" data-ride="carousel">

            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>


            <div class="carousel-inner">
              <div class="item active">
                <img src={"./breakfast.png"} alt="breakfast" />
              </div>

              <div class="item ">
                <img src={"./snacks.png"} alt="snacks" />
              </div>

              <div class="item">
                {/* <img src="foodWallpaper.png" alt="food"/> */}
              </div>
            </div>


            {/* <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                  <span class="glyphicon glyphicon-chevron-left"></span>
                  <span class="sr-only">Previous</span>
                </a> */}
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <div class="Heading">
            <h1>The Big Chill Cakery</h1>
          </div>
          <main>
            <Tabs className="tabs">
              <TabList>
                <Tab className="tab">
                  <input name="checkbox-tabs-group" type="radio" id="checkbox1" class="checkboxtab" checked />
                  <label for="checkbox1">Overview</label>
                </Tab>
                <Tab className="tab">
                  <input name="checkbox-tabs-group" type="radio" id="checkbox2" class="checkboxtab" />
                  <label for="checkbox2">Contact</label>
                </Tab>
              </TabList>
              <TabPanel className="content">
                <h3>About this place</h3>
                <div class="type">
                  <h4>Cuisine</h4>
                  <p>Bakery, Fast-food</p>
                </div>
                <div class="cost">
                  <h4>Average Cost</h4>
                  <p>₹700 for two people (approx.)</p>

                </div>
              </TabPanel>
              <TabPanel className="content">
                <div class="contact-number">
                  <h4>Phone Number</h4>
                  <p>+91 114004566</p>
                </div>
                <div class="address">
                  <h2>The Big Chill Cakery</h2>
                  <p>Shop 1, Plot D, Samruddhi Complex, Chincholi, Mumbai-400002, Maharashtra</p>
                </div>
              </TabPanel>

              {/* <div class="content">
                          
                        
                      </div> */}
            </Tabs>
          </main>
        </div>
      </body>
    )
  }
  //  componentDidMount(){
  //    fetch({method:'GET'})
  //    .then((res) => res.jason())
  //    .then((data) => {
  //      this.setState({})
  //    })
  //  } 
}

export default Details;
