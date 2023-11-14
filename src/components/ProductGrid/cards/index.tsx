"use client";
import { useContext } from "react";
import { ProductType } from "../../types";
import * as S from "./styles";
import { CartContext } from "@/context/CartContext";

export function ProductCard({ item }: { item: ProductType }) {
	const { addItem } = useContext(CartContext);

	return (
		<S.Container data-testid="product-card">
			<S.ImgContainer>
				<img src={item.photo} alt={item.name} />
			</S.ImgContainer>
			<S.MainInfoContainer>
				<S.Title>{item.name}</S.Title>
				<S.PriceContainer>R${item.price}</S.PriceContainer>
			</S.MainInfoContainer>
			<S.Description>{item.description}</S.Description>
			<S.BuyButtonContainer onClick={() => addItem(item)} data-testid="additem-to-cart">
				<S.BuyButtonContent>
					<img src="/shopping-bag.svg" alt="shopping bag" />
					COMPRAR
				</S.BuyButtonContent>
			</S.BuyButtonContainer>
		</S.Container>
	);
}
