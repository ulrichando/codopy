import "../../styles/Content.css";

const Comp = () => {
  return (
    <div>
      <section className="slide-one">
        <div className="container">
          <div className="circle blue">
            <div className="mini-circle"></div>
          </div>
          <p className="aboslute top-0 left-0">Hello.</p>
          <div className="circle green">
            <div className="mini-circle"></div>
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
