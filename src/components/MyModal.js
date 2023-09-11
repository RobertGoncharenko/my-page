import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function MyModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email)
  const isValidTel = (tel) => /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(tel)

  const handleChangeEmail = e => {
    if (!isValidEmail(e.target.value)) {
      setError("Email is incorrect");
    }else{
      setError(null)
    }
    setEmail(e.target.value);
  };

  const handleChangeTel = e => {
    if (!isValidTel(e.target.value)) {
      setError("tel is incorrect")
    }else{
      setError(null)
    }
    
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email" 
                placeholder="email@mail.com"
                value={email}
                onChange={handleChangeEmail}
                autoFocus
              />

              {error && <h2 style={{color: 'red'}}>{error}</h2>}

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTel">
              <Form.Label>Номер телефона</Form.Label>
                <Form.Control 
                  type="tel" 
                  placeholder="Номер телефона" 
                  onChange={handleChangeTel}
                />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;