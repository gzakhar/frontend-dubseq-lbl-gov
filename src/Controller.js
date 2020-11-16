import React, { Component } from 'react';
import Graph from './ScoreGraph.js'
import axios from 'axios';

export default class Controller extends Component {
  // state = {
  //   start: 0,
  //   end: 0,
  //   frag_view: [],
  //   gene_view: [],
	// }


  // get = (evt) => {
  //   evt.preventDefault();
  //   console.log("get");
  //   axios.get("http://localhost:8080/fragview" , {
  //     params: {
  //       posFrom: this.state.start,
  //       posTo: this.state.end
  //     }
  //   })
  //   .then(res => {
  //     // console.log(res.data);
  //     this.setState({frag_view: res.data});
  //   })
  //   .catch((err) => console.log(err))


  //   axios.get("http://localhost:8080/geneview", {
  //     params: {
  //       posFrom: this.state.start,
  //       posTo: this.state.end
  //     }
  //   })
  //   .then(res => {
  //     // console.log(res.data);
  //     this.setState({gene_view: res.data});
  //   })
  //   .catch((err) => console.log(err))
  // } 

  render() {
    return(
      <div className="controller">
        {/* <form onSubmit={this.get}>
        <label htmlFor="startSelect">start:</label>
        <input type="number" 
                value={this.state.start} 
                id="startSelect" 
                onChange={(event) => this.setState({start: event.target.value})} 
                />
        <label htmlFor="endSelect">end:</label>
        <input type="number" 
                value={this.state.end} 
                id="endSelect" 
                onChange={(event) => this.setState({end: event.target.value})} 
                />
        <button type="submit">view</button>
        </form> */}
        {/* <Graph fragments={this.state.frag_view} genes={this.state.gene_view}/>) */}
        <Graph />
        
      </div>

    )
  }
}