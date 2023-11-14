"use client";
import { useContext, useEffect, useState } from "react";
import { CartListCard } from "./cards";
import * as S from "./styles";
import { CartContext } from "@/context/CartContext";
import Close from "../../../public/close";
import { ListedProductType } from "../types";

interface CartProps {
	isOpen?: boolean;
	onClose?: () => void;
}

export function CartSidebar({ isOpen, onClose }: CartProps) {
	const { items, finishCart } = useContext(CartContext);
	const [totalValue, setTotalValue] = useState(0);

	const calcTotalValue = () => {
		let value = 0;
		items?.forEach((item) => (value += item.price * item.amount));
		setTotalValue(value);
	};

	useEffect(() => {
		calcTotalValue();
	}, [items]);

	const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

	const handleFinish = (listedItems: ListedProductType[]) => {
		if(listedItems.length > 0) {
			finishCart()
		}
	}

	return (
		isOpen && (
			<S.Container data-testid="sidebar-container">
				<S.Head>
					<p>
						Carrinho
						<br />
						de compras
					</p>
					<S.CloseButton onClick={onClose} data-testid="close-cart-svg">
						<Close
							color={screenWidth <= 700 ? "#0F52BA" : "white"}
							size={screenWidth <= 700 ? "50" : "38"}
						/>
					</S.CloseButton>
				</S.Head>
				<S.ItensList>
					{items?.map((item) => (
						<CartListCard item={item} key={item.id} />
					))}
				</S.ItensList>
				<S.Foot>
					<S.Info>
						<span>Total:</span>
						<span>R${totalValue}</span>
					</S.Info>
					<S.FinishButtonContainer onClick={() => {handleFinish(items)
					console.log("Limpei o carrinho")}} data-testid="finish-buy-button">
						<S.FinishButtonContent>
							Finalizar Compra
						</S.FinishButtonContent>
					</S.FinishButtonContainer>
				</S.Foot>
			</S.Container>
		)
	);
}