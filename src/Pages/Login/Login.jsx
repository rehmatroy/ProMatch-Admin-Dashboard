import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import '../../App.css';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic here (auth API, Firebase, etc.)
    console.log('Login submitted');
  };

  return (
    <div className="login-section">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col md={6} lg={5}>
            <Card className="p-4 shadow">
              <h3 className="text-center mb-4" style={{ color: '#1C3D58' }}>Pro Match Login</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" required />
                </Form.Group>

                <div className="d-grid">
                  <Button type="submit" style={{ backgroundColor: '#F25C05', border: 'none' }}>
                    Login
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
