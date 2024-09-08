import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className=" p-2 m-2  border-b-2 text-left flex justify-between"
        >
          <div className=" w-9/12">
            <div className="py-4">
              <span className="pr-3 fort-b">{item.card.info.name}</span>
              <span> - ₹{item.card.info.price / 100}</span>
            </div>
            <p className=" text-xs">{item.card.info.description}</p>
          </div>
          <div className=" w-3/12 relative">
            <img
              className=" rounded-lg "
              src={`${CDN_URL + item.card.info.imageId}`}
            />
            <button
              className=" p-2 rounded-lg bg-white shadow-lg absolute m-auto z-10 bottom-[3px] left-[103px]"
              onClick={() => handleAddItem(item)}
            >
              Add+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
