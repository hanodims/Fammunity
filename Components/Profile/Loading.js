import React from "react";
import { Container, Header, Content, Spinner } from "native-base";

const Loading = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Spinner color="black" />
      </Content>
    </Container>
  );
};
export default Loading;
