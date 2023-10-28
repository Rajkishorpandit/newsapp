import { useState } from "react";
import { Card, Col, Container, Row,Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import useNewsData from "../hooks/useNewsData";
import CustomPagination from "./CustomPagination";
import "../App.css";
import "react-datepicker/dist/react-datepicker.css";
import useBBCNewsData from "../hooks/useBBCNewsData ";

const NewsList = ({ category, searchTerm}) => {
  // const { category, searchTerm } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  // const { category, searchTerm } = props;
  
  
  const [selectedDate, setSelectedDate] = useState(null);
  
  const handleDateFilterChange = (date) => {
    setSelectedDate(date);
  };

  


  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  const { newsData, loading, error } = useNewsData( category, searchTerm);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const totalArticles = newsData.length;
  const totalPages = Math.ceil(totalArticles / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  // const currentArticles = newsData.slice(startIndex, endIndex);
  const currentArticles = newsData.filter((article) => {
    if (selectedDate) {
      const articleDate = new Date(article.publishedAt);
      const articleDateFormatted = articleDate.toDateString();
      const selectedDateFormatted = selectedDate.toDateString();
      return articleDateFormatted === selectedDateFormatted;
    }
    return true;
  });

  return (
    <Container>
    
     <div className="datepicker-container">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => handleDateFilterChange(date)}
          placeholderText="Select Date"
        />
        <Button
          className="date-filter-button"
          onClick={() => handleDateFilterChange(null)}
        >
          Clear Date Filter
        </Button>
      </div>

      <Row>
        {currentArticles?.map((article) => (
          <Col style={{ marginBottom: '20px' }} xs={12} md={6} lg={4} key={article.url}>
            <Card>
              {/* <Card.Img src={article.image} variant="top" /> */}
              <Card.Img src={article.urlToImage} variant="top" />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Card.Link href={article.url}>Read More</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </Container>
  );
};

export default NewsList;
