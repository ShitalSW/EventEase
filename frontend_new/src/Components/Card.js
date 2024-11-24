import React from "react";
import "../Styles/Card.css";
import Image from "../Images/concert.jpg";

import { Card, Col, Row } from "react-bootstrap";
import { FaCalendarDay, FaCircle, FaClock } from "react-icons/fa";

const EventCard = () => {
  return (
    <Row className="mt-4">
      <Col
        xl={3}
        lg={4}
        md={6}
        sm={12}
        className="mix arts concert workshops volunteer sports health_Wellness"
      >
        <Card className="main-card">
          <div className="event-thumbnail">
            <a href="venue_event_detail_view.html" className="thumbnail-img">
              <Card.Img variant="top" src={Image} alt="Event" />
            </a>
            <span className="bookmark-icon" title="Bookmark"></span>
          </div>
          <Card.Body className="event-content">
            <Card.Title>
              <a href="venue_event_detail_view.html" className="event-title">
                A New Way Of Life
              </a>
            </Card.Title>
            <div className="duration-price-remaining">
              <span className="duration-price">AUD $100.00*</span>
              <span className="remaining"></span>
            </div>
          </Card.Body>
          <Card.Footer className="event-footer">
            <div className="event-timing">
              <div className="publish-date">
                <span>
                  <FaCalendarDay className="me-2" /> 15 Apr
                </span>
                <span className="dot">
                  <FaCircle />
                </span>
                <span>Fri, 3.45 PM</span>
              </div>
              <span className="publish-time">
                <FaClock className="me-2" /> 1h
              </span>
            </div>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};

export default EventCard;
