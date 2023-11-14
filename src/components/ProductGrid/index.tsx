"use client"
import { useQuery } from "react-query";
import { ProductType } from "../types";
import { ProductCard } from "./cards";
import * as S from "./styles";
import { axiosClient } from "@/services/axiosClient";
import { SkeletonCard } from "./skeletonCards";

const getProducts = async () => {
	const response = await axiosClient.get(
		"/products?page=1&rows=8&sortBy=id&orderBy=DESC"
	);
	return response.data.products;
};

export function ProductGrid() {
	const {
		data: items,
		error,
		isLoading,
	} = useQuery<ProductType[]>("products", getProducts);

	if (error) {
		console.error("Erro ao buscar produtos:", error);
	}

	return (
		<S.ProductsContainer >
			{isLoading
				? Array.from({ length: 8 }).map((_, index) => (
						<SkeletonCard key={index} />
				  ))
				: items &&
				  items.map((item) => <ProductCard item={item} key={item.id} />)}
		</S.ProductsContainer>
	);
}
