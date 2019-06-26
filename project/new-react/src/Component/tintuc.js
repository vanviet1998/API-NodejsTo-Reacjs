import React, { Component } from 'react'
import { getData } from '../API/app'
import Container from './container'

export default class tintuc extends Component {
    constructor(props) {
        super(props)
        this.state = {
          data: []
        }
      }
    componentWillMount() {
        getData().then(data => {
          this.setState({
            data: data.data
          })
        
    
        }).catch(function (error) {
          console.log(error);
        });
      }
    render() {
        console.log('ádsad',this.state.data)
        return (
            <div>
            {
                this.state.data.map((val, index) => {
                  return (
                    <Container id={val._id} key={index} anh={val.anh} ngaydang={val.ngaydang} tieude={val.tieude} noidung={val.noidung}></Container>
                  )
                })
              }
              </div>
        )
    }
}
