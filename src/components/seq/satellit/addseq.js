import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useSeq } from './hooks/useSeq'

export const AddSeq = () => {
    // <Row>
    // <Col sm={{ offset: 2 }}>
    //     <input type="submit" value="Add song" className="btn btn-primary" onClick={handleSubmitCB} />
    //     </Col>
    // </Row>

    const { handleChange, handleSubmit } = useSeq();


    const forRender = (<>
        <Row>
            <Col sm={{ span: 1, offset: 1 }}>
                <b>A1:</b>
            </Col>
            <Col sm={{ span: 2, offset: 0 }}>
                <div style={{ marginBottom: 5 }} className="input-group">
                    <input type="text" onChange={handleChange} name="A1" placeholder="A1" />
                </div>
            </Col>
            <Col sm={{ span: 1, offset: 0 }}>
                <button type="submit" onClick={handleSubmit}>Add</button>
            </Col>
        </Row>
    </>)





    return (<>
    
        {forRender}
        
        </>
    )

}




