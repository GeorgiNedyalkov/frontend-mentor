function FormHeader({ title, children }) {
  return (
    <div className="form__header">
      <h1 className="form__title">{title}</h1>
      <p className="form__description">{children}</p>
    </div>
  );
}

export default FormHeader;
