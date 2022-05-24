import { useState } from "react";
import "./Item.css";

const Item = () => {
  const [contador, setContador] = useState(0);

  const addItem = () => {
    //if (contador <= stock) //Pendiente control de Stock
    setContador(contador + 1);
  };
  const subItem = () => {
    if (contador > 0) setContador(contador - 1);
  };

  return (
    <div className='itemCard'>
      <div>
        <img src="https://via.placeholder.com/250"></img>
      </div>
      <div>Nombre Artículo</div>
      <div className='itemCounter'>
        <span  onClick={subItem}>-</span>
        <p>{contador}</p>
        <span onClick={addItem}>+</span>
      </div>
    </div>
  );
};

export default Item;
