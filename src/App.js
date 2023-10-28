import { useState } from "react";
import {
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  Container,
} from "react-bootstrap";

import NewsList from "./Components/NewsList";
import Preferences from "./Components/Preferences";
function App() {
  
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedSources, setSelectedSources] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);

  const handleCategoryClick = (category) => {
    console.log("Selected Category:", category);
    setCategory(category);
    setSearchTerm("");
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    const searchTerm = event.target.search.value;
    setCategory(""); 
    setSearchTerm(searchTerm); 
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/" className="fw-bold fs-4">
            News App
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              
            </Nav>

            <Form onSubmit={handleSearch} className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="me-2"
                name="search"
              />

              <Button variant="outline-primary" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
       

          <Col xs={12} md={12}>
          {/* <Preferences
              selectedSources={selectedSources}
              setSelectedSources={setSelectedSources}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedAuthors={selectedAuthors}
              setSelectedAuthors={setSelectedAuthors}
            /> */}
            <NewsList category={category} searchTerm={searchTerm}  
            // selectedSources={selectedSources}
            // selectedAuthors={selectedAuthors}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
