import React,{useState} from 'react';
import { Form ,Button} from 'react-bootstrap';
import AddItem from '../AddItem/AddItem' 
import RemoveItem from '../RemoveItem/RemoveItem'
import './Styles/GetCount.css'



function GetCount({action}) {
    const [count, setCount] = useState("")
    const [next, setNext] = useState(false)
    return (
      
            <div className='mb-5 outer-div'>
                
               
                    <Form.Label htmlFor="itemCount" className='mt-4 itemCountLabel'>No: of items going to add:</Form.Label>
                    <Form.Control
                        type="number"
                        id="itemCount"
                        aria-describedby="passwordHelpBlock"
                        className='itemCount'
                        onChange={(e)=>{setCount(e.target.value) 
                            setNext(false)}}
                    />
                    <Button variant="primary" className='next-button' onClick={()=>setNext(true)}>Next</Button>
                    {action=="add"? count&& next?<AddItem count={count} />:"":count&&next?<RemoveItem count={count}/>:""}
                    
                    
                
            </div> 
        
    )
}

export default GetCount