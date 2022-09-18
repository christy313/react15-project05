import React from "react";

const Menu = ({ items }) => (
  <>
    {items.map((item) => {
      const { id, title, desc, price, img } = item;
      return (
        <div key={id} className="section-center">
          <article className="menu-item">
            <img src={img} alt="hi" className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        </div>
      );
    })}
  </>
);

export default Menu;
