import React, { useContext, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { ProductsContext } from '../../Context/ProductsContext/ProductsContext';
function AddItem({ count }) {
    const { products, setProducts } = useContext(ProductsContext)
    const navigate=useNavigate()
    const [formData, setFormData] = useState({})
    const [tempData, setTempData] = useState({})
    // const {count}=parseInt(props.count)

    console.log(products);
    const mapArray = []
    for (let i = 0; i < count; i++) {
        mapArray.push(i)
    }



    const handleOnChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const submitData = () => {
        for (let i = 0; i < count; i++) {

            if (products[formData[i + "-code"]]) {
                products[formData[i + "-code"]].quantity = parseInt(products[formData[i + "-code"]].quantity) + parseInt(formData[i + "-quantity"])
            } else {

                products[formData[i + "-code"]] = { name: formData[i + "-name"], quantity: formData[i + "-quantity"] }
            }

        }
        console.log(products)
        
    }
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
                {mapArray.map((i) =>

                    <Row className='mt-4'>
                        <Col>
                            <Form.Control
                                type="number"
                                id="itemCount"
                                name={`${i}-code`}
                                aria-describedby="passwordHelpBlock"
                                className='add-item'
                                onChange={handleOnChange}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="text"
                                id="itemCount"
                                name={`${i}-name`}
                                aria-describedby="passwordHelpBlock"
                                className='add-item'
                                onChange={handleOnChange}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                id="itemCount"
                                name={`${i}-quantity`}
                                aria-describedby="passwordHelpBlock"
                                className='add-item'
                                onChange={handleOnChange}
                            />
                        </Col>

                    </Row>

                )}
            </Container>
            <Button variant="primary" className=' mb-5 next-button' onClick={submitData}>Save</Button>

        </div>
    )
}

export default AddItem