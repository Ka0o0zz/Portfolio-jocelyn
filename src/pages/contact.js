import { Header } from "@/components/Header";
import useAppContext from "@/useContext";
import { Alert } from "@mui/material";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { animation, setAnimation } = useAppContext();
  const [messageSend, setMessageSend] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const call = await fetch(
        "https://joselin-vargas.vercel.app/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
          }),
        }
      );
      const response = await call.json();
      if (response.ok) {
        reset();
        setMessageSend(true);

        setTimeout(() => {
          setMessageSend(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!animation) {
      setAnimation(true);
    }
  }, [animation, setAnimation]);

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

        <div className="Contact">
          <div className="Contact">
            <form onSubmit={handleSubmit(onSubmit)}>
              {messageSend && (
                <Alert severity="success">
                  This is a success alert — check it out!
                </Alert>
              )}
              <h2>Contact</h2>
              <label>
                Name*
                <input {...register("name", { required: true })} />
                {errors.name && (
                  <p className="error-input">The name is required</p>
                )}
              </label>
              <label>
                Last Name*
                <input {...register("lastName", { required: true })} />
                {errors.lastName && (
                  <p className="error-input">The last name is required</p>
                )}
              </label>
              <label>
                Email Address*
                <input
                  {...register("email", {
                    required: "The email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="error-input">{errors.email?.message}</p>
                )}
              </label>
              <label>
                Message*
                <textarea {...register("message", { required: true })} />
                {errors.message && (
                  <p className="error-input">The message is required</p>
                )}
              </label>

              <button>Send</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
