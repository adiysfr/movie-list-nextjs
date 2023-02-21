import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;
const CardComponent = ({title, desc, imgUrl}) => {
  return (
    <Card
      hoverable
      cover={<img alt={title} src={imgUrl} />}
      style={{
        width: '100%',
      }}
    >
      <Meta title={title} description={desc} />
    </Card>
  )
}

export default CardComponent