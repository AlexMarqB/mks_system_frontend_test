"use client";
import { CartButton } from "./CartButton";
import * as S from "./styles";

export function Header() {
	return (
		<S.Container>
			<S.LogoContainer>
				<S.LogoText1>MKS</S.LogoText1>
				<S.LogoText2>Sistemas</S.LogoText2>
			</S.LogoContainer>
			<CartButton />
		</S.Container>
	);
}
