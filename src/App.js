import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router";
import Homepage from "./components/pages/Homepage";
import Table from "./components/pages/Table";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div>
      <Container>
        <h1>Hello World</h1>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/table/:id" element={<Table />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
