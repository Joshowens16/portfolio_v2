import React, { ChangeEvent, useState } from "react";

interface MessageType {
  name: string;
  email: string;
  message: string;
}

const Connect = () => {
  const [message, setMessage] = useState<MessageType>({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(" ");
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(" ");
    if (!message.name.includes(" ")) {
      setError("Please enter your first and last name");
      return;
    } else if (!message.email || !message.email.includes("@")) {
      setError("Invalid email address");
      return;
    } else if (!message.message.length) {
      setError("Please include a short message");
    }
  };
  return (
    <div className="flex flex-col bg-gray-100 h-screen w-[99.01vw] select-none">
      <h1 className="flex flex-col bg-gray-100 justify-self-center self-center text-5xl mt-6">
        Contact Me
      </h1>
      <div className="bg-gray-100 h-screen px-[70px] flex flex-wrap flex-col content-center justify-center w-[99.01vw] select-none">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="">Full Name</label>
          <input
            value={message.name}
            type="text"
            name="name"
            className="border-2 border-gptDark w-[200px] p-1 rounded-md outline-none focus:outline-gray-800 mb-2"
            onChange={handleChange}
          />
          <label htmlFor="">Your Email</label>
          <input
            value={message.email}
            type="email"
            name="email"
            className="w-[200px] p-1 rounded-md border-2 border-gptDark outline-none focus:outline-gray-800 mb-2"
            onChange={handleChange}
          />
          <label htmlFor="">Your Message</label>
          <textarea
            value={message.message}
            name="message"
            className="border-2 border-gptDark resize min-w-[700px] min-h-[200px] max-w-[700px] max-h-[300px] p-1 rounded-md outline-none focus:outline-gray-800"
            onChange={handleChange}
          />
          {!error ? "" : <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="group text-black transition duration-300 w-fit mt-6 focus:outline-gray-800"
          >
            Send &rarr;
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black mt-1"></span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Connect;
