import { useState } from "react";
import { Badge, Button, Col, Container, Row, Stack } from "react-bootstrap";

const Lesson_6 = () => {
  const renderGrid = () => {
    return (
      <>
        <Badge bg="warning" className="rounded-circle">
          1
        </Badge>{" "}
        <Badge bg="success" className="rounded-circle">
          2
        </Badge>{" "}
        <Badge bg="danger" className="rounded-circle">
          3
        </Badge>{" "}
        <Badge bg="secondary" className="rounded-circle">
          4
        </Badge>{" "}
        <Badge bg="dark" className="rounded-circle">
          5
        </Badge>{" "}
        <Badge bg="primary" className="rounded-circle">
          6
        </Badge>
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
