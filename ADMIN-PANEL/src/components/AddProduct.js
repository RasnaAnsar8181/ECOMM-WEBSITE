
import React, { useState, useEffect } from 'react'
import './AddProduct.css';
import axios from 'axios';
import {grocery,stationery,veg,cleaning,dairy,kitchen} from './image';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';


function AddProduct() {
 debugger
  const [idno, setIdno] = useState(0)
  const [item, setItem] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const qty = 0
  const [items, setItems] = useState([])
  const [val, setVal] = useState([])
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(`http://localhost:3000/${location.state.value}`)
        
        setItems(res.data)
        
        switch (location.state.value) {
          case "grocery":
            setVal(grocery)
            break;
          case "kitchen":
            setVal(kitchen)
            break;
          case "stationery":
            setVal(stationery)
            break;
          case "veg":
            setVal(veg)
            break;
          case "cleaning":
            setVal(cleaning)
            break;
          case "dairy":
            setVal(dairy)
            break;

          default:
            break;
        }
        let newid = 0
        for (let item of items) {
          if (item.idno > newid) {
            newid = item.idno
          }
        }
        setIdno(newid + 1)

      } catch (error) {
        console.log(error)
      }
    }
    getData()

  }, [location, items,val]);


  async function saveInfo() {
    try {
      await axios.post(`http://localhost:3000/${location.state.value}`, { idno: idno, item: item, desc: desc, price: price, image: image, qty: qty });
      alert("Data successfully saved")
      clearData()
    } catch (error) {
      console.log(error);
    }
  }
  function clearData() {
    setIdno(idno + 1)
    setItem('')
    setDesc('')
    setPrice('')
    setImage('')
  }
  return (
    <>
      <div className='container'>
        <br /><br />
        <div>
          <h3>ADD Item Details</h3>
        </div>
        <hr className='headline' />
        <div className="content">
          <Form>
            <br />
            <Row className="m-2">
              <Form.Group as={Col} controlId="idno">
                <Form.Label><b>IDNO</b></Form.Label>
                <Form.Control
                  style={{ "borderBottom": "2px solid blue" }}
                  type="number"
                  placeholder={idno} />
              </Form.Group>

              <Form.Group as={Col} controlId="item">
                <Form.Label><b>ITEM</b></Form.Label>
                <Form.Control
                  style={{ "borderBottom": "2px solid blue" }}
                  type="text"
                  required
                  placeholder='Enter the item name'
                  value={item}
                  onChange={(e) => setItem(e.target.value)} />
              </Form.Group>
            </Row>

            <Row className="m-2">
              <Form.Group as={Col} controlId="desc">
                <Form.Label><b>DESCRIPTION</b></Form.Label>
                <Form.Control
                  style={{ "borderBottom": "2px solid blue" }}
                  type="text"
                  required
                  placeholder='Enter description about the item'
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)} />
              </Form.Group>
            </Row>

            <Row className="m-2">
              <Form.Group as={Col} controlId="price">
                <Form.Label><b>PRICE</b></Form.Label>
                <Form.Control
                  style={{ "borderBottom": "2px solid blue" }}
                  type="number"
                  required
                  placeholder='Enter the price'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)} />
              </Form.Group>

              <Form.Group as={Col} controlId="img">
                <Form.Label><b>IMAGE</b></Form.Label>
                <Form.Select value={image} onChange={(e) => setImage(e.target.value)}>
                  <option >-- Select an item --</option>
                    {val.map((element) => (
                          <option key={element} value={element}>
                            {element}
                          </option>
                    ))}               
                </Form.Select>

                {/* <Form.Control 
                  style={{ "borderBottom": "2px solid blue" }} 
                  type="text" 
                  required 
                  placeholder='Enter the image name' 
                  value={image} 
                  onChange={(e) => setImage(e.target.value)} /> */}


              </Form.Group>
            </Row>

            <div className='btndiv'>
              <Button className='itemsbtn' onClick={() => navigate('/Products')}>BACK</Button>
              <Button className='itemsbtn' onClick={saveInfo}>ADD</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default AddProduct