import HeroImage from "./assets/image-hero-mobile.png";
import Logo from "./assets/logo.svg";
import Audiophile from "./assets/client-audiophile.svg";
import Databiz from "./assets/client-databiz.svg";
import Maker from "./assets/client-maker.svg";
import Meet from "./assets/client-meet.svg";
import IconMenu from "./assets/icon-menu.svg";

function App() {
    return (
        <>
            <div className="mb-10">
                <header className="p-4 h-16 flex items-center justify-between">
                    <img src={Logo} alt="" />
                    <img src={IconMenu} alt="" />
                </header>
                <img src={HeroImage} alt="hero image" />
            </div>

            <div className="p-4 flex flex-col items-center justify-center mb-4">
                <h1 className="text-4xl font-bold mb-5">Make remote work</h1>
                <p className="text-slate-500 mb-4 text-center">
                    Get your team in sync, no matter your location. Streamline
                    processes, create team rituals, and watch productivity soar.
                </p>
                <button className="rounded-xl bg-slate-950 text-white font-bold p-2 w-32">
                    Learn more
                </button>
            </div>

            <div className="flex items-center justify-between p-2">
                <img className="w-16" src={Databiz} alt="" />
                <img className="w-16" src={Audiophile} alt="" />
                <img className="w-16" src={Meet} alt="" />
                <img className="w-16" src={Maker} alt="" />
            </div>
        </>
    );
}

export default App;
