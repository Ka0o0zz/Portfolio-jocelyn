import { Header } from "@/components/Header";
import Head from "next/head";
import Link from "next/link";

export default function Portfolio() {
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

        <div className="Portfolio-container-categories">
          <div className="container-gallery">
            <div className="gallery">
              <div className="gallery-item">
                <Link href={"/portfolio/persons"}>
                  <img src="/person-1.jpg" alt="" />
                </Link>

                <div className="gallery-item-text">
                  <p>Persons</p>
                </div>
              </div>
              <div className="gallery-item">
                <Link href={"/portfolio/objects"}>
                  <img src="/object-1.jpg" alt="" />
                </Link>

                <div className="gallery-item-text">
                  <p>Objects</p>
                </div>
              </div>
              <div className="gallery-item">
                <Link href={"/portfolio/food"}>
                  <img src="/food-1.jpg" alt="" />
                </Link>

                <div className="gallery-item-text">
                  <p>Food</p>
                </div>
              </div>
              <div className="gallery-item">
                <Link href={"/portfolio/animals"}>
                  <img src="/animal-1.jpg" alt="" />
                </Link>

                <div className="gallery-item-text">
                  <p>Animals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}