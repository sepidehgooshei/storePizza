import { formatCurrency } from "../utils/helpers";

export default function OrderItem({ item, isLoadingIngredients, ingredients }) {
    const { quantity, totalPrice, name } = item;

    return (
        <li className="space-y-1 py-1 border-bottom border-ligth list-unstyled">
        <div className="d-flex justify-content-between gap-4 text-sm ">
        <p>
                    <span className="font-bold">{quantity} &times; </span>
                     <span className="fw-light text-muted"> {name}</span>
                </p>
                <p className="font-bold">{formatCurrency(totalPrice)}</p>
            </div>
            <p className="text-capitalize fst-italic text-secondary">
            {isLoadingIngredients ? 'Loading...' : (ingredients || []).join(', ')}
            </p>
        </li>
    );
}

