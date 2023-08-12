import { useState } from "react";
import CloseMenyIcon from "../assets/icon-close-menu.svg";
import IconArrowDown from "../assets/icon-arrow-down.svg";
import IconArrowUp from "../assets/icon-arrow-up.svg";
import { features } from "../data";

// eslint-disable-next-line react/prop-types
export default function Navigation({ isActiveNav, setIsActiveNav }) {
    const [showFeatures, setShowFeatures] = useState(false);
    const [showCompanyDetails, setShowCompanyDetails] = useState(false);

    const featureList = (
        <ul className="flex flex-col ml-10">
            {features.map((feature) => (
                <li key={feature.id}>
                    <Feature icon={feature.icon} title={feature.title} />
                </li>
            ))}
        </ul>
    );

    const companyList = (
        <ul className="ml-8 flex flex-col gap-2">
            <li>History</li>
            <li>Our Team</li>
            <li>Blog</li>
        </ul>
    );

    function onShowFeaturesClick() {
        setShowFeatures(!showFeatures);
    }

    function onShowCompanyDetailsClick() {
        setShowCompanyDetails(!showCompanyDetails);
    }

    return (
        <nav className="h-full w-60 bg-white absolute top-0 right-0 p-4">
            <img
                className="mb-10 h-6"
                onClick={() => setIsActiveNav(!isActiveNav)}
                src={CloseMenyIcon}
                alt=""
            />

            <ul className="mb-4 flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    <li onClick={onShowFeaturesClick}>Features</li>
                    <img
                        className="w-3"
                        src={showFeatures ? IconArrowUp : IconArrowDown}
                        alt=""
                    />
                </div>
                {showFeatures && featureList}

                <div className="flex items-center gap-3">
                    <li onClick={onShowCompanyDetailsClick}>Company</li>
                    <img
                        className="w-3"
                        src={showFeatures ? IconArrowUp : IconArrowDown}
                        alt=""
                    />
                </div>
                {showCompanyDetails && companyList}
                <li>Careers</li>
                <li>About</li>
            </ul>

            <div className="flex flex-col">
                <button className="p-2 font-bold text-slate-500"> Login</button>
                <button className="p-2 border rounded-xl font-bold text-slate-500">
                    Register
                </button>
            </div>
        </nav>
    );
}

// eslint-disable-next-line react/prop-types
function Feature({ icon, title }) {
    return (
        <div className="flex items-center gap-2">
            <img src={icon} alt="" />
            <p>{title}</p>
        </div>
    );
}
