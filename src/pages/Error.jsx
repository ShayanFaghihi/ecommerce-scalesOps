import React from "react";
import { useRouteError, Link } from "react-router-dom";
import Container from "../components/Container";

const ErrorPage = () => {
  const errorData = useRouteError();
  let title = "Error";
  let message = "Error in showing data";

  if (errorData.status === 404) {
    title = "Error 404";
    message = "No products found";
  }

  if (errorData.status === 500) {
    title = "Error 500";
    message = "Error in connecting to server";
  }
  return (
    <>
      <Container title={title}>
        <p>{message}</p>
        <Link to="./">Get Back To HomePage</Link>
      </Container>
    </>
  );
};

export default ErrorPage;
