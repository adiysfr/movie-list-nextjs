import React from 'react'
import { Row, Col, Skeleton } from 'antd';

const SkeletonComponent = () => {
  return (
    <Row gutter={16}>
      <Col xs={{span:12}} sm={{span:6}} md={{span:4}}  style={{marginBottom: "1rem"}}>
        <Skeleton.Image active/>
        <Skeleton active/>
      </Col>
      <Col xs={{span:12}} sm={{span:6}} md={{span:4}}  style={{marginBottom: "1rem"}}>
        <Skeleton.Image active/>
        <Skeleton active/>
      </Col>
      <Col xs={{span:12}} sm={{span:6}} md={{span:4}}  style={{marginBottom: "1rem"}}>
        <Skeleton.Image active/>
        <Skeleton active/>
      </Col>
      <Col xs={{span:12}} sm={{span:6}} md={{span:4}}  style={{marginBottom: "1rem"}}>
        <Skeleton.Image active/>
        <Skeleton active/>
      </Col>
      <Col xs={{span:12}} sm={{span:6}} md={{span:4}}  style={{marginBottom: "1rem"}}>
        <Skeleton.Image active/>
        <Skeleton active/>
      </Col>
      <Col xs={{span:12}} sm={{span:6}} md={{span:4}}  style={{marginBottom: "1rem"}}>
        <Skeleton.Image active/>
        <Skeleton active/>
      </Col>
    </Row>
  )
}

export default SkeletonComponent