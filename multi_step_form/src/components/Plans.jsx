function Plans({ plans }) {
  return (
    <div className="form__plans">
      <ul>
        {plans.map((plan) => {
          return (
            <li key={plan.id}>
              <Plan {...plan} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Plan({ label, price, icon }) {
  return (
    <div className="form__plan">
      <img src={`${icon}`} alt={`plan icon ${label}`} />
      <div>
        <h3>{label}</h3>
        <p>
          ${price}
          <span>/mo</span>
        </p>
      </div>
    </div>
  );
}
export default Plans;
