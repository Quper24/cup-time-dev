export const Products = () => (
  <section className="products">
    <div className="container">
      <h2 className="products__title">Чай</h2>
      <div className="products__list">
        <article className="product">
          <img
            src="image/photo01.jpg"
            alt="Кокосовая матча"
            className="product__image"
          />
          <div className="product__content">
            <h3 className="product__name">Кокосовая матча</h3>
            <p className="product__price">390 ₽</p>
          </div>
        </article>

        <article className="product">
          <img
            src="image/photo02.jpg"
            alt="Зеленый индонезийский чай"
            className="product__image"
          />
          <div className="product__content">
            <h3 className="product__name">Зеленый индонезийский чай</h3>
            <p className="product__price">390 ₽</p>
          </div>
        </article>

        <article className="product">
          <img
            src="image/photo03.jpg"
            alt="Черный чай из Эфиопии"
            className="product__image"
          />
          <div className="product__content">
            <h3 className="product__name">Черный чай из Эфиопии</h3>
            <p className="product__price">390 ₽</p>
          </div>
        </article>

        <article className="product">
          <img
            src="image/photo04.jpg"
            alt="Черный чай из Калифорнии"
            className="product__image"
          />
          <div className="product__content">
            <h3 className="product__name">Черный чай из Калифорнии</h3>
            <p className="product__price">390 ₽</p>
          </div>
        </article>

        <article className="product">
          <img
            src="image/photo05.jpg"
            alt="Органическая веганская матча"
            className="product__image"
          />
          <div className="product__content">
            <h3 className="product__name">Органическая веганская матча</h3>
            <p className="product__price">390 ₽</p>
          </div>
        </article>

        <article className="product">
          <img
            src="image/photo06.jpg"
            alt="Чай черный Лакандона"
            className="product__image"
          />
          <div className="product__content">
            <h3 className="product__name">Чай черный Лакандона</h3>
            <p className="product__price">390 ₽</p>
          </div>
        </article>
      </div>
    </div>
  </section>
);
