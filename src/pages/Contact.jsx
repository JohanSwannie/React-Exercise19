import { useState } from "react";
import UserMessage from "./UserMessage";

function Contact() {
  const [userMessage, SetUSerMessage] = useState("");
  const [contactComplete, setContactComplete] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const imessage = document.getElementById("message");
    SetUSerMessage(
      `Thank You for contacting us ${fullname.value}, We will respond to you as soon as possible`
    );
    setContactComplete(true);
    fullname.value = "";
    email.value = "";
    imessage.value = "";
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].disabled = true;
    }
    document.getElementById("message").disabled = true;
  };

  return (
    <div className="grid justify-center content-center items-center text-center text-[#23286c] font-bold bg-[#b6b8d4] w-screen max-h-screen">
      <p className="mt-1 mb-3 text-3xl">Contact Us</p>
      <form action="#" onSubmit={handleSubmit} className="grid w-96 m-auto">
        <label htmlFor="fullname" className="mb-2">
          Full Name
        </label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          required
          className="mb-2 border-2 border-blue-950"
        />
        <label htmlFor="email" className="mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="mb-2 border-2 border-blue-950"
        />
        <label htmlFor="message" className="mb-2">
          Send us a message
        </label>
        <textarea
          name="message"
          id="message"
          cols="15"
          rows="11"
          className="mb-2 border-2 border-blue-950"
        ></textarea>
        <input
          type="submit"
          className="w-20 p-2 m-auto bg-blue-950 text-white"
        />
      </form>
      {contactComplete && <UserMessage userMessage={userMessage} />}
    </div>
  );
}

export default Contact;
