// eslint-disable-next-line react/prop-types
const Limitation = ({ icon, title, text }) => {
  return (
    <article className="limitation">
      <h4 className="limitation__title">
        {icon} {title}
      </h4>
      <p className="limitation__text">{text}</p>
    </article>
  );
};

export default Limitation;
