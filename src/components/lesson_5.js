import {
  Button,
  Col,
  Nav,
  OverlayTrigger,
  Popover,
  ProgressBar,
  Row,
  Spinner,
  Tab,
  Table,
  Tabs,
  Toast,
  ToastContainer,
  Tooltip,
} from "react-bootstrap";
import popover from "bootstrap/js/src/popover";
import { useState } from "react";

const Lesson_5 = () => {
  const [key, setKey] = useState("home");
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h1">I'm React.JS Developer</Popover.Header>
    </Popover>
  );
  const renderPopover = () => {
    return (
      <>
        <OverlayTrigger trigger="hover" placement="bottom" overlay={popover}>
          <Button variant="danger">Who am I?</Button>
        </OverlayTrigger>
      </>
    );
  };

  const renderProgress = () => {
    return (
      <>
        <ProgressBar now={70} label={`${70}%`} />
        {/* <ProgressBar variant="success" now={40} />
        <ProgressBar variant="info" now={20} />
        <ProgressBar variant="warning" now={60} />
        <ProgressBar variant="primary" now={60} />
        <ProgressBar variant="danger" now={80} />
        <ProgressBar striped variant="success" now={40} />
        <ProgressBar striped variant="info" now={20} />
        <ProgressBar striped variant="warning" now={60} />
        <ProgressBar striped variant="danger" now={80} animated /> */}
        {/* <ProgressBar>
          <ProgressBar striped variant="success" max={70} now={90} key={1} />
          <ProgressBar variant="warning" now={20} min={10} key={2} />
          <ProgressBar striped variant="danger" now={10} key={3} />
        </ProgressBar> */}
      </>
    );
  };

  const renderSpinner = () => {
    return (
      <>
        <Spinner animation="border" />
        <Spinner animation="grow" />
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="info" />
        <Spinner animation="border" variant="light" />
        <Spinner animation="border" variant="dark" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" />
        <Spinner animation="border" size="sm" />
        <Spinner animation="border" />
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" />
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span className="visually-hidden">Loading...</span>
        </Button>{" "}
        <Button variant="primary" disabled>
          <Spinner animation="grow" variant="success" />
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </>
    );
  };

  const renderTable = () => {
    return (
      <>
        <Table striped bordered hover size="sm" responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  };

  const renderTabs = () => {
    return (
      <>
        <Tabs
          variant="tabs"
          activeKey={key}
          transition={false}
          onSelect={(k) => setKey(k)}
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Home">
            tab 1
          </Tab>
          <Tab eventKey="profile" title="Profile">
            tab2
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            tab3
          </Tab>
        </Tabs>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane
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
                  eventKey="first"
                >
                  1
                </Tab.Pane>
                <Tab.Pane eventKey="second">2</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </>
    );
  };
  const renderTooltip = () => {
    const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        Simple tooltip
      </Tooltip>
    );
    return (
      <>
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Button variant="success">Hover me to see</Button>
        </OverlayTrigger>
        ,
      </>
    );
  };
  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);
  const renderToast = () => {
    return (
      <>
        <Row>
          <Col md={6} className="mb-2">
            <Button onClick={toggleShowA} className="mb-2">
              Toggle Toast <strong>with</strong> Animation
            </Button>
            <ToastContainer position="top-end">
              <Toast show={showA} onClose={toggleShowA} delay={3000} autohide>
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>
                  Woohoo, you're reading this text in a Toast!
                </Toast.Body>
              </Toast>
            </ToastContainer>
          </Col>
          <Col md={6} className="mb-2">
            <Button onClick={toggleShowB} className="mb-2">
              Toggle Toast <strong>without</strong> Animation
            </Button>
            <Toast onClose={toggleShowB} show={showB} animation={false}>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>
                Woohoo, you're reading this text in a Toast!
              </Toast.Body>
            </Toast>
          </Col>
        </Row>
        <ToastContainer position="bottom-end">
          <Toast>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small className="text-muted">just now</small>
            </Toast.Header>
            <Toast.Body>See? Just like this.</Toast.Body>
          </Toast>
          <Toast>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small className="text-muted">2 seconds ago</small>
            </Toast.Header>
            <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
          </Toast>
        </ToastContainer>
      </>
    );
  };
  return (
    <div>
      {/* {renderPopover()} */}
      {renderProgress()}
      {/*renderSpinner()*/}
      {/*renderTable()*/}
      {/*renderTabs()*/}
      {/*renderTooltip()*/}
      {/*{renderToast()} */}
    </div>
  );
};
export default Lesson_5;
