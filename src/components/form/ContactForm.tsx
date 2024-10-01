import React, { FormEvent, useState } from "react";
import Input from "../ui/input";
import Textarea from "../ui/textarea";
import SendButton from "../ui/SendButton";
import "../ui/imagesSize.scss";
import { X } from "lucide-react";
// importing images locally
import image1 from "../../assets/images/Arrow.png";
import image2 from "../../assets/images/contactpageimage.svg";
import image3 from "../../assets/images/contact.png";

const HorizontalImageBoxWithForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulating an API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
  };

  const images = [
    { src: image1, className: "image-class-1" },
    { src: image2, className: "image-class-2" },
    { src: image3, className: "image-class-3" },
  ];

  return (
    <div className="max-w-full mx-auto p-24 bg-gray-100 rounded-lg shadow-md overflow-x-auto">
      <div className="flex relative ">
        <X
          className="absolute inset-0 m-auto transform translate-x-[1300%] translate-y-[-220%]"
          style={{ top: "50%", left: "50%" }}
        />
      </div>
      <div className="flex gap-2 ">
        {images.map((image, index) => (
          <div key={index} className="w-50  flex-shrink-0 ">
            <img
              src={image.src}
              alt={`Placeholder ${index + 1}`}
              className={`object-cover rounded ${image.className}`}
            />
          </div>
        ))}
        <div className="w-72 flex-shrink-0 bg-white p-4 rounded shadow">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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

export default HorizontalImageBoxWithForm;
