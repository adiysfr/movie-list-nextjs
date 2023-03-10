import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import { getDetailMovie } from '@/redux/slices/Movie';
import { Col, Row, Spin, Card } from 'antd';

const { Meta } = Card;

const Detail = () => {
  const router = useRouter();
  const {id} = router.query

  const dispatch = useDispatch();
  const {data, loading} = useSelector((state) => state.reducer.movie);
  useEffect(() => {
    dispatch(getDetailMovie(id))
  }, [dispatch, router.isReady])
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Spin spinning={loading}>
          {data && (
            <Card
              style={{ width: "100%"  }}
              cover={<img alt="example" src={data?.Poster !== "N/A" ? data?.Poster : `https://static.thenounproject.com/png/3674277-200.png`} />}
            >
              <Meta title={data?.Title} description={`${data?.Plot} | ${data?.Year} | Genre: ${data?.Genre}`} />
              <p style={{marginTop: "20px"}}>Aktor : {data?.Actors}</p>
            </Card>
          )}
        </Spin>
      </main>
    </>
  )
}

export default Detail