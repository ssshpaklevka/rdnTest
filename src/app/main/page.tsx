'use client'

import React, {useState, useEffect} from 'react'
import styles from './page.module.scss'
import axios from 'axios'

  interface Product {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
  }


function Main() {

  const [data, setData] = useState<Product[]>([])

  useEffect(() => {
    axios({
      method:'GET',
      url:'https://fakestoreapi.com/products'
    }).then(res => {
      console.log(res.data)
      setData(res.data)
    }) 
  }, [])

  return (
    <div className={styles.styleMain}>

      {data.map((product)=> (
      <div className={styles.styleId} key={product.id}>
        <div className={styles.styleImg}><img src={product.image} alt='aye' width={'50%'}/></div>

        <p className={styles.styleTitle}>{product.title}</p>
        <p className={styles.styleDescr}>{product.description}</p>
        <p className={styles.stylePrice}>Цена: {product.price} сосисок</p>

      </div>
))}
        <a href='/registration'>Перейти на страницу регистрации на мой чудесный сайт</a>
    </div>
  )
}

export default Main
