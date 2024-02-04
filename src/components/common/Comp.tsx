import "../../styles/Content.css";

const Comp = () => {
  return (
    <div className="wrapper relative flex">
      <section className="slide-one w-screen h-screen flex items-center justify-around">
        <div className="container">
          <div className="circle blue">
            <div className="mini-circle"></div>
          </div>
          <div className="flex">
            <div className="absolute left-10 top-1/2 transform -translate-y-1/2 ml-60">
              <div className="flex flex-col">
                <h1 className="text-8xl font-bold ">Hello.</h1>
                <p className="text-2sm mt-2">
                  Welcome to my portfolio, <br /> explore and discover
                </p>
              </div>
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
