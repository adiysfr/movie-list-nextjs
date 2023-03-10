// Vendor
import { useDispatch, useSelector } from 'react-redux'
import React,{useState, useEffect, useCallback} from 'react'
import Head from 'next/head'
import { useDebouncedCallback } from 'use-debounce';
import Link from 'next/link'

import { getMovie } from '@/redux/slices/Movie';
import { Input, Row, Col, Pagination, Spin, Skeleton } from 'antd';
import CardComponent from '@/components/Card';
import SkeletonComponent from '@/components/Skeleton';

const Home = () => {
  const dispatch = useDispatch();
  const {data, loading} = useSelector((state)=> state.reducer.movie)
  const datas = data?.Search
  const [currentPage, setCurrentPage] = useState(1)
  const [keyword, setKeyword] = useState('action')
  const [isData, setIsData] = useState(true)
  const [errorMessage, setErrorMessage] = useState(true)
  const [offset, setOffset] = useState(0);

  let body = {
    key: keyword,
    page: currentPage
  }
  useEffect( () => {
    dispatch(getMovie(body))
  }, [dispatch])

  const handleChangePagin = async (page) => {
    setCurrentPage(page)
    let body = {
      key: keyword,
      page: page
    }
    try{
      let res = await dispatch(getMovie(body))
      setDatas(res.payload)
    }
      catch(err){
    }
  }
  const handleSearch = async (val) =>  {
    val === '' ? val = "action" : null
    let body = {
      key: val,
      page: currentPage
    }
    try{
      let res = await dispatch(getMovie(body))
      if(res.payload.Response === "True"){
        setIsData(true)
      }else{
        setIsData(false)
        setErrorMessage(res.payload.Error)
      }
    }
      catch(err){
      console.log(err)
    }
  }
  const debounced = useDebouncedCallback((value) => {
    handleSearch(value);
  }, 1000);
  
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spin spinning={loading}>
        <main className='container mx-auto' id="scrollableDiv">
          <Input 
            placeholder="Search Movie" 
            className='my-6'
            onChange={(e)=>debounced(e.target.value)} 
            style={{marginBottom: "2rem"}}
          />
          <Row gutter={16}>
            {datas?.map(item =>(
              <Col key={item?.imdbID} xs={{span:12}} sm={{span:6}} md={{span:4}}  style={{marginBottom: "1rem"}}>
                <Link href={`/detail/${item?.imdbID}`}>
                  <CardComponent title={item.Title} desc={item.Year} imgUrl={item.Poster !== "N/A" ? item.Poster : "https://character.digitellinc.com/assets/images/image_placeholder.jpg"} />
                </Link>
              </Col>
            ))}
          </Row>
          {isData ? (
            <Pagination       
              current={currentPage}
              total={data?.totalResults} 
              onChange={handleChangePagin}
              style={{background: "#e6e6e684", padding: "1rem", borderRadius: "20px"}}
              showSizeChanger={false}
            />
            ) : (
              <h1 className='text-xl font-extrabold text-[#eb5959]'>{errorMessage}</h1>
            )
          }
          {loading && <SkeletonComponent/>}
        </main>
      </Spin>
    </>
  )
}

export default Home