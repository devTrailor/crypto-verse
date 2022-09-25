import { Card, Col, Row } from 'antd'
import millify from 'millify';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi';

const News = ({ simplified }) => {
  const count = simplified ? 10 : 100;

  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);

  if (isFetching) return "Loading....."

  const [cryptos, setCryptos] = useState([])

  const [searchItem, setSearchItem] = useState("")


  useEffect(() => {
    const filterData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchItem.toLowerCase()));
    setCryptos(filterData)

  }, [])
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input placeholder='Search Cryptocurrency....' onChange={(e) => setSearchItem(e.target.value)} />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos && cryptos.map((currency) => {
          return (
            <Col xs={24} sm={12} lg={6} key={currency.id} className='crypto-card' >
              <Link to={`/crypto/${currency.id}`}>
                <Card title={`${currency.rank}. ${currency.name}`}
                  extra={<img className='crypto-image' src={currency.iconUrl} />}
                  hoverable
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap:{millify(currency.marketCap)}</p>
                  <p>Daily Change: {millify(currency.change)}%</p>

                </Card>
              </Link>
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default News