import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';

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
      console.log('Пользователь зарегистрирован:', data);
      message.success('Пользователь успешно зарегистрирован!');

      navigate('/themes'); 
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
      message.error('Ошибка при регистрации. Попробуйте еще раз.');
    }
  };

  return (
    <div>
      <h1>Добро пожаловать!</h1>
      <Form onFinish={handleRegister}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Пожалуйста, введите имя пользователя!' }]}
        >
          <Input placeholder="Введите имя пользователя" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Зарегистрироваться
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default HomePage;
