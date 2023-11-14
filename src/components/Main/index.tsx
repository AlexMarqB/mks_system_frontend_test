"use client";
import { ComponentProps } from "react";
import * as S from "./styles";

type MainProps = ComponentProps<"div">;

export function Main(props: MainProps) {
	return <S.Main {...props} data-testid="main-component" />;
}
