import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useSeq } from './hooks/useSeq'

export const AddSeq = (params) => {
    // <Row>
    // <Col sm={{ offset: 2 }}>
    //     <input type="submit" value="Add song" className="btn btn-primary" onClick={handleSubmitCB} />
    //     </Col>
    // </Row>

    const { handleChange, handleSubmit, state } = useSeq();
    const { refreshCB } = params

    console.log (typeof (params.ext))
    let forRender
    if (!params.ext) {
        forRender = (<>
            <Row>
            
            <Col sm={{ span: 1, offset: 5 }} className="" >
            <h1><i onClick={e => params.PlusMinusCB()}  className="fas fa-plus" style={{ color: '#42e6f5' }}></i></h1>
                    </Col>
            
            </Row>
            </>)
            } else {
                forRender = (<>
                    <Row>
                        <Col sm={{ span: 1, offset: 1 }}>
                            <b>First a<sub></sub>:</b>
                        </Col>
                        <Col sm={{ span: 2, offset: 0 }}>
                            <div style={{ marginBottom: 5 }} className="input-group">
                                <input type="text" onChange={handleChange} name="a1_index" placeholder="Enter index" />
                            </div>
                        </Col>




                        <Col sm={{ span: 1, offset: 0 }}>
                            <b>Second a<sub></sub>:</b>
                        </Col>
                        <Col sm={{ span: 2, offset: 0 }}>
                            <div style={{ marginBottom: 5 }} className="input-group">
                                <input type="text" onChange={handleChange} name="a2_index" placeholder="Enter index" />
                            </div>
                        </Col>
                    </Row>


                    <Row>
                        <Col sm={{ span: 1, offset: 1 }}>
                            <b>First a<sub></sub>:</b>
                        </Col>
                        <Col sm={{ span: 2, offset: 0 }}>
                            <div style={{ marginBottom: 5 }} className="input-group">
                                <input type="text" onChange={handleChange} name="a1_value" placeholder="Enter value" />
                            </div>
                        </Col>



                        <Col sm={{ span: 1, offset: 0 }}>
                            <b>Second a:</b>
                        </Col>
                        <Col sm={{ span: 2, offset: 0 }}>
                            <div style={{ marginBottom: 5 }} className="input-group">
                                <input type="text" onChange={handleChange} name="a2_value" placeholder="Enter value" />
                            </div>
                        </Col>
                    </Row>


                    <Row>
                        <Col sm={{ span: 1, offset: 1 }}>
                            <b>n:</b>
                        </Col>
                        <Col sm={{ span: 2, offset: 0 }}>
                            <div style={{ marginBottom: 5 }} className="input-group">
                                <input type="text" onChange={handleChange} name="n_index" placeholder="Enter value" />
                            </div>
                        </Col>



                        <Col sm={{ span: 1, offset: 0 }}>
                            <Button type="submit" className="bg-primary" onClick={e => handleSubmit(state.newSeq, refreshCB)}>Create</Button>
                        </Col>
                    </Row>
                </>)
            }

    //console.log("state ", state.newSeq)








    return (<>

                {forRender}

            </>
    )

}




