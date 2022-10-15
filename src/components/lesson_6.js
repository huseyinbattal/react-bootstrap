import {
  Button,
  Col,
  Container,
  Row,
  Stack,
  Form,
    Input,
  Image
} from "react-bootstrap";
import { useState } from "react";
const Lesson_6 = () => {
  const [state, setState] = useState("");
  const [lock, setLock] = useState(false);
  const [text] = useState("Lock");
    const [text1] = useState("Unclock");
    const [read, setRead] = useState(true);
const [place,setPlace]=useState(false)
    const [a] = useState("Giriş yapmak için tıklayınız...");
    const [b] = "";

  const renderGrid = () => {
    return (
      <Form>
        {/* <Button
          size="sm"
          className="w-25"
          onClick={(e) => {
            setLock(!lock);
          }}
          variant={!lock ? "outline-danger" : "outline-success"}
        >
          {!lock ? text : text1}
        </Button>
        <fieldset disabled={lock} className="mx-auto">
          <Form
            className="border border-info bg-light rounded p-3 mx-auto my-1 w-50"
            validated
            onSubmit={(e) => {
              e.preventDefault();
              console.log(e);
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
                        <Form.Control
                            disabled={lock}
                            onClick={() => {
                                setRead(!read);
                                setPlace(!place)
                            }}
                readOnly={place?a:b}
                size="lg"
                as="textarea"
                rows={3}
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                }}
                type="email"
                placeholder={place?a:b}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label visuallyHidden={false}>Password</Form.Label>
              <Form.Control size="lg" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button
              onClick={() => setLock(true)}
              variant="primary"
              type="submit"
            >
              Submit
                    </Button>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue="email@example.com" />
        </Col>
      </Form.Group>
          </Form>
        </fieldset> */}
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Large file input example</Form.Label>
                <Form.Control value={state} onChange={(e) => {
                    setState(e.target.value);
                    console.log(e)
                }} type="file" size="lg" />
            </Form.Group>
            <Form.Control type="submit"/>
            <Image src={state} />
            <br/>
            {state}
      </Form>
    );
  };

  const renderStack = () => {
    return (
      <>
        <Stack direction="horizontal" gap={3}>
          <div className="bg-light border">First item</div>
          <div className="bg-light border">Second item</div>
          <div className="bg-light border">Third item</div>
        </Stack>

        <Stack gap={3}>
          <div className="bg-light border">First item</div>
          <div className="bg-light border">Second item</div>
          <div className="bg-light border">Third item</div>
        </Stack>
      </>
    );
  };
  return (
    <>
      {renderGrid()}
      {/* {renderStack()} */}
    </>
  );
};
export default Lesson_6;
