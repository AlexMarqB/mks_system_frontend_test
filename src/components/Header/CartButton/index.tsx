"use client";
import { useContext, useState } from "react";
import * as S from "./styles";
import { CartSidebar } from "../../Cart";
import { CartContext } from "@/context/CartContext";

export function CartButton() {
	const { items } = useContext(CartContext);
	const [open, setOpen] = useState(false);

	return (
		<>
			<S.CartButtonContainer data-testid="cart-button" onClick={() => setOpen(true)}>
				<S.CartButtonContent>
					<img src="shopping-cart.svg" alt="shopping cart" data-testid="cart-svg"/>
					<span>{items.length}</span>
				</S.CartButtonContent>
			</S.CartButtonContainer>
			<CartSidebar isOpen={open} onClose={() => setOpen(false)} />
		</>
	);
}
