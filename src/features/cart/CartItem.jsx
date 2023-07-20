import { formatCurrency } from "../../utilities/helpers";
import Button from "../../ui/Button";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { useSelector } from "react-redux";
import { getCurrentQuantityByID } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaID, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityByID(pizzaID));
  console.log(currentQuantity);

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-small font-bold">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity
          pizzaID={pizzaID}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaID={pizzaID} />
      </div>
    </li>
  );
}

export default CartItem;
