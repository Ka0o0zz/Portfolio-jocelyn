/* eslint-disable react/no-unescaped-entities */
import { Header } from "@/components/Header";
import useAppContext from "@/useContext";
import Head from "next/head";
import { useEffect } from "react";

export default function About() {
  const { animation, setAnimation } = useAppContext();

  useEffect(() => {
    if (!animation) {
      setAnimation(true);
    }
  }, [animation, setAnimation]);
  return (
    <>
      <Head>
        <title>Joselin Vargas | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="Portfolio">
        <Header />

        <div className="about">
          <h2>About me</h2>

          <p>
            Hi! I'm Joselin Vargas, a passionate photographer with experience in
            capturing unique moments and creating stunning images. My
            specialties are portraits, product, object, food, animal and banner
            photos in studio.
          </p>
          <p>
            From a young age, I have had a keen interest in photography, and
            over the years I have developed my ability to capture special
            moments and make each image tell a story. I love working with people
            and creating portraits that showcase their unique personality and
            character. I also enjoy capturing the beauty of objects, products
            and food, finding the best light and composition to highlight their
            features.
          </p>
          <p>
            Currently, I am studying at EACC, and will soon be joining IvyTech
            to further hone my skills and knowledge in photography. I am always
            looking to learn and grow as a photographer, to offer my clients the
            best possible service.
          </p>
          <p>
            In my portfolio you will find some of my most recent work and
            examples of my style. I would love the opportunity to work with you
            and create images that make you feel emotions and leave you with a
            lasting memory, thanks for visiting my site!
          </p>
        </div>
      </main>
    </>
  );
}
