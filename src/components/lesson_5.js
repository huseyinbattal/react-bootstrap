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
        <ProgressBar now={80} label={`${80}%`} />
      </>
    );
  };

  const renderSpinner = () => {
    return (
      <>
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
        <Table striped bordered hover size="sm" responsive variant="dark">
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
        {/* <Tabs
          variant="tabs"
          activeKey={key}
          transition={true}
          onSelect={(k) => setKey(k)}
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Home">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima necessitatibus sapiente distinctio eius id tempora voluptatibus iure tempore illo dignissimos corporis consectetur aliquid, voluptate, omnis rerum eaque laboriosam cupiditate? Doloremque?
          </Tab>
          <Tab eventKey="profile" title="Profile">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi placeat iusto, harum iure ullam veniam ipsam. Minima nostrum id sint exercitationem, quos error provident est qui cumque nesciunt quia odit.
          </Tab>
          <Tab eventKey="contact" title="Contact">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sint. Officia repellat ullam repellendus corporis nobis qui quaerat odio, reprehenderit sunt consequuntur tempore, maxime impedit, ex tenetur itaque nihil alias?
          </Tab>
        </Tabs> */}

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={10}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores enim aspernatur libero officia facere repellendus sint optio fugiat ad doloremque debitis perspiciatis, sequi sunt error, molestias consectetur. Facere, quo ratione!
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor assumenda pariatur delectus, vero aperiam veritatis quasi ipsum dolore? Commodi quae quis adipisci fugiat, accusantium optio laudantium nostrum assumenda dolorem totam.</Tab.Pane>
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
      {/* {renderProgress()} */}
      {/* {renderSpinner()} */}
      {/* {renderTable()} */}
      {renderTabs()}
      {/*renderTooltip()*/}
      {/*{renderToast()} */}
    </div>
  );
};
export default Lesson_5;
