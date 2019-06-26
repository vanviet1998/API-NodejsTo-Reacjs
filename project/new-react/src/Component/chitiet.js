import React, { Component } from 'react'
import axios from 'axios'
export default class Chitiet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        axios.get('http://localhost:4000/findID/' + this.props.match.params.id.toString()).then((data) => {
            this.setState({
                data: data.data
            })

        })
    }  

    render() {
        return (
            <div>
                {
                    this.state.data.map((val,index)=>{
                        return(
                            <div key={index}>
                            <div className="col-md-8">
                                <div className="section-row sticky-container">
                                    <div  className="main-post">
                                        <h3>{val.tieude}</h3>
                                        <p>{val.noidung}</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <figure className="figure-img">
                                    <img className="img-fluid" src={val.anh} alt='asdsa' />
                                    <figcaption>{val.tieude}</figcaption>
                                </figure>
                            </div>
                            </div>
                        
                     
                        )
                    } )
                  
                }

            </div>
    );
    }
}
