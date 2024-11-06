import React, { FormEvent, useState, ChangeEvent } from "react";
import Input from "../ui/input";
import Textarea from "../ui/textarea";
import SendButton from "../ui/SendButton";
import "../ui/imagesSize.scss";

import image2 from "../../assets/images/contactpageimage.svg";
import image3 from "../../assets/images/contact.png";

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const contactData = { name, email, message };

    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        alert("Email sent successfully");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send email");
      }
    } catch (error) {
      if (error instanceof Error) {
        alert("Error: " + error.message);
      } else {
        alert("An unknown error occurred");
      }
    }

    setLoading(false);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const images = [
    { src: image2, className: "image-class-2" },
    { src: image3, className: "image-class-3" },
  ];

  return (
    <div className="max-w-full mx-auto p-28 bg-gray-100 rounded-lg shadow-md overflow-x-auto">
      <div className="flex relative "></div>
      <div className="flex gap-2 ">
        {images.map((image, index) => (
          <div key={index} className="w-50 pr-12 flex-shrink-0 ">
            <img
              src={image.src}
              alt={`Placeholder ${index + 1}`}
              className={`object-cover rounded ${image.className}`}
            />
          </div>
        ))}
        <div className="w-72 flex-shrink-0 bg-white bg-opacity-50 p-4 rounded shadow">
          <form onSubmit={handleSubmit} className="form space-y-4 ">
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <Textarea
              placeholder="Message"
              value={message}
              onChange={handleMessageChange}
              required
            />
            <SendButton type="submit" loading={loading}>
              Send
            </SendButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
