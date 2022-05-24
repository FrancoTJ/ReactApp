import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  const [contador, setContador] = useState(initial);

  const addItem = () => {
    if (contador < stock) setContador(contador + 1);
  };
  const subItem = () => {
    if (contador > 0) setContador(contador - 1);
  };

  return (
    <div className="itemCount">
      <span onClick={subItem}>-</span>
      <p>{contador}</p>
      <span onClick={addItem}>+</span>
    </div>
  );
};

export default ItemCount;
