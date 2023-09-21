import HobbyCard from "./HobbyCategoryCard/HobbyCategoryCard";
import "./app.css";
import { Countdown } from "./exercises/react/countdown";
import { TodoApp } from "./exercises/react/todoApp";

export function App() {
  return (
    <div className="App">
      {/* <Countdown></Countdown> */}
      {/* <TodoApp /> */}
      <HobbyCard
        imageUrl="https://example.com/path-to-your-image.jpg"
        cutPx={30}
        backgroundColor="#f5f5f5"
        link="https://example.com/hobby-link"
        name="Photography"
      />
      {/* <button>button</button> */}
    </div>
  );
}
