import Limitation from "./Limitation/Limitation";
import { ReactComponent as GenderIcon } from "../../assets/images/icon-gender.svg";
import { ReactComponent as AgeIcon } from "../../assets/images/icon-age.svg";
import { ReactComponent as MuscleIcon } from "../../assets/images/icon-muscle.svg";
import { ReactComponent as PregnancyIcon } from "../../assets/images/icon-pregnancy.svg";
import { ReactComponent as RaceIcon } from "../../assets/images/icon-race.svg";

const limitations = [
  {
    id: 1,
    title: "Gender",
    icon: <GenderIcon />,
    text: `The development and body fat composition of girls and boys vary with age. 
    Consequently, a child's age and gender are considered when evaluating their BMI.`,
  },
  {
    id: 2,
    title: "Age",
    icon: <AgeIcon />,
    text: `In aging individuals, 
    increased body fat and muscle loss may cause BMI to underestimate body fat content.`,
  },
  {
    id: 3,
    title: "Muscle",
    icon: <MuscleIcon />,
    text: `BMI may misclassify muscular individuals as overweight or obese, as it doesn't 
    differentiate muscle from fat.`,
  },
  {
    id: 4,
    title: "Pregnancy",
    icon: <PregnancyIcon />,
    text: `Expectant mothers experience weight gain due to their growing baby. 
    Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks 
    for both mother and child.`,
  },
  {
    id: 5,
    title: "Age",
    icon: <RaceIcon />,
    text: `Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. 
    To learn more, it is advised to discuss this with your GP or practice nurse.`,
  },
];

const Limitations = () => {
  return (
    <section id="limitations">
      <h2>Limitations of BMI</h2>
      <p className="limitations__text">
        Although BMI is often a practical indicator of healthy weight, it is not
        suited for every person. Specific groups should carefully consider their
        BMI outcomes, and in certain cases, the measurement may not be
        beneficial to use.
      </p>
      <ul>
        {limitations.map((limitation) => {
          return <Limitation key={limitation.id} {...limitation} />;
        })}
      </ul>
    </section>
  );
};

export default Limitations;
