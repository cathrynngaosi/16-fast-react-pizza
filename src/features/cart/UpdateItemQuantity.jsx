import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQty, increaseItemQty } from "./cartSlice";

function UpdateItemQuantity({ pizzaID, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseItemQty(pizzaID))}>
        -
      </Button>
      <span className="text-sm font-medium"> {currentQuantity} </span>
      <Button type="round" onClick={() => dispatch(increaseItemQty(pizzaID))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
