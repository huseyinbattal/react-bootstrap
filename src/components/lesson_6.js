import { useState } from "react";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";

const Lesson_6 = () => {
    const [show,setShow]=useState(true)
    const renderGrid = () => {

    return (
      <>
       {show? <div class="alert alert-success alert-dismissible">
                <button onClick={() => {
                    setShow(false)
          }} class="btn-close" data-bs-dismiss="alert"></button>
          Blah blah blah.
        </div>:<Button variant="outline-success" onClick={()=>setShow(true)}>geri getir</Button>}
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
