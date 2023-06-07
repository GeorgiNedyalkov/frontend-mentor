// eslint-disable-next-line react/prop-types
const Benefit = ({ icon, title, text }) => {
  return (
    <article className="benefit">
      <div className="benefit__icon">{icon}</div>
      <h4 className="benefit__title">{title}</h4>
      <p className="benefit__text">{text}</p>
    </article>
  );
};

export default Benefit;
