import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import { useSeq } from './hooks/useSeq'

export const Element = (params) => {
    let oneObj = params.oneObj
    const { solveHandle, onDeleteClick, state } = useSeq();
    const _id = oneObj && oneObj._id

    let forRender = oneObj && (
        <>
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
                        {state.res}
                    </Col>
                    <Col sm={{ span: 1, offset: 0 }} className="bg-secondary" >
                        <Button className="bg-primary" onClick={(e) => solveHandle(oneObj)}>SOLVE</Button>
                    </Col>
                    <Col sm={{ span: 1, offset: 2 }} className="text-right" >
                        <h4>
                            <i className="fas fa-times"
                                style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                                onClick={(e) => onDeleteClick(oneObj._id)}
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

        </>
    )


    return (
        <>
            {forRender}
        </>
    )

}




