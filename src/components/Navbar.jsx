import  React  from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import MyModal from './MyModal';
// import { Row } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Navbar() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link>Search/sort user</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="active">Validation</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
      <Row >
        {/* <Col xs="auto"> </Col> */}
          <Nav.Item >
            <MyModal/>
          </Nav.Item>

      </Row>
      
    </Nav>
  );
}

export default Navbar;