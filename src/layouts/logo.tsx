import image from "../assets/images/mylogo.svg";

function Logo() {
  return (
    <div className="relative">
      <img
        className="absolute  h-20 w-20 left-1/2 top-2 p-4 transform -translate-x-1/2"
        src={image}
        alt="logo"
      />
    </div>
  );
}

export default Logo;
