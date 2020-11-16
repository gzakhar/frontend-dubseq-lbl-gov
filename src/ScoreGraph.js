import React, {Component} from 'react';
import draw from './helper.js';
import axios from 'axios';

class ScoreGraph extends Component {
    
    state = {
        start: 0,
        end: 0,
        fragments: [],
        genes: [],
    }
    
    componentDidMount() {
        draw(this.state.fragments, this.state.genes)
    }

    update = async (evt) => {

        evt.preventDefault();

        let frag_res = await axios.get("http://localhost:8080/fragview", {
            params: {
                posFrom: this.state.start,
                posTo: this.state.end
            }
        })

        let gene_res = await axios.get("http://localhost:8080/geneview", {
            params: {
                posFrom: this.state.start,
                posTo: this.state.end
            }
        })

        await this.setState({fragments: frag_res.data, genes: gene_res.data});

        draw(this.state.fragments, this.state.genes)
        console.log("Done");

        

        //     axios.get("http://localhost:8080/fragview" , {
        //         params: {
        //             posFrom: this.state.start,
        //             posTo: this.state.end
        //         }
        //     })
        //     .then(res => {
        //         // console.log(res.data);
        //         this.setState({fragments: res.data});
        //     })
        //     .catch((err) => console.log(err))


        //     axios.get("http://localhost:8080/geneview", {
        //         params: {
        //             posFrom: this.state.start,
        //             posTo: this.state.end
        //         }
        //     })
        //     .then(res => {
        //         // console.log(res.data);
        //         this.setState({genes: res.data});
        //     })
        //     .catch((err) => console.log(err))

        // P
        // draw(this.state.fragments, this.state.genes)

    }

    render(){
        return(
            <div>
                <form onSubmit={this.update}>
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
                </form>
                <div className="canvas"/>
            </div>
        )
    }
}

export default ScoreGraph