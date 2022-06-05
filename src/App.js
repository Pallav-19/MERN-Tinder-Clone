import "./App.css";
import Header from "./Header";
import TinderCard from "./TinderCard";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />
      {/* tindercard */}
      <TinderCard />
      {/* swipeButtons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
