import {
  Accordion,
  Alert,
  Badge,
  Breadcrumb,
  Button,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { useState } from "react";

const Lesson_1 = () => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("Genç");

  const radios = [
    { name: "0-30", value: "Genç" },
    { name: "31-60", value: "Orta Yaşlı" },
    { name: "61-90", value: "Yaşlı" },
  ];

  const [show, setShow] = useState(true);
  const [isActiveAccordion, setIsActiveAccordion] = useState("kisisel");
  const [data, setData] = useState({
    kisisel: {
      text: "Kişisel Bilgiler Metni",
      content: `
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
            `,
    },
    ogrenim: {
      text: "Öğrenim Bilgileri Metni",
      content: `
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
            `,
    },
  });
  const renderAlert = () => {
    return (
      <>
        {[
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
        ].map((variant) => (
          <Alert
            key={variant}
            variant={variant}
            show={show}
            closeLabel="Close alert2132"
            dismissible={true}
            closeVariant="white"
            onClose={() => {
              alert("Kapatma Butonuna Basıldı");
              setShow(false);
            }}
          >
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            This is a {variant} alert—check it out!
            <Alert.Link href="https://www.google.com.tr" target="_blank">
              Bu Linke Tıkla
            </Alert.Link>
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
          </Alert>
        ))}
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          Alert Switch
        </button>
      </>
    );
  };
  const renderAccordion = () => {
    return (
      <Accordion defaultActiveKey={isActiveAccordion} flush>
        {Object.keys(data).map((item) => {
          return (
            <Accordion.Item eventKey={item}>
              <Accordion.Header
                onClick={() => {
                  setIsActiveAccordion(item);
                }}
              >
                {data[item].text.toUpperCase()}
              </Accordion.Header>
              <Accordion.Body>{data[item].content}</Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    );
  };

  const renderBagde = () => {
    return (
      <div>
        <Badge bg="primary">1</Badge> <Badge bg="secondary">2</Badge>{" "}
        <Badge pill bg="success">
          3
        </Badge>{" "}
        <Badge bg="danger">4</Badge>{" "}
        <Badge bg="warning" text="dark">
          5
        </Badge>{" "}
        <Badge bg="info">6</Badge>{" "}
        <Badge bg="light" text="success">
          7
        </Badge>{" "}
        <Badge bg="dark" text="danger">
          8
        </Badge>
      </div>
    );
  };

  const renderBreadcrumbs = () => {
    return (
      <Breadcrumb label="test">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item title="User2" href="/user">
          User
        </Breadcrumb.Item>
        <Breadcrumb.Item active={false} href="/user/detail">
          User Detail
        </Breadcrumb.Item>
        <Breadcrumb.Item>Summary</Breadcrumb.Item>
      </Breadcrumb>
    );
  };

  const renderButtons = () => {
    return (
      <>
        <Button variant="primary" disabled>
          Primary
        </Button>{" "}
        <Button
          variant="secondary"
          onClick={() => {
            alert("Secondary !");
          }}
        >
          Secondary
        </Button>{" "}
        <Button variant="success">Success</Button>{" "}
        <Button variant="warning">Warning</Button>{" "}
        <Button variant="danger">Danger</Button>{" "}
        <Button variant="info">Info</Button>{" "}
        <Button variant="light">Light</Button>{" "}
        <Button variant="dark">Dark</Button>{" "}
        <Button variant="link">Link</Button>
        <Button variant="outline-primary">Primary</Button>{" "}
        <Button variant="outline-secondary">Secondary</Button>{" "}
        <Button variant="outline-success">Success</Button>{" "}
        <Button variant="outline-warning">Warning</Button>{" "}
        <Button variant="outline-danger">Danger</Button>{" "}
        <Button variant="outline-info">Info</Button>{" "}
        <Button variant="outline-light">Light</Button>{" "}
        <Button variant="outline-dark">Dark</Button>
        <div className="mb-2">
          <Button variant="primary" size="lg">
            Large button
          </Button>{" "}
          <Button variant="secondary" size="lg">
            Large button
          </Button>
        </div>
        <div>
          <Button variant="primary" size="sm">
            Small button
          </Button>{" "}
          <Button variant="secondary" size="sm">
            Small button
          </Button>
        </div>
        <div className="d-grid gap-2">
          <Button variant="danger" size="lg" active>
            Block level button
          </Button>
        </div>
      </>
    );
  };
  const renderToggleButtons = () => {
    return (
      <>
        <ButtonGroup className="mb-2">
          <ToggleButton
            id="toggle-check"
            type="checkbox"
            variant="secondary"
            checked={checked}
            value="1"
            onChange={(e) => setChecked(e.currentTarget.checked)}
          >
            Checked
          </ToggleButton>
        </ButtonGroup>
        <ToggleButton
          className="mb-2"
          id="toggle-check"
          type="checkbox"
          variant="outline-primary"
          checked={checked}
          value="1"
          onChange={(e) => setChecked(e.currentTarget.checked)}
        >
          Checked
        </ToggleButton>
        <br />
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? "outline-success" : "outline-danger"}
              name="age"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </>
    );
  };
  return (
    <div>
      {/*  renderAlert()*/}
      {renderAccordion()}
      {/* renderBagde() */}

      {/*renderBreadcrumbs()*/}
      {/*renderButtons()*/}
      {/* renderToggleButtons() */}
    </div>
  );
};
export default Lesson_1;
