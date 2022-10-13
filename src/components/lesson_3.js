import {
  Button,
  ButtonGroup,
  Dropdown,
  Image,
  ListGroup,
  Modal,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { useState } from "react";

const Lesson_3 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedKey, setSelectedKey] = useState("/home");

  const renderDropdown = () => {
    return (
      <>
        <Dropdown
          navbar={true}
          onToggle={(nextShow, meta) => {
            console.log("Nextshow", nextShow);
            console.log("Meta", meta);
          }}
          onSelect={(ekey, event) => {
            console.log(ekey, event);
          }}
          align="start"
          autoClose={true}
        >
          <Dropdown.Toggle variant="primary" size="sm" id="dropdown-basic">
            The Secret of Life
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              as="button"
              onClick={() => alert()}
              eventKey="1"
              href="#/action-1"
            >
              React.JS
            </Dropdown.Item>
            <Dropdown.Item eventKey="2" href="#/action-2">
              Angular
            </Dropdown.Item>

            <Dropdown.Item eventKey="3" href="#/action-3">
              Vue
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <br />
        <Dropdown as={ButtonGroup}>
          <Button variant="success">Split Button</Button>

          <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <Dropdown.Menu show>
          <Dropdown.Header>Dropdown header</Dropdown.Header>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        </Dropdown.Menu>
      </>
    );
  };

  const renderImage = () => {
    return (
      <>
        <Image
          thumbnail
          src="https://images.unsplash.com/photo-1653731415837-16907c4eb3c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        />

        <Image
          roundedCircle
          src="https://images.unsplash.com/photo-1653731415837-16907c4eb3c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        />

        <Image
          rounded
          src="https://images.unsplash.com/photo-1653731415837-16907c4eb3c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        />

        <Image
          fluid
          src="https://images.unsplash.com/photo-1653731415837-16907c4eb3c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        />
      </>
    );
  };
  const renderListGroup = () => {
    return (
      <>
        <ListGroup horizontal={"md"}>
          <ListGroup.Item action variant="primary">
            Primary
          </ListGroup.Item>
          <ListGroup.Item action variant="secondary">
            Secondary
          </ListGroup.Item>
          <ListGroup.Item action variant="success">
            Success
          </ListGroup.Item>
          <ListGroup.Item action variant="danger">
            Danger
          </ListGroup.Item>
          <ListGroup.Item action variant="warning">
            Warning
          </ListGroup.Item>
          <ListGroup.Item action variant="info">
            Info
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            Light
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            Dark
          </ListGroup.Item>
        </ListGroup>
      </>
    );
  };

  const renderModal = () => {
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal
          show={show}
          scrollable={true}
          onEnter={() => {
            console.log("onEnter");
          }}
          onEntered={() => {
            console.log("onEntered");
          }}
          onEntering={() => {
            console.log("onEnterinmg");
          }}
          onExit={() => {
            console.log("onExit");
          }}
          onEscapeKeyDown={() => {
            console.log("onescape");
          }}
          onExited={() => {
            console.log("onExited");
          }}
          onExiting={() => {
            console.log("onExiting");
          }}
          onShow={() => {
            console.log("onShow");
          }}
          onHide={handleClose}
          keyboard={false}
          backdrop="static"
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Woohoo, you're reading this text in a modal!
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal.Body>
        </Modal>
      </>
    );
  };

  const renderNav = () => {
    return (
      <>
        {/* <Nav
          fill
          variant="tabs"
          activeKey={selectedKey}
          onSelect={(sKey) => {
            setSelectedKey(sKey);
          }}
        >
          <Nav.Item>
            <Nav.Link  eventKey="/home" href="/home">
              Active
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link variant="pills" eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav> */}
        <br /> <br />
        <Nav
          justify
          defaultActiveKey="home"
          variant="pills"

          // onSelect={(key) => {
          //   alert(key);
          // }}
        >
          <Nav.Item>
            <Nav.Link eventKey="1">
              1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2" title="Item">
              2
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3">3</Nav.Link>
          </Nav.Item>
          <NavDropdown
            onSelect={(key) => {
              alert(key)
            }}
            
            title="Dropdown"
            id="nav-dropdown"
          >
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">
              Something else here
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </>
    );
  };
  return (
    <div>
      {/* renderDropdown() */}
      {/* renderImage() */}
      {/* renderListGroup() */}
      {/* renderModal() */}
      {renderNav()}
    </div>
  );
};
export default Lesson_3;
