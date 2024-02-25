"use client";

import React, { useState, MouseEvent } from 'react'
import styles from "./page.module.scss";

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  
  const emailProverka = /^[a-zA-Z0-9._%+-]+@(gmail\.com|email\.com|outlook\.com)$/;

  const Sub = (e: MouseEvent ) => {
    e.preventDefault();
    if (password === repeatPassword){
      console.log('Нормис пароли совпадают');
        
    } else {
      console.log('Пароль не совпадает');
    }

    if (emailProverka.test(email)) {
      console.log('Нормис почта в порядке')
    }
    else {
      console.log('Не нормис почта')
    }

    console.log('email:', email)
    console.log('pass:', password)
    console.log('repPass:', repeatPassword)
  }


  return (
    <div className={styles.styleBlock}>
      <form className={styles.styleForm} >
        <p>Email</p>
        <input type='text' placeholder='Введите ваш email' required  minLength={5} onChange={(e) => setEmail(e.target.value)}/>
        <p>Password</p>
        <input type='password' placeholder='Введите ваш пароль'  required minLength={5} onChange={(e) => setPassword(e.target.value)}/>
        <p>Repeat password</p>
        <input type='password' placeholder='Повторите ваш пароль' required minLength={5} onChange={(e) => setRepeatPassword(e.target.value)}/>

        <button className={styles.styleButton} type='submit' onClick={Sub}>Зарегистрироваться</button>
      </form>
    </div>
  )
}

export default Registration
