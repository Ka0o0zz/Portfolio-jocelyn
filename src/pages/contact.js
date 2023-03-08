import { Header } from "@/components/Header";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="Portfolio">
        <Header />

        <div className="Portfolio-container-categories">
          <h4 style={{ textAlign: "center" }}>Contact</h4>
          <div className="Contact">
            <form>
              <label>
                Name*
                <input />
              </label>
              <label>
                Last Name*
                <input />
              </label>
              <label>
                Email Address*
                <input />
              </label>
              <label>
                Message
                <textarea />
              </label>

              <button>Send</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
