import React from 'react';
import './App.css';
import { Container, Row, Col } from 'bootstrap-4-react';

const Round = (props) => {
    return (
        <div>{props.item}</div>
        // <Row className='round'>
        //     <Col col="sm">Round 1</Col>
        //     <Col col="sm"><input type='text' className='score1'></input></Col>
        //     <Col col="sm"><input type='text' className='score2'></input></Col>
        //     <Col col="sm"><input type='text' className='score3'></input></Col>
        //     <Col col="sm"><input type='text' className='score4'></input></Col>
        // </Row>
    );
};

export default Round;//export default chỉ export 1 