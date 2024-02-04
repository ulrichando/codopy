import "../../styles/Content.css";

const Comp = () => {
  return (
    <div className="wrapper">
      <section className="slide-one">
        <div className="container">
          <div className="circle blue">
            <div className="mini-circle"></div>
          </div>
          <div className="">
            <div className="absolute top-90 left-80 ml-20  ">
              <h1 className=" text-7xl font-bold">Hello.</h1>
              <p>
                Welcome to my portfolio, <br /> explore and discover
              </p>
            </div>

            <div className="circle green">
              <div className="mini-circle"></div>
            </div>
          </div>
          <div className="circle red">
            <div className="mini-circle"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comp;
