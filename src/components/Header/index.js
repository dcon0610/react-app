import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


function Header() {
  return (
    <Navbar bg="secondary" variant="dark">
    <Form className="ms-5"  >
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    </Form>
    </Navbar>
  )
}
export default Header;