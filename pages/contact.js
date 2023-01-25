import React from "react";
import Head from 'next/head'

const contact = () => {
  return (
    <>
    <Head>
      <title>
        Contact Us - Elwersa
      </title>
    </Head>
    <div className="bg-gray-200 pt-[150px]">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-medium mb-4 text-center">
          Contact Us - Elwersa
        </h1>
        <p className="text-center mb-4">
          We'd love to hear from you! Whether you have a question about our
          website or a suggestion for a new feature, please don't hesitate to
          reach out.
        </p>
        <form className="bg-white p-6 rounded-lg mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" for="name">
              Name
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" for="email">
              Email
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" for="message">
              Message
            </label>
            <textarea
              className="border border-gray-400 p-2 w-full"
              id="message"
              name="message"
            ></textarea>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Submit
          </button>
        </form>
        <p className="text-center">
          You can also reach us at:{" "}
          <a href="mailto:info@elwersa.com">elwersa523@gmail.com.com</a> or{" "}
          <a href="tel:+201157133897">+201157133897</a>
        </p>
      </div>
    </div>
    </>
  );
};

export default contact;
