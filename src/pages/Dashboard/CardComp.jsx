import React from "react";
import { Row, Col, Card } from "reactstrap";

const CardComp = () => {
  return (
    <>
      <Card className="overflow-hidden text-white bg-primary border-0 credit-card-container mt-2 p-4">
        <Row>
          <Col>
            <div>
              <p className="font-weight-normal">Name</p>
              <p className="font-weight-bold">Peter</p>
            </div>
            <div className="pt-1 ">
              <p className="font-weight-normal">Card Number</p>
              <p>123 456 678</p>
            </div>
            <div className="pt-2 d-flex justify-content-between">
              <div>
                <p>Valid</p>
                <p>11/12</p>
              </div>
              <div>
                <p className="font-weight-normal">Valid</p>
                <p className="font-weight-bold">03/25</p>
              </div>
              <div>
                <p>CVV</p>
                <p>...</p>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default CardComp;
