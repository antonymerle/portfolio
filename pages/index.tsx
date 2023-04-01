import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import SideProjects from "@/components/SideProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MainProjects from "@/components/MainProjects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-slate-800 font-sans w-full">
      <Head>
        <title>Antony Merle | Fullstack web developer</title>
        <meta
          name="description"
          content="Antony Merle fullstack developer portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <main className="flex flex-col items-center justify-center w-full">
        <About />

        <section
          id="projects"
          className="h-max flex flex-col justify-start 
          xl:w-3/4 2xl:pr-32 2xl:pl-32 min-[1453px]:pl-12 xl:pl-0 xl:pr-0
          space-y-4 mb-24 pt-24 px-6  bg-slate-800 text-center text-slate-300 lg:text-left "
        >
          <div
            id="projects-container"
            className="flex flex-col items-start h-full w-full max-w-[900px]"
          >
            <div
              id="projects-header"
              className="w-full flex flex-row justify-center items-center lg:justify-start"
            >
              <h2 className="space-x-2 py-6 text-xl font-bold  lg:text-4xl">
                <span className="text-lg text-mint">02.</span>
                <span>Projects I built</span>
              </h2>
            </div>
            <MainProjects />
            <ul className="hidden">
              <li className="relative w-full h-full lg:opacity-100 lg:bg-none lg:grid lg:grid-cols-12 lg:grid-rows-6 lg:gap-2 lg:overflow-hidden">
                <div className="col-span-full row-span-full lg:transition-all lg:hover:scale-105 lg:hover:rounded-sm lg:duration-300 rounded-sm min-w-[200px] lg:opacity-100 lg:col-start-1 lg:col-end-8 lg:row-span-full lg:min-w-[600px] lg:z-10 "></div>
                <div className="absolute top-0 left-0 project-description lg:col-start-7 lg:col-end-13 lg:row-span-full lg:z-20"></div>
              </li>

              <li className="relative w-full h-full lg:opacity-100 lg:bg-none lg:grid lg:grid-cols-12 lg:grid-rows-6 lg:gap-2 lg:overflow-hidden">
                <div className="col-span-full row-span-full lg:transition-all lg:hover:scale-105 lg:hover:rounded-sm lg:duration-300 rounded-sm min-w-[200px] lg:opacity-100 lg:col-start-5 lg:col-end-13 lg:row-span-full  lg:min-w-[600px] lg:z-10 "></div>
                <div className="absolute top-0 left-0 project-description lg:col-start-1 lg:col-end-7 lg:row-span-full lg:z-20"></div>
              </li>

              <li className="relative w-full h-full lg:opacity-100 lg:bg-none lg:grid lg:grid-cols-12 lg:grid-rows-6 lg:gap-2 lg:overflow-hidden">
                <div className="col-span-full row-span-full lg:transition-all lg:hover:scale-105 lg:hover:rounded-sm lg:duration-300 rounded-sm min-w-[200px] lg:opacity-100 lg:col-start-1 lg:col-end-8 lg:row-span-full  lg:min-w-[600px] lg:z-10 "></div>
                <div className="absolute top-0 left-0 project-description lg:col-start-7 lg:col-end-13 lg:row-span-full lg:z-20"></div>
              </li>
            </ul>
          </div>
        </section>

        <section
          id="other-projects"
          className="w-full h-max flex flex-col items-center justify-center px-4 py-24 bg-slate-800"
        >
          <h2 className="space-x-2 py-6 text-xl font-bold  md:text-4xl  text-mint">
            Other significants projects
          </h2>
          <SideProjects />
        </section>

        <section
          id="contact"
          className="
          bg-gradient-to-r from-pink-400   to-orange-300 
          w-full h-screen flex flex-col items-center justify-start px-4"
        >
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
