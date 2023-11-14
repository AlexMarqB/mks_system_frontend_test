export type ProductType = {
	id: number;
	name: string;
	brand: string;
	description: string;
	photo: string;
	price: number;
	createdAt: string;
	updatedAt: string;
};

export type ListedProductType = ProductType & { amount: number };
