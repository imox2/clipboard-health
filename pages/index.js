import Head from 'next/head'
import NavBar from "../components/navbar";
import Search from "../components/search";
import Jobs from "../components/jobs";
import Footer from "../components/footer";
import {useState} from 'react';

export default function Home() {
   const [searchText, setSearchText] = useState(null);
  return (
    <div className="w-full min-h-screen bg-gray-200">
      <Head>
        <title>Clipboard Health</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Search searchFor={setSearchText}/>
      <Jobs searchText={searchText}/>
      <Footer />
    </div>
  )
}
