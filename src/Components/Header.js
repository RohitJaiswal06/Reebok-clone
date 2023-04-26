import React from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';

const items = [
    {
      key: '1',
      label: 'Item 1',
    },
    {
      key: '2',
      label: 'Item 2',
    },
    {
      key: '3',
      label: 'Item 3',
    },
  ];

function Header() {
  return (
    <div className='nav-pos'>
      <div className='header'>
        <p className='coupan-code'>Signup & get 15% off on 1st purchase : Use Coupan <b>REEBOKFIRST15</b></p>
      </div>
      
      <Navbar bg="light" expand="lg" className='px-5'>
      <Container fluid>
        <Navbar.Brand href="#">Reebok-Clone</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
        <Dropdown
            menu={{
            items,
            }}
    >
            <Typography.Link>
            <Space className='nav-links'>
                MEN
                <DownOutlined />
            </Space>
            </Typography.Link>
        </Dropdown>
        <Dropdown
            menu={{
            items,
            }}
    >
            <Typography.Link>
            <Space className='nav-links'>
                WOMEN
                <DownOutlined />
            </Space>
            </Typography.Link>
        </Dropdown>
        <Dropdown
            menu={{
            items,
            }}
    >
            <Typography.Link>
            <Space className='nav-links'>
                KIDS
                <DownOutlined />
            </Space>
            </Typography.Link>
        </Dropdown>
        <Dropdown
            menu={{
            items,
            }}
    >
            <Typography.Link>
            <Space className='nav-links'>
                SALE
                <DownOutlined />
            </Space>
            </Typography.Link>
        </Dropdown>
          </Nav>
          <input type ="text" placeholder='search' className='search'></input>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  )
}

export default Header
