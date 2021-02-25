import React, { Component } from 'react'
import axios from 'axios'
import { backendPath } from "../config"
import { v4 as uuid } from 'uuid';

class Seq extends Component {

  state = {
    seqs: []
  }

  
  newSeq = {
    a1_index : 4,
    a1_value : 12,
    a2_index : 6,
    a2_value : 16,
    n_index : 8
  }


  addSeq = async (newSeq) => {
    let res = await axios.post(backendPath + 'create', newSeq)
        .catch(err => { console.log("error creating new newSeq : ", err) })
    return res.data
}

 
  componentDidMount() {
    const res = axios.get(backendPath + "get")
    .then (res => {
      //console.log("res: ", res.data.seqs)
      this.setState({seqs: res.data.seqs})
      
    }

    )
    
    
    //let testCreate = await this.addSeq(this.newSeq)
    //console.log("testCreate : ", testCreate)
   
  }



  render() {
    const {seqs} = this.state
    
    let forRender = seqs.map(item => 
      <div key = {uuid()}>
        a1_index : {item.a1_index}; a1_value : {item.a1_value} a2_index : {item.a2_index}; a2_value : {item.a2_value} n_index: {item.n_index}
      </div>
    )
    
    forRender = <>
      {forRender}
    </>

    return (
      <>
        {forRender}
      </>
    )




  }
}

export default Seq

