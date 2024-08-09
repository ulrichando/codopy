// import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import "../../styles/draggablescroll.css";
import classNames from "classnames";

const DragPage = () => {
  // Draggable scroll
  const [isDown, setIsDown] = useState(false); // Set isDown to false
  const [startX, setStartX] = useState(0); // Set startX to 0
  const [scrollLeftState, setScrollLeftState] = useState(null); // Set scrollLeftState to 0
  const [mouseMoved, setMouseMoved] = useState(0); // Set mouseMoved to false

  const itemsContainer = useRef(); // Select the ItemsContainer

  function handleMouseDown(e) {
    setIsDown(true);
    setStartX(e.pageX - itemsContainer.current.offsetLeft);
    setScrollLeftState(itemsContainer.current.scrollLeft);
    setStateMouseMoved(0);
  }

  function handleMouseMove(e) {
    if (!isDown) {
      return;
    }
  }
  return (
    <div className="MainContainer">
      <h1>Draggable</h1>

      <div
        className={classNames("ItemsContainer", {
          activeClass: isDown,
        })}
        ref={itemsContainer}
        // mouse events
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseup={() => setIsDown(false)}
        onMouseLeave={() => setIsDown(false)}
        onMouseMove={(e) => handleMouseMove(e)}
      >
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
        <div className="item">Item 30</div>
        <div className="item">Item 31</div>
        <div className="item">Item 32</div>
        <div className="item">Item 33</div>
        <div className="item">Item 34</div>
        <div className="item">Item 35</div>
        <div className="item">Item 36</div>
        <div className="item">Item 37</div>
        <div className="item">Item 38</div>
        <div className="item">Item 39</div>
        <div className="item">Item 40</div>
        <div className="item">Item 41</div>
        <div className="item">Item 42</div>
        <div className="item">Item 43</div>
        <div className="item">Item 44</div>
        <div className="item">Item 45</div>
        <div className="item">Item 46</div>
        <div className="item">Item 47</div>
        <div className="item">Item 48</div>
        <div className="item">Item 49</div>
        <div className="item">Item 50</div>
      </div>
    </div>
  );
};

export default DragPage;
