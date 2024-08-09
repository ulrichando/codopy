import { useState, useRef, useEffect } from "react";
import "../../styles/draggablescroll.css";

const DragPage = () => {
  // Draggable scroll
  const [isDown, setIsDown] = useState(false); // Set isDown to false
  const [startY, setStartY] = useState(0); // Set startY to 0
  const [scrollTopState, setScrollTopState] = useState<number | null>(0); // Set scrollTopState to 0
  const [mouseMoved, setStateMouseMoved] = useState(0); // Set mouseMoved to false

  const itemsContainer = useRef<HTMLDivElement | null>(null); // Select the ItemsContainer

  function handleMouseDown(e: React.MouseEvent | React.TouchEvent) {
    setIsDown(true);
    if (itemsContainer.current) {
      if ("touches" in e) {
        setStartY(e.touches[0].pageY - itemsContainer.current.offsetTop);
      } else {
        setStartY(e.pageY - itemsContainer.current.offsetTop);
      }
      setScrollTopState(itemsContainer.current.scrollTop);
      setStateMouseMoved(0);
    }
  }

  function handleMouseMove(e: React.MouseEvent | React.TouchEvent) {
    if (!isDown || !itemsContainer.current) {
      return;
    }

    const currentMousePositionInsideContainer =
      "touches" in e
        ? e.touches[0].pageY - itemsContainer.current.offsetTop
        : e.pageY - itemsContainer.current.offsetTop;

    setStateMouseMoved(currentMousePositionInsideContainer - startY);
  }

  useEffect(() => {
    if (itemsContainer.current && scrollTopState !== null) {
      itemsContainer.current.scrollTop = scrollTopState - mouseMoved;
    }
  }, [mouseMoved, scrollTopState]);

  return (
    <div
      className="MainContainer"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={() => setIsDown(false)}
      onMouseLeave={() => setIsDown(false)}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={() => setIsDown(false)}
    >
      <div ref={itemsContainer} className="ItemsContainer">
        {/* Your content here */}
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
        <div className="item">Item 4</div>
        <div className="item">Item 5</div>
        <div className="item">Item 6</div>
        <div className="item">Item 7</div>
        <div className="item">Item 8</div>
        <div className="item">Item 9</div>
        <div className="item">Item 10</div>
        <div className="item">Item 11</div>
        <div className="item">Item 12</div>
        <div className="item">Item 13</div>
        <div className="item">Item 14</div>
        <div className="item">Item 15</div>
        <div className="item">Item 16</div>
        <div className="item">Item 17</div>
        <div className="item">Item 18</div>
        <div className="item">Item 19</div>
        <div className="item">Item 20</div>
        <div className="item">Item 21</div>
        <div className="item">Item 22</div>
        <div className="item">Item 23</div>
        <div className="item">Item 24</div>
        <div className="item">Item 25</div>
        <div className="item">Item 26</div>
        <div className="item">Item 27</div>
        <div className="item">Item 28</div>
        <div className="item">Item 29</div>
      </div>
    </div>
  );
};

export default DragPage;
