import Benefit from "./Benefit/Benefit";
import ManEating from "../../assets/images/image-man-eating.webp";
import { ReactComponent as EatingIcon } from "../../assets/images/icon-eating.svg";
import { ReactComponent as ExerciseIcon } from "../../assets/images/icon-exercise.svg";
import { ReactComponent as SleepIcon } from "../../assets/images/icon-sleep.svg";

const benefits = [
  {
    id: 1,
    title: "Healthy eating",
    icon: <EatingIcon />,
    text: `Healthy eating promotes weight control, 
    disease prevention, better digestion, immunity, 
    mental clarity, and mood.`,
  },
  {
    id: 2,
    title: "Regular exercise",
    icon: <ExerciseIcon />,
    text: `Exercise improves fitness, aids weight control, 
    elevates mood, and reduces disease risk, fostering 
    wellness and longevity.`,
  },
  {
    id: 3,
    title: "Adequate sleep",
    icon: <SleepIcon />,
    text: `Sleep enhances mental clarity, emotional stability,
     and physical wellness, promoting overall restoration and rejuvenation.`,
  },
];

const Benefits = () => {
  return (
    <section id="benefits">
      <div className="img__man-eating-container">
        <img
          className="img__man-eating"
          src={ManEating}
          alt="Image of a man eating"
        />
      </div>
      <h2 className="benefits__title">What your BMI result means</h2>
      <p className="benefits__text">
        A BMI range of 18.5 to 24.9 is considered a {"healthy weight."}
        Maintaining a healthy weight may lower your chances of experiencing
        health issues later on, such as obesity and type 2 diabetes. Aim for a
        nutritious diet with reduced fat and sugar content, incorporating ample
        fruits and vegetables. Additionally, strive for regular physical
        activity, ideally about 30 minutes daily for five days a week.
      </p>
      <ul>
        {benefits.map((benefit) => {
          return <Benefit key={benefit.id} {...benefit} />;
        })}
      </ul>
    </section>
  );
};

export default Benefits;
