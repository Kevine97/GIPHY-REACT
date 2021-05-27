import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setcategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      return;
    }
    setcategories((category) => [inputValue, ...category]);
    setInputValue("");
  };

  return (
    <div className="row">
      <div className="col-md-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control mt-3"
              id="txtBuscar"
              aria-describedby="emailHelp"
              placeholder="Buscar Gif"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;

AddCategory.propTypes = {
  setcategories: PropTypes.func.isRequired,
};
