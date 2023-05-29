import Header from "./components/Header";
import FollowersCards from "./components/FollowersCard";
import { followersData } from "./data";
import DailyOverview from "./components/DailyOverview";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <FollowersCards followers={followersData} />
        <DailyOverview />
      </div>
    </div>
  );
}

export default App;
