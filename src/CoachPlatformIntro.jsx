import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CoachPlatformIntro = () => {
  return (
    <Container>
      <Row>
        <Col md={8} >
          <h2 className="mb-2">What Sets Us Apart</h2>
          <p >
            Our commitment to excellence goes beyond the training ground. We foster a supportive community that inspires, motivates, and celebrates each athlete's journey.
          </p>
          <p>
            Join a community dedicated to pushing boundaries, achieving milestones, and creating lasting legacies.
          </p>
          <p>
            Ready to elevate your game? Choose excellence. Choose our coaching services.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default CoachPlatformIntro;
