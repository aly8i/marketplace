import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import react from 'react'
import { useEffect,useState } from 'react'
export default function Home() {
  const [message,setMessage] = useState("");
  const instance = axios.create({
    baseURL: 'https://server1-iota.vercel.app/api',
    timeout: 10000
  });
  useEffect(()=>{
    instance.get("/hello").then((res)=>{
      setMessage(res.data.message)
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <div >
      <Head>
        <title>Server 2</title>
        <meta name="description" content="Lebanese Digital Wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <h1>hi</h1>
        <h1>{message}</h1>
      </main>
    </div>
  )
}
