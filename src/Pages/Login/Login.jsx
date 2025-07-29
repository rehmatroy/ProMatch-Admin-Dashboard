import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useAuth } from '../../Context/AuthContext';
import Logo from '../../assets/img/logo2.png';
import '../../App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // get login function from context
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(email, password); // call login
    if (success) {
      navigate('/dashboard'); // redirect to dashboard
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="login-section">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col md={6} lg={5}>
            <Card className="p-4 shadow">
              <div className='text-center'>
                <img style={{ width: 130 }} src={Logo} alt="logo" />
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className='login-form-label'>Email Address</Form.Label>
                  <Form.Control
                    className='search-input'
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label className='login-form-label'>Password</Form.Label>
                  <Form.Control
                    className='search-input'
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button className='p-2 login-btn' type="submit" style={{ backgroundColor: '#F25C05', border: 'none' }}>
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
