import { Component } from "react";
import { Box, withStyles } from '@material-ui/core';

import logo from './images/logo2.jpg'

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

    }

}


class App extends Component{
  render(){
    return(
      <Box className={this.props.classes.container}>
         <Box className={this.props.classes.header}>COVID-19 Pandemic Dashboard</Box>
         <img style={{width:480}} src={logo} alt="covid"/>
      </Box>
    )
  }
}

export default withStyles(style)(App);