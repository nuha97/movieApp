import React, {useState} from 'react';
import {Button , Form, Modal} from 'react-bootstrap'

const AddMovie = (props)=>
{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newMovie, setNewMovie]= useState({Title:"",Description:"",PosterUrl:"",Rate:0});

    const handleChange =(e)=>{
        setNewMovie({...newMovie,[e.target.name]:e.target.value})
    }
    const handleSubmit = ()=> {
        const {Title,Description,PosterUrl,Rate} = newMovie
        if(Title && Description && PosterUrl && Rate ){
            props.setNewMovie(newMovie)
            setNewMovie({Title:"",Description:"",PosterUrl:"",Rate:0})
            handleClose()
        }
        else
        {
            alert("please check again");
        }
    }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
         Add new Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Movie </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Control text="text" placeholder="Enter movie Title"name="Title" onChange={handleChange}/><br/>
              <Form.Control text="text" placeholder="Enter Poster URL" name="PosterUrl" className="inputArea" onChange={handleChange}/><br/>
              <Form.Control text="text" placeholder="Enter rate" name="Rate" className="inputArea" onChange={handleChange}/><br/>
              <Form.Control as="textarea" placeholder="Enter Description" name="Description" className="inputArea" onChange={handleChange}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save 
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default AddMovie;