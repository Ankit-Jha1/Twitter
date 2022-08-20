import Head from "next/head";
import React from "react";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import NotificationPage from "../components/NotificationPage";
import Explore from "../components/Explore";

export default function Notifications({
  newsResults,
  randomUsersResults,
  techNews,
}) {
  return (
    <div>
      <Head>
        <title>Twitter-Explore</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen mx-auto">
        {/* sidebar */}
        <Sidebar />
        {/* Feed */}
        <Explore techNews={techNews.articles} />
        {/* Widgets */}
        <Widgets
          newsResults={newsResults.articles}
          randomUsersResults={randomUsersResults.results}
        />
      </main>
    </div>
  );
}

// API endpoint (without API key requirement)
// getServerSideProps is built in, now taking this as props in Home() above
const url =
  "https://saurav.tech/NewsAPI/top-headlines/category/business/in.json";

export async function getServerSideProps() {
  const newsResults = await fetch(url).then((res) => res.json());

  // "Who to follow" in Widgets section
  const urlForUsers =
    "https://randomuser.me/api/?results=30&inc=name,login,picture";
  const randomUsersResults = await fetch(urlForUsers).then((res) => res.json());

  const urlTechNews =
    "https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json";
  const techNews = await fetch(urlTechNews).then((res) => res.json());

  return {
    props: {
      newsResults,
      randomUsersResults,
      techNews,
    },
  };
}
