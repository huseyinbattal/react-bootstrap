import { useState } from "react";
import { Badge, Button, Col, Container, Row, Stack } from "react-bootstrap";

const Lesson_6 = () => {
  const renderGrid = () => {
    return (
      <>
       <Stack gap={3}>
      <div className="bg-light border">First item</div>
      <div className="bg-light border">Second item</div>
      <div className="bg-light border">Third item</div>
    </Stack>
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
