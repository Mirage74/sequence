import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import { backendPath } from "../config"
import { v4 as uuid } from 'uuid';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import Alert from 'react-bootstrap/Alert'


class Elem extends Component {

  state = {
    res: "?" 
  }


  onDeleteClick = async (id) => {
    //await axios.delete(BACKEND_URL + `remove/${id}`)
    //this.props.getSongs()
  }


  componentDidMount() {



  }



  solveHandle = () => {
    const { oneObj } = this.props

    let aNnumb = oneObj.a1_index, aKnumb = oneObj.a2_index, aNval = oneObj.a1_value, aKval = oneObj.a2_value, Snum = oneObj.n_index
    let D = (aNval - aKval) / (aNnumb - aKnumb)
    let a1val = aNval - (aNnumb - 1) * D
    let aSval = a1val + D * (Snum - 1)
    let S = (a1val + aSval) / 2 * Snum
    let res = `a₁ = ${a1val}, D = ${D}, S(${Snum}) = ${S}, an = ${aSval}`

    this.setState({ res: aSval })
  }

  render() {
    const { oneObj } = this.props
    const { res } = this.state
    const _id = oneObj && oneObj._id
    console.log(oneObj)

    let forRender = oneObj && (
      <>
        <Alert className="bg-light">
          <Row style={{ width: "100%", marginLeft: "0px" }}>
            <Col sm={{ span: 1, offset: 0 }}>
              <h4><Badge variant="info">{oneObj.num}</Badge></h4>
            </Col>
            <Col sm={{ span: 1, offset: 0 }} className="bg-secondary">
              a<sub>{oneObj.a1_index}</sub> = {oneObj.a1_value}
            </Col>
            <Col sm={{ span: 1, offset: 0 }} className="bg-secondary">
              a<sub>{oneObj.a2_index}</sub> = {oneObj.a2_value}
            </Col>
            <Col sm={{ span: 1, offset: 0 }} className="bg-secondary" >
              n = {oneObj.n_index}
            </Col>
            <Col sm={{ span: 1, offset: 1 }} className="bg-secondary" >
              Result:
          </Col>
            <Col sm={{ span: 1, offset: 0 }} className="bg-secondary" >
              {res}
            </Col>
            <Col sm={{ span: 1, offset: 0 }} className="bg-secondary" >
              <Button className="bg-primary" onClick={(e) => this.solveHandle()}>SOLVE</Button>
            </Col>
            <Col sm={{ span: 1, offset: 2 }} className="text-right" >
              <h4>
                <i className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, { _id })}
                />
                <Link to={{
                  pathname: ``,
                  state: {
                  }
                }}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{ cursor: 'pointer', float: 'right', color: 'black', marginRight: '1rem' }}
                  />
                </Link>
              </h4>
            </Col>

          </Row>
        </Alert>
      </>
    )

    return (
      <>{forRender}</>
    )
  }
}

export default Elem

