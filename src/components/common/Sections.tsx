import "../../styles/sections.css";
import "../../styles/play.css";

const Sections = () => {
  return (
    <div className="wrapper">
      <div className="divisions">
        <section></section>
        <section></section>

        <section className="section-3">
          <div className="section-3-content absolute w-full h-full">
            <div className="flex justify-center items-center h-full w-full  ">
              <div className="menu w-40 h-40  rounded-full border-2 border-[#4f4c4c]"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sections;
