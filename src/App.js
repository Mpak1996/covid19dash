import { Component } from "react";
import { Box, Typography, withStyles } from '@material-ui/core';

import logo from './images/logo2.jpg';
import Cards  from './components/Cards';
import { fetchData } from "./service/api";
import Countries from "./components/Countries";
import Chart from "./components/Chart";

const style = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
    },
    
    header: {
      background: '#F5F5F5',
      width: 500,
      textAlign: 'center',
      fontSize: 32,
      padding: 15,
      color: 'black'

    },
    lastUpdated: {
      color: 'black',
      fontSize: 15
    }
}


class App extends Component{

  state={
    data: {},
    country: ''

  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData})
    console.log(fetchedData);
  }


   handleCountryChange = async(country) => {
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country})
    console.log(fetchedData);
  }

  render(){
    const { data } = this.state;
    return(
      <Box className={this.props.classes.container}>
         <Box className={this.props.classes.header}>COVID-19 Pandemic Dashboard</Box>
         <Typography className={this.props.classes.lastUpdated}>Last Updated: {data.lastUpdate && new Date(data.lastUpdate).toDateString()}</Typography>
         <img style={{width:480}} src={logo} alt="covid"/>
         <Cards data={data}/>
         <Countries handleCountryChange={this.handleCountryChange}/>
         <Chart data={data}/>
      </Box>
    )
  }
}

export default withStyles(style)(App);