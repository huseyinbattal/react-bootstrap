import { Button, Col, Container, Row, Stack, Form } from "react-bootstrap";
import { useState } from "react";
const Lesson_6 = () => {
  const [state, setState] = useState("");
  const [lock, setLock] = useState(false);
    const [text] = useState("Lock");
    const [text1]=useState("Unclock")

  const renderGrid = () => {
    return (
      <>
        {state}
        <Button size="sm" className="w-25"
                onClick={(e) => {
                    setLock(!lock)
                   
          }}
          variant={!lock ? "outline-success" : "outline-danger"}
        >
          {!lock?text:text1}
        </Button>
        <fieldset disabled={lock}>
          <Form validated
            onSubmit={(e) => {
              e.preventDefault();
              console.log(e);
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                }}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </fieldset>
      </>
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
