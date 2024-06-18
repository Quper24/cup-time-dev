export const Cart = () => (
  <section className="cart">
    <div className="container cart__container">
      <h2 className="cart__title">Корзина (6)</h2>
      <ul className="cart__items">
        <li className="cart-item">
          <img
            src="image/photo01.jpg"
            alt="Кокосовая матча"
            className="cart-item__image"
          />
          <div className="cart-item__info">
            <h3 className="cart-item__name">Кокосовая матча</h3>
            <div className="cart-item__quantity">
              <button className="cart-item__quantity-button cart-item__quantity-button_minus"></button>
              <input
                type="number"
                className="cart-item__quantity-input"
                value="1"
              />
              <button className="cart-item__quantity-button cart-item__quantity-button_plus"></button>
            </div>
            <p className="cart-item__price">390&nbsp;₽</p>
          </div>
        </li>

        <li className="cart-item">
          <img
            src="image/photo02.jpg"
            alt="Зеленый индонезийский чай"
            className="cart-item__image"
          />
          <div className="cart-item__info">
            <h3 className="cart-item__name">Зеленый индонезийский чай</h3>
            <div className="cart-item__quantity">
              <button className="cart-item__quantity-button cart-item__quantity-button_minus"></button>
              <input
                type="number"
                className="cart-item__quantity-input"
                value="1"
              />
              <button className="cart-item__quantity-button cart-item__quantity-button_plus"></button>
            </div>
            <p className="cart-item__price">340&nbsp;₽</p>
          </div>
        </li>

        <li className="cart-item">
          <img
            src="image/photo03.jpg"
            alt="Черный чай из Эфиопии"
            className="cart-item__image"
          />
          <div className="cart-item__info">
            <h3 className="cart-item__name">Черный чай из Эфиопии</h3>
            <div className="cart-item__quantity">
              <button className="cart-item__quantity-button cart-item__quantity-button_minus"></button>
              <input
                type="number"
                className="cart-item__quantity-input"
                value="1"
              />
              <button className="cart-item__quantity-button cart-item__quantity-button_plus"></button>
            </div>
            <p className="cart-item__price">380&nbsp;₽</p>
          </div>
        </li>

        <li className="cart-item">
          <img
            src="image/photo04.jpg"
            alt="Черный чай из Эфиопии"
            className="cart-item__image"
          />
          <div className="cart-item__info">
            <h3 className="cart-item__name">Черный чай из Калифорнии</h3>
            <div className="cart-item__quantity">
              <button className="cart-item__quantity-button cart-item__quantity-button_minus"></button>
              <input
                type="number"
                className="cart-item__quantity-input"
                value="1"
              />
              <button className="cart-item__quantity-button cart-item__quantity-button_plus"></button>
            </div>
            <p className="cart-item__price">360&nbsp;₽</p>
          </div>
        </li>

        <li className="cart-item">
          <img
            src="image/photo06.jpg"
            alt="Чай черный Лакандона"
            className="cart-item__image"
          />
          <div className="cart-item__info">
            <h3 className="cart-item__name">Чай черный Лакандона</h3>
            <div className="cart-item__quantity">
              <button className="cart-item__quantity-button cart-item__quantity-button_minus"></button>
              <input
                type="number"
                className="cart-item__quantity-input"
                value="1"
              />
              <button className="cart-item__quantity-button cart-item__quantity-button_plus"></button>
            </div>
            <p className="cart-item__price">390&nbsp;₽</p>
          </div>
        </li>
      </ul>
      <div className="cart__summary">
        <h3 className="cart__summary-title">Итого:</h3>
        <p className="cart__total"> 2200&nbsp;₽</p>
        <button className="cart__order-button">Заказать</button>
      </div>
    </div>
  </section>
);
