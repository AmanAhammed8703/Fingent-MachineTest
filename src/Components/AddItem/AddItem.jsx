import React, { useEffect } from 'react'
import { Form ,Button, Container, Row, Col} from 'react-bootstrap'
function AddItem({count}) {
    // const {count}=parseInt(props.count)
    console.log(count);
    const mapArray=[]
    for(let i=0;i<count;i++){
        mapArray.push(i)
    }
    
    console.log(mapArray)
  return ( 
    <div>
        
        <Container>
            <Row className='mt-5'>
                <Col>
                <Form.Label htmlFor="itemCount" className='itemCountLabel'>Product code:</Form.Label>
                </Col>
                <Col>
                <Form.Label htmlFor="itemCount" className='itemCountLabel'>Product Name:</Form.Label>
                </Col>
                <Col>
                <Form.Label htmlFor="itemCount" className='itemCountLabel'>Quantity:</Form.Label>
                </Col>
            </Row>
            {mapArray.map(()=>

                <Row className='mt-4'>
                <Col>
                    <Form.Control
                        type="number"
                        id="itemCount"
                        aria-describedby="passwordHelpBlock"
                        className='add-item'
                    />
                    </Col>
                <Col>
                    <Form.Control
                        type="text"
                        id="itemCount"
                        aria-describedby="passwordHelpBlock"
                        className='add-item'
                    />
                    </Col>
                <Col>
                    <Form.Control
                        type="number"
                        id="itemCount"
                        aria-describedby="passwordHelpBlock"
                        className='add-item'
                        />
                    </Col>
                    
                    </Row>
            
        )}
                </Container>
                    <Button variant="primary" className=' mb-5 next-button'>Next</Button>

    </div>
  )
}

export default AddItem