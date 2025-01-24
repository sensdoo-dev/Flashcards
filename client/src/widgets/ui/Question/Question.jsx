import React, { useState } from 'react';
import { Card, Radio, Space, Button, message } from 'antd';

export default function Question({ question }) {
  const [que, v1, v2, v3, v4] = question.question.split(',');
  const [selectedAnswer, setSelectedAnswer] = useState(null); 

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      message.warning('Пожалуйста, выберите ответ!'); 
      return;
    }

    const correctAnswer = question.answer; 
    if (selectedAnswer === +correctAnswer) {
      message.success('Правильно!'); 
    } else {
      message.error('Неправильно! Попробуйте еще раз.'); 
    }
  };

  return (
    <Card style={{ margin: '20px 0', padding: '20px' }}>
      <h3>{que}</h3>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Radio.Group
          onChange={(e) => setSelectedAnswer(e.target.value)}
          value={selectedAnswer}
        >
          <Radio value={1}>{v1}</Radio>
          <Radio value={2}>{v2}</Radio>
          <Radio value={3}>{v3}</Radio>
          <Radio value={4}>{v4}</Radio>
        </Radio.Group>
      </Space>
      <Button
        type="primary"
        onClick={handleSubmit}
        style={{ marginTop: '20px', width: '100%' }}
      >
        Проверить ответ
      </Button>
    </Card>
  );
}
