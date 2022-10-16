import {
  FormCheck,
  Feedback,
  feedbackToolTip,
  Badge,
  Alert,
  Button,
  Col,
  FloatingLabel,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useState } from "react";

const Lesson_7 = () => {
  const [styleRed] = useState({
    color: "red",
    opacity: "0.4",
  });
  const [styleGreen] = useState({ color: "green" });
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [range, setRange] = useState(10);
  const [active, setActive] = useState(true);

  const renderForm = () => {
    return (
      <>
        
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


        {/* <FloatingLabel controlId="floatingSelect" label="Lütfen bir il seçiniz">
          <Form.Select aria-label="Floating label select example">
            <option>...</option>
            <option value="1">İzmir</option>
            <option value="2">Ankara</option>
            <option value="3">İstanbul</option>
          </Form.Select>
        </FloatingLabel> */}

        {/* <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel> */}

        {/* <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
          <Form.Control
            isValid
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <br />
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Default
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <br />
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
          <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup> */}

        {/* {JSON.stringify(active)}
        <br/>
         <Form.Label>{range}</Form.Label>
        <Form.Range disabled={active ? true : false} onChange={(e) => setRange(e.target.value)} value={range} />
        <Button onClick={()=>setActive(!active)}>Active</Button> */}

        {/* <Form>
          <Form.Check
            style={!show1 ? styleRed : styleGreen}
            onClick={() => setShow1(!show1)}
            type="switch"
            id="html"
            label="HTML"
          />
          <Form.Check
            style={!show2 ? styleRed : styleGreen}
            onClick={() => setShow2(!show2)}
            type="switch"
            label="CSS"
            id="css"
          />
          <Form.Check
            style={!show3 ? styleRed : styleGreen}
            onClick={() => setShow3(!show3)}
            type="switch"
            label="JAVASCRIPT"
            id="js"
          />
          <Form.Check
            style={!show4 ? styleRed : styleGreen}
            onClick={(e) => {
              if (e.target.id === "react") {
                setShow4(!show4);
              }
            }}
            type="switch"
            label="REACT.JS"
            id="react"
          />
        </Form> */}

        {/* <Form>
        <Form.Check
            type="radio"
            label="İstanbul"
            id="radio1"
            name="radio"
            disabled
          />
          <Form.Check
            type="radio"
            label="Ankara"
            id="radio2"
            name="radio"
           
          />
          <Form.Check
            type="radio"
            label="İzmir"
            id="radio3"
            name="radio"

          />
    </Form> */}

        {/* <Form.Select
          onChange={(e) => {
            setText(e.target.value)
          }}
          isValid
          size="lg"
          aria-label="Default select example"
        >
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select> */}

        {/* <Form.Label htmlFor="inputPassword5">Password</Form.Label>
        <Form.Control
          type="password"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
        />
        <Form.Text id="passwordHelpBlock" muted>
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </Form.Text> */}

        {/* {state}
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label column>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" disabled />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control isInvalid={state===""?true:false}
              
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          {(state.includes("@") || state.includes(""))?"":<Alert variant="danger">Yanlış</Alert>}
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form> */}

        {/* <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control size="sm" as="textarea" rows={3} />
          </Form.Group>
        </Form> */}

        {/* <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Default file input example</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Multiple files input example</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>
        <Form.Group controlId="formFileDisabled" className="mb-3">
          <Form.Label>Disabled file input example</Form.Label>
          <Form.Control type="file" disabled />
        </Form.Group>
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Small file input example</Form.Label>
          <Form.Control isValid type="file" size="sm" />
        </Form.Group>
        <Form.Group controlId="formFileLg" className="mb-3">
          <Form.Label>Large file input example</Form.Label>
          <Form.Control isInvalid type="file" size="lg" />
        </Form.Group> */}

        {/* <div className="d-flex flex-row gap-3">
          <Form.Control isValid
            className="w-25 h-50"
            onChange={(e) => {
              console.log(e.target.value);
              setColor(e.target.value);
            }}
            type="color"
            id="exampleColorInput"
            defaultValue="#563d7c"
            title="Choose your color"
          />
          <Button
            style={{
              backgroundColor: `${color}`,
              width: "300px",
              height: "100px",
            }}
          >
            {color}
          </Button>
        </div> */}

        {/* <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select> */}

        {/* <Form.Select size="lg">
          <option>Large select</option>
        </Form.Select>
        <br />
        <Form.Select>
          <option>Default select</option>
        </Form.Select>
        <br />
        <Form.Select size="sm">
          <option>Small select</option>
        </Form.Select> */}

        {/* {["checkbox", "radio"].map((type) => (
          <div key={`default-${type}`} className="mb-3">
            <Form.Check
              type={type}
              id={`default-${type}`}
              label={`default ${type}`}
            />

            <Form.Check
              disabled
              type={type}
              label={`disabled ${type}`}
              id={`disabled-default-${type}`}
            />
          </div>
        ))}

        <Form>
          <Form.Check
            
            isInvalid
            type="switch"
            id="custom-switch"
            label="Check this switch"
          />
          <Form.Check
            isValid
            inline
            disabled
            type="switch"
            label="disabled switch"
            id="disabled-custom-switch"
          />
        </Form>
        <Form.Label>Range</Form.Label>
        <Form.Range value={30} />

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
        </InputGroup>

        <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">
            https://example.com/users/
          </InputGroup.Text>
          <FormControl id="basic-url" aria-describedby="basic-addon3" />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <FormControl aria-label="Amount (to the nearest dollar)" />
          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>

        <InputGroup>
          <InputGroup.Text>With textarea</InputGroup.Text>
          <FormControl as="textarea" aria-label="With textarea" />
        </InputGroup>

        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
          <FormControl
            isValid
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <br />
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Default
          </InputGroup.Text>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <br />
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
          <FormControl
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup> */}

        {/* <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel> */}

        {/* <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form> */}
      </>
    );
  };
  return <>{renderForm()}</>;
};
export default Lesson_7;
