import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  return <div className='cardItem'>{props.nombre} - {props.moneda}{props.precio}</div>
    
};

export default ItemListContainer;
