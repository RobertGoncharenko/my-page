import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ValidForm() {
  // const regEmail = / ^ [ \w - \.] + ([\w -] + \.)  + [\w -] {2,4} $ /g;
  // const regTel = / ^ \s * (?: \+ ? (\d {1,3})) ? ([-.(]) * (\d {3} ) [ - .)] * ) ? ((\d {3})[- . ] * (\d {2,4}) (?: [- . x] * (\d +)) ?) \s * $/gm;
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email)
  // function isValidEmail(email) {
  //   return /\S+@\S+\.\S+/.test(email)
  // }

  const isValidTel = (tel) => /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(tel)
  // function isValidTel(tel) {
  //   return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(tel)
  // }

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
    
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="email@mail.com" 
          value={email}  
          onChange={handleChangeEmail}
        />
        {error && <h2 style={{color: 'red'}}>{error}</h2>}

        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTel">
        <Form.Label>Номер телефона</Form.Label>
        <Form.Control 
          type="tel" 
          placeholder="Номер телефона" 
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ValidForm;
