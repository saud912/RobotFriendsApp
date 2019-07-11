import React, {Component} from 'react';
import Cardlist from '../Components/Cardlist';
import Scroll from '../Components/scroll';
import SearchBox from '../Components/SearchBox';
import './App.css'



class App extends Component {
  constructor(){
    super()
    this.state = {

      robots:[],
      searchfield: ""
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
      return response.json();
    }).then(users =>{
      this.setState({robots:users})

    })

  }





  onSearchchange = (event) =>{
    this.setState({searchfield: event.target.value})

  }
  render(){
    const {robots,searchfield} = this.state;
    const filteredRobots = robots.filter((robot)=>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    if(this.state.robots.length ===0){
      return <h1 className=" f1 tc"> Loading </h1>
    }else{
    return(
      <div className="tc">
      <h1 className="f1"> Robo Friends </h1>
      <SearchBox searchChange = {this.onSearchchange}/>
      <Scroll>
      <Cardlist robots = {filteredRobots}/>
      </Scroll>


      </div>


    );
  }
  }

};


export default App;
