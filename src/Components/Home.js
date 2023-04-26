import React from 'react'
import { Col, Row } from 'antd';
import D1 from '../Images/D1.jpg';
import D2 from '../Images/D2.jpg';
import cardi from '../Images/cardi.jpg';
function Home() {
  return (
    <>
        <div>
        <h2 className='home_header'>WHO ARE YOU SHOPPING FOR?</h2>
        </div>
        <Row>
            <Col xs={{span: 11,offset: 1,}} lg={{span: 9,offset: 2}}>
                <img className='banner' src={D1} alt='d1/jpg' /> 
            </Col>
            <Col xs={{span: 11,offset: 1,}} lg={{span: 9,offset: 2,}}>
                <img className='banner' src={D2} alt='d2/jpg' />
            </Col>
        </Row>
        <div>
        <h2 className='home_header'>CARDI B X REEBOK</h2>
        </div>
        <Row>
            <Col span={24}><img className='banner' src={cardi} alt='cardi/jpg' /></Col>
        </Row>
    </>
  )
}

export default Home
