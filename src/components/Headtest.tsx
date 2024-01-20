import icon1 from "../assets/Github.svg";
import icon2 from "../assets/xTwitter.svg";
import icon3 from "../assets/linkdln.svg";
import icon4 from "../assets/instagram.svg";
const Headtest = () => {
  return (
    <div className="fixed bottom-0 right-0 flex flex-row gap-4 p-8">
      <img src={icon1} alt="github" />
      <img src={icon2} alt="xTwitter" />
      <img src={icon3} alt="linkdln" />
      <img src={icon4} alt="instagram" />
    </div>
  );
};

export default Headtest;
