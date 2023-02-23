import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidepanel from "./components/Sidepanel";
import Articles from "./components/Articles";
import { newsArticles } from "./components/Articles";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <section>
          <Hero />
          <Sidepanel />
        </section>
        <Articles articles={newsArticles} />
      </div>
    </div>
  );
}

export default App;
