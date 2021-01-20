import Head from 'next/head'
import NavBar from "../components/navbar";
import Search from "../components/search";
import Jobs from "../components/jobs";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-200">
      <Head>
        <title>Clipboard Health</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Search />
      <Jobs />
      <Footer />
    </div>
  )
}
