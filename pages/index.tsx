import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <div id="logo">logo</div>{" "}
          <ol>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ol>
        </nav>
      </header>

      <main>
        <h1 className="text-3xl font-bold underline">
          Hi, my name is Antony Merle. I build websites and apps for today's
          web.
        </h1>
      </main>
      <section id="about">
        I work with javascript, nodejs and typescript. I also love Go and C#.
      </section>
      <section id="projects">
        Here are a few of the projects I worked on lately.
      </section>
      <section id="contact">Let's talk.</section>

      <footer>Antony Merle, {new Date().getFullYear()}</footer>
    </div>
  );
}
