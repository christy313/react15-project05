import React from "react";

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, i) => {
        return (
          <button
            type="button"
            key={i}
            onClick={() => filterItems(category)}
            className="filter-btn"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
