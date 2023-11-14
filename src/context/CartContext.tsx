"use client";

import { ListedProductType, ProductType } from "@/components/types";
import { createContext, useState } from "react";

interface CartContext {
	items: ListedProductType[];
	addItem: (item: ProductType) => void;
	removeItem: (item: ListedProductType) => void;
	excludeItem: (item: ListedProductType) => void;
	finishCart: () => void;
}

const CartContext = createContext<CartContext>({
	items: [],
	addItem: () => {},
	removeItem: () => {},
	excludeItem: () => {},
	finishCart: () => {}
});

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [items, setItems] = useState<ListedProductType[]>([]);

	const addItem = (item: ProductType) => {
		const existingItem = items.find((cartItem) => cartItem.id === item.id);

		if (existingItem) {
			setItems((prevItems) =>
				prevItems.map((cartItem) =>
					cartItem.id === item.id
						? { ...cartItem, amount: cartItem.amount + 1 }
						: cartItem
				)
			);
		} else {
			setItems((prevItems) => [...prevItems, { ...item, amount: 1 }]);
		}
	};

	const removeItem = (item: ListedProductType) => {
		const existingItem = items.find((cartItem) => cartItem.id === item.id);

		if (existingItem && existingItem.amount > 1) {
			setItems((prevItems) =>
				prevItems.map((cartItem) =>
					cartItem.id === item.id
						? { ...cartItem, amount: cartItem.amount - 1 }
						: cartItem
				)
			);
		}
	};

	const excludeItem = (item: ListedProductType) => {
		let index = items.indexOf(item);
		if (index !== -1) {
			let newItems = [...items];
			newItems.splice(index, 1);
			setItems(newItems);
		}
	};

	const finishCart = () => {
		setItems([])
	}

	const contextValue: CartContext = {
		items,
		addItem,
		removeItem,
		excludeItem,
		finishCart
	};

	return (
		<CartContext.Provider value={contextValue}>
			{children}
		</CartContext.Provider>
	);
};

export { CartContextProvider, CartContext };
