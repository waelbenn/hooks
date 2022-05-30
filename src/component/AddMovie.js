import React from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import {useState} from 'react'

function AddMovie(props) {
    const [show, setShow] = useState(false);
  const [newMovie,setNewMovie]=useState({
    title:"",
    rating:"",
    description:"",
    poster:"",

  })
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  const handleChange=(e)=>setNewMovie({...newMovie,[e.target.name]:e.target.value})
  const handleSave=()=>{props.handleAddMovie(newMovie)
    handleClose()
  }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          ADD new movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>ADD new movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  onChange={handleChange}
                  placeholder="title"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>rating</Form.Label>
                <Form.Control
                  type="text"
                  name="rating"
                  onChange={handleChange}
                  placeholder="rating"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} name="description" onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Poster</Form.Label>
                <Form.Control
                  type="text"
                  name="posterURL"
                  onChange={handleChange}
                  placeholder="posterURL"
                  autoFocus
                />
              </Form.Group>
              
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 

export default AddMovie