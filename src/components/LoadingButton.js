import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function LoadingButton() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
      <Button
  size="sm"
      className={!isLoading ? "loading-btn w" : "loading-btn-1 w"}
      variant={!isLoading ? "success" : "success"}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? "Loading…" : "Click"}
    </Button>
  );
}

export default LoadingButton;
