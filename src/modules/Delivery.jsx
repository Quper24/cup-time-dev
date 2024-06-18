export const Delivery = () => (
  <section className="delivery">
    <div className="container">
      <h2 className="delivery__title">Доставка</h2>
      <form className="delivery__form">
        <input type="text" className="delivery__input" placeholder="Имя" />
        <input type="text" className="delivery__input" placeholder="Телефон" />
        <input
          type="text"
          className="delivery__input delivery__input_address"
          placeholder="Адрес"
        />
        <div className="delivery__payment">
          <h3 className="delivery__payment-title">Оплата:</h3>
          <label className="delivery__payment-label">
            <input
              className="delivery__checkbox"
              type="radio"
              name="payment"
              value="card"
              defaultChecked
            />
            Картой
          </label>
          <label className="delivery__payment-label">
            <input
              className="delivery__checkbox"
              type="radio"
              name="payment"
              value="cash"
            />
            Наличными
          </label>
        </div>
      </form>
    </div>
  </section>
);
