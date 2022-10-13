import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Overlay,
  OverlayTrigger,
  Pagination,
  Placeholder,
  Tooltip,
} from "react-bootstrap";
import { useRef, useState } from "react";

const Lesson_4 = () => {
  const [active, setActive] = useState(1);
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        key={number}
        onClick={(e) => {
          console.log(e);
          setActive(e.target.innerText);
          //setActive(e.target.value)
        }}
        active={number === Number(active)}
      >
        {number}
      </Pagination.Item>
    );
  }

  const [show, setShow] = useState(false);
  const [overlayShow, setOverlayShow] = useState(false);
  const target = useRef(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const renderNavbar = () => {
    return (
      <>
        <Navbar bg="success" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="me-auto"
                onSelect={(ekey) => {
                  console.log("ekey", ekey);
                }}
                navbarScroll
                collapseOnSelect={true}
              >
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link eventKey="deneme" href="#link">
                  Link
                </Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Navbar bg="danger" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Navbar bg="light">
          <Container>
            <Navbar.Brand href="#home">Brand link</Navbar.Brand>
          </Container>
        </Navbar>
        <br />
        <Navbar bg="light">
          <Container>
            <Navbar.Brand>Brand text</Navbar.Brand>
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Container>
        </Navbar>
        <br />
        <br />
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              React Bootstrap
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    );
  };

  const renderOfCanvass = () => {
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch
        </Button>

        <Offcanvas
          keyboard={true}
          backdropClassName="test"
          backdrop={true}
          placement="end"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton={true}>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <div>
        React.JS Developer <br />
        <span>
          <a href="https://www.huseyinbattal.online/">
            www.huseyinbattal.online
          </a>
        </span>
      </div>
    </Tooltip>
  );
  const renderOverlay = () => {
    return (
      <>
        {/* <Button ref={target} onClick={() => setShow(!show)}>
          Click me!
        </Button>
        <Overlay
          target={target.current}
          show={show}
          placement="right"
        >
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              My Tooltip
            </Tooltip>
          )}
        </Overlay> */}
        {/* <Button
          variant="danger"
          ref={target}
          onClick={() => setOverlayShow(!overlayShow)}
        >
          Click me to see
        </Button>
        <Overlay target={target.current} show={overlayShow} placement="right">
          {({ placement, arrowProps, show: _show, popper, ...props }) => (
            <>
              {console.log(arrowProps)}
              <div
                {...props}
                style={{
                  position: "absolute",
                  backgroundColor: "rgba(255, 100, 100, 0.85)",
                  padding: "2px 10px",
                  color: "white",
                  borderRadius: 3,
                  ...props.style,
                }}
              >
                Simple tooltip
              </div>
            </>
          )}
        </Overlay> */}
        <OverlayTrigger
          trigger="hover"
          placement="top"
          delay={{ show: 250, hide: 200 }}
          overlay={renderTooltip}
        >
          <Button variant="outline-danger">Hüseyin BATTAL</Button>
        </OverlayTrigger>
      </>
    );
  };
  const renderPagination = () => {
    return (
      <>
        <div>
          <Pagination>{items}</Pagination>
          <br />

          {/* <Pagination size="lg">{items}</Pagination>
          <br />

          <Pagination size="sm">{items}</Pagination> */}
        </div>

        {/* <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item
            onClick={(e) => {
              console.log(e);
            }}
          >
            {10}
          </Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination> */}
      </>
    );
  };

  const renderPlaceholder = () => {
    return (
      <>
        {/* <Placeholder animation="glow">
          <Placeholder xs={6} />
        </Placeholder> */}
        <Placeholder  as="h1" animation="wave">
          <Placeholder lg={12} />
        </Placeholder>
        {/* <Placeholder.Button variant="primary" xs={6} />
        <Placeholder className="w-75" />{" "}
        <Placeholder style={{ width: "25%" }} />
        <Placeholder xs={12} bg="primary" />
        <Placeholder xs={12} bg="secondary" />
        <Placeholder xs={12} bg="success" />
        <Placeholder xs={12} bg="danger" />
        <Placeholder xs={12} bg="warning" />
        <Placeholder xs={12} bg="info" />
        <Placeholder xs={12} bg="light" />
        <Placeholder xs={12} bg="dark" />
        <Placeholder xs={12} size="lg" />
        <Placeholder xs={12} />
        <Placeholder xs={12} size="sm" />
        <Placeholder xs={12} size="xs" /> */}
      </>
    );
  };
  return (
    <div>
      {/* {renderNavbar()} */}
      {/* {renderOfCanvass()} */}
      {/* {renderOverlay()} */}

      {/* {renderPagination()} */}

      {renderPlaceholder()}
    </div>
  );
};
export default Lesson_4;
