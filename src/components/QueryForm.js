import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert, Table, Container, Row, Col, Spinner } from 'react-bootstrap';

const QueryForm = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResults([]);
    setLoading(true);
    setNoResults(false);

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/query`, { query });
      if (response.data.length === 0) {
        setNoResults(true);
      } else {
        setResults(response.data);
      }
    } catch (err) {
      setError('Failed to fetch results. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderTableHeaders = () => {
    if (results.length === 0) return null;

    const firstResult = results[0];
    const filteredKeys = Object.keys(firstResult).filter(key => !key.includes('_id'));
    return (
      <tr>
        {filteredKeys.map((key) => (
          <th key={key}>{key.replace(/_/g, ' ').toUpperCase()}</th>
        ))}
      </tr>
    );
  };

  const renderTableRows = () => {
    return results.map((result, index) => {
      const filteredValues = Object.keys(result).filter(key => !key.includes('_id')).map(key => result[key]);
      return (
        <tr key={index}>
          {filteredValues.map((value, idx) => (
            <td key={idx}>{value}</td>
          ))}
        </tr>
      );
    });
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8">
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formQuery">
              <Form.Label>Enter your query</Form.Label>
              <div className="d-flex">
                <Form.Control
                  type="text"
                  value={query}
                  onChange={handleQueryChange}
                  placeholder="e.g., Find me companies attending Oil & Gas related events"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleFormSubmit(e);
                    }
                  }}
                  className="me-2"
                />
                <Button variant="primary" type="submit" disabled={loading}>
                  {loading ? (
                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                  ) : (
                    'Submit'
                  )}
                </Button>
              </div>
            </Form.Group>
          </Form>
          {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
        </Col>
          <div className="mt-3 text-center">
            {loading ? (
              <Spinner animation="border" role="status"/>
            ) : (
              <>
                {noResults && <Alert variant="warning">No results found</Alert>}
                {results.length > 0 && (
                  <div className="table-responsive">
                    <Table striped bordered hover variant="dark">
                      <thead>
                        {renderTableHeaders()}
                      </thead>
                      <tbody>
                        {renderTableRows()}
                      </tbody>
                    </Table>
                  </div>
                )}
              </>
            )}
          </div>
      </Row>
    </Container>
  );
};

export default QueryForm;