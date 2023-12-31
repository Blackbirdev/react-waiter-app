import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router";
import Homepage from "./components/pages/Homepage";
import Table from "./components/pages/Table";
import NotFound from "./components/pages/NotFound";
import Header from "./components/views/Header";
import Footer from "./components/views/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTables } from "./redux/tablesRedux";

function App() {

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <div>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/table/:id" element={<Table />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
