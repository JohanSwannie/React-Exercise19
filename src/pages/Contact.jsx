import { useState } from "react";

function Contact() {
  const [message, SetMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    SetMessage(
      "Thanks for contacting us. We will respond to you as soon as possible"
    );
  };
  return (
    <div className="grid justify-center content-center items-center text-center text-[#23286c] font-bold bg-[#b6b8d4] w-screen max-h-screen">
      <p className="mt-5 mb-5 text-3xl">Contact Us</p>
      <form action="#" onSubmit={handleSubmit} className="grid w-96 m-auto">
        <label htmlFor="fullname" className="mb-2">
          Full Name
        </label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          required
          className="mb-2"
        />
        <label htmlFor="email" className="mb-2">
          Email
        </label>
        <input type="email" name="email" id="email" required className="mb-2" />
        <label htmlFor="message" className="mb-2">
          Send us a message
        </label>
        <textarea
          name="message"
          id="message"
          cols="15"
          rows="5"
          className="mb-2"
        ></textarea>
        <input
          type="submit"
          className="border-2 border-white w-20 p-2 m-auto bg-stone-300"
        />
      </form>
      <h4 class="mt-16 text-center m-auto">{message}</h4>
    </div>
  );
}

export default Contact;
