import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
   h:0,
   w:0,
bmi:0,
val:"",
    }
    }
    hm=(event)=>
    {
      var z=event.target.value;
      this.setState({h:z});
    }
    hn=(event)=>
    {
      var z=event.target.value;
      this.setState({w:z});
       var y=this.state.h/100;
       var bm=z/(y*y);
    if(bm<18.5)
        {this.setState({val:"underWeight"});
    }
    else if(bm>=18.5 && bm<=24.9)
    {
      this.setState({val:"NormalWeight"});
    }
    else if(bm>=25 && bm<=29.9){this.setState({val:"OverWeight"});}
    else if(bm>=30){this.setState({val:"Obese"});}
        this.setState({bmi:bm});
    }

    hand=()=>
    {
      this.setState({bmi:0,h:0,w:0});
    }
  render() {
  return (
    <div>
    <AppBar variant="contained" color="secondary" style={{
background:"linear-gradient(45deg, #06beb6 60%, #48b1bf 70%)"}}><h2>BMI CALCULATOR</h2></AppBar><br/>
    <br/>
<br/><br/>
<Container fixed style={{background:"linear-gradient(45deg, #06beb6 60%, #48b1bf 70%)" ,position:"absolute",border:"solid",paddingTop:"50px",paddingLeft:"50px",paddingRight:"100px",width:"320px"}}>
    <p>BMI is {this.state.bmi}</p><br/><br/>
    <p>{this.state.val}</p>
    <br/><br/><TextField label="Height(in Cms)"  variant="outlined" type="number" max="250" value={this.state.h} onChange={this.hm}></TextField>
    <br/><br/>
    <TextField label="Weight(in Kgs)"  variant="outlined" type="number" max="400" value={this.state.w} onChange={this.hn}></TextField>
  <br/><br/> <Button onClick={this.hand} variant="contained" color="primary" >
  Reset</Button><br/><br/></Container>
    </div>
  );
}
}

export default App;
