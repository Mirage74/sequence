import React, { Component } from 'react'
import axios from 'axios'
import {Element} from "./satellit/elem2"
import { backendPath } from "../../config"
import { v4 as uuid } from 'uuid'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {AddSeq} from "./satellit/addseq"


class Seq extends Component {

  constructor(props) {
    super(props)
    this.reqDataCB = this.reqDataCB.bind(this)
    this.PlusMinusCB = this.PlusMinusCB.bind(this)
}

  state = {
    seqs: [],
    ext: false
  }


  newSeq = {
    a1_index : 15,
    a1_value : 100500,
    a2_index : 30,
    a2_value : 201000,
    n_index : 8
  }

  reqDataCB = () => {
    axios.get(backendPath + "get")
    .then(resp => {
      this.setState({ seqs: resp.data.seqs })
    })
  }

  PlusMinusCB = () => {
      this.setState({ ext: !this.state.ext })
  }


  addSeq = async (newSeq) => {
    let res = await axios.post(backendPath + 'create', newSeq)
      .catch(err => { console.log("error creating new newSeq : ", err) })
    return res.data
  }


  async componentDidMount() {

    axios.get(backendPath + "get")
      .then(resp => {
        //console.log("res: ", res.data.seqs)
        this.setState({ seqs: resp.data.seqs })
        // const { seqs } = this.state
        // let d = resp.data.seqs[0]._id
        //console.log(d)
        // axios.delete(backendPath + `remove/${d}`)
        // .then (res => {
        //   console.log(res.data)
        // })
      })


  //   const updatedSeq = {
  //     a1_index : 1,
  //     a1_value : 50000
  // }

  // const pathServer = backendPath + "update/6036cdbe8fb49215e8176fec"

  // axios.put(
  //     pathServer,
  //     updatedSeq
  // )
  // .then(res => {
      
  // })
  // .catch (err =>console.log(err))





    // const res = axios.get(backendPath + "get/6036cdbe8fb49215e8176fec")
    //   .then(res => {
    //     //console.log("res: ", res.data.seqs)
    //     this.setState({ seqs: res.data.seqs })
    //     console.log("res data : ", res.data)
    //   }

    //   )


    
    // let testCreate = await this.addSeq(this.newSeq)
    // console.log("testCreate : ", testCreate)

  }

  Send = async () => {
    const elem = (
      <div>
      </div>
    )
    this.setState({ menu: elem })
    const aNind = document.getElementById('aNind').value
    const aNval = document.getElementById('aNval').value
    const aKind = document.getElementById('aKind').value
    const aKval = document.getElementById('aKval').value
    const S = document.getElementById('S').value
    const obj = {
      a1_index: aNind, 
      a1_value: aNval, 
      a2_index: aKind, 
      a2_value: aKval, 
      n_index: S
    }
    this.addSeq(obj)
    await axios.get(backendPath + "get")
    .then(resp => {
      //console.log("res: ", res.data.seqs)
      this.setState({ seqs: resp.data.seqs })
      const { seqs } = this.state
      console.log(seqs)

    })
  }
  
  ShowMenu = async () => {
    const elem = (
      <div>
            <Form>
                <Form.Group>
                    <Form.Label>Введите an</Form.Label>
                    <Form.Control required id="aNind" placeholder="Ввод..." />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Введите значение an</Form.Label>
                    <Form.Control required id="aNval" placeholder="Ввод..." />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Введите ak</Form.Label>
                    <Form.Control required id="aKind" placeholder="Ввод..." />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Введите значение ak</Form.Label>
                    <Form.Control required id="aKval" placeholder="Ввод..." />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Введите n</Form.Label>
                    <Form.Control required id="S" placeholder="Ввод..." />
                </Form.Group>

                <Button variant="primary" type="button" onClick={(e) =>  this.Send()} >
                    Добавить
                </Button>
            </Form>
      </div>
    )
    this.setState({ menu: elem })
  }


  render() {
    const { seqs, menu } = this.state
    let forRender
    if (seqs) {
      for (let i = 0; i < seqs.length; i++) {
        seqs[i].num = i + 1
      }
    forRender = seqs.map(item =>
      <div key={uuid()}>
        <Element oneObj = {item} reqDataCB = {this.reqDataCB}/>
      </div>
    )
  }
  

    forRender = <>
      {forRender}
    </>


//<Button className="bg-primary"onClick={(e) => this.ShowMenu()}>Добавить новую прогрессию</Button>
//{menu}

    return (
      <>


        {forRender}
        <br />
        <AddSeq refreshCB = {this.reqDataCB} ext = {this.state.ext} PlusMinusCB = {this.PlusMinusCB}/>
      </>
    )




  }
}

export default Seq

