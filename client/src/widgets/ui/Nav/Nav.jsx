// src/widgets/ui/Nav/Nav.jsx
import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import { Typography } from 'antd';
import './Nav.css'; // Импортируем CSS файл

const { Header, Content } = Layout;
const { Title } = Typography;

export default function Nav() {
  return (
    <Layout>
      <Header className="header">
        <Title level={3} className="title">
          Мое приложение
        </Title>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className="menu">
          <Menu.Item key="1">
            <NavLink to="/">Главная</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/themes">Темы</NavLink>
          </Menu.Item>
        </Menu>
      </Header>
      <Content className="content">
        {/* Здесь будет отображаться содержимое дочерних маршрутов */}
        <Outlet />
      </Content>
    </Layout>
  );
}
