import ItemCount from "../ItemCount/ItemCount";

const Item = () => {
  return (
    <div className="itemCard">
      <div>
        <img src="https://via.placeholder.com/250" alt='Nombre Artículo'></img>
      </div>
      <div>Nombre Artículo</div>
      <ItemCount stock={5} initial={1} />
    </div>
  );
};

export default Item;
