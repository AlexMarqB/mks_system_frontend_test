"use client";
import { useContext } from "react";
import { ListedProductType } from "../../types";
import * as S from "./styles";
import { CartContext } from "@/context/CartContext";

interface CardProps {
	item: ListedProductType;
}

export function CartListCard({ item }: CardProps) {
	const { removeItem, addItem, excludeItem } = useContext(CartContext);

	const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0;


	return (
		<S.Container>
			<S.DataContainer>
				<S.HeadContainer>
					<img src={item.photo} alt={item.name} />
				</S.HeadContainer>
				<S.TitleContainer>{item.name}</S.TitleContainer>
				<div
					style={{ display: "flex", alignItems: "center", gap: "1.4rem" }}
				>
					<S.QtdContainer>
						<S.QtdLabel htmlFor="#qtd">Qtd:</S.QtdLabel>
						<S.QtdButtonContainer id="qtd">
							<S.QtdButton onClick={() => removeItem(item)}>
								-
							</S.QtdButton>
							<div>{item.amount}</div>
							<S.QtdButton onClick={() => addItem(item)}>+</S.QtdButton>
						</S.QtdButtonContainer>
					</S.QtdContainer>
					<S.Price>R${item.price.toString().split(".")[0]}</S.Price>
				</div>
			</S.DataContainer>
			{screenWidth <= 700 ? (
				<S.MobileRemoveItem onClick={() => excludeItem(item)}>
					<img src="/mobile-close.svg" alt="remove item" />
				</S.MobileRemoveItem>
			) : (
				<S.RemoveItem onClick={() => excludeItem(item)}>
					<img src="/close.svg" alt="remove item" />
				</S.RemoveItem>
			)}
		</S.Container>
	);
}
