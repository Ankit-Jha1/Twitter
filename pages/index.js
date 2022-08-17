import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/sidebar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter-Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen mx-auto" >
      {/* sidebar */}
      <Sidebar/>
      {/* Feed */}
      <Feed/>

      </main>
      
    </div>
  )
}
