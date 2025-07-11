// import Button from 'react-bootstrap/Button'; 
// or
import { Button } from 'react-bootstrap';
import { Alert,Container ,Nav, Navbar,NavDropdown } from 'react-bootstrap';

export function Boot(params) {
    return(
        <>
        <h3>bootstrap</h3>
     {/* ---------------------- */}
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

     {/* ---------------------- */}


        
        <Alert variant="success" >enable bootstrap from main.jsx to see me</Alert>
        <Button>i am bootstrap</Button>
        <Button onClick={()=>{alert("bootstrap button ")}}>bootstrap Button</Button>
        <button onClick={()=>{alert("Simple button")}}>Simple button</button>

        </>
    )
}