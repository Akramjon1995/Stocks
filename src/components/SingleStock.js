import React from 'react';
import { Card } from 'react-bootstrap';
import './style.css'

const SingleStoke = ({stock}) => {
    return (
        <Card className="card me-4" style={{ width: '18rem', marginBottom: '16px' }}>
            <Card.Body>
                <Card.Title>{stock.company}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{stock.ticker}</Card.Subtitle>
                <Card.Text>
                    Last price: {stock.data.currentSharePrice}
                </Card.Text>
                <Card.Text>
                    Volume: {stock.data.tradingVolume}
                </Card.Text>
                <Card.Text>
                    Highest: {stock.data.highest}
                </Card.Text>
                <Card.Text>
                    Lowest: {stock.data.lowest}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};



export default SingleStoke;