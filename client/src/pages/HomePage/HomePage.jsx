// src/pages/HomePage/HomePage.jsx
import React from 'react';
import { Form, Input, Button, message, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import './HomePage.module.css'; // Импортируем CSS файл

const HomePage = () => {
  const navigate = useNavigate();

  const handleRegister = async (values) => {
    const { username } = values;

    try {
      const response = await fetch('http://localhost:3000/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });

      if (!response.ok) {
        throw new Error('Ошибка при регистрации');
      }

      const data = await response.json();
      message.success('Пользователь успешно зарегистрирован!');
      navigate('/themes');
    } catch (error) {
      message.error('Ошибка при регистрации. Попробуйте еще раз.');
    }
  };

  return (
    <div className="home-container">
      <Card title="Регистрация" className="card">
        <Form onFinish={handleRegister}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Пожалуйста, введите имя пользователя!' }]}
          >
            <Input placeholder="Введите имя пользователя" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Зарегистрироваться
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default HomePage;
