import styled from "styled-components";

function App() {
  return (
    <Container>
      <h1>Wiped</h1>
      <h2>Out</h2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default App;
