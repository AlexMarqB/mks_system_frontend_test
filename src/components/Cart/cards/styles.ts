import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`;

export const DataContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr;
	justify-content: center;
	gap: 0.5rem;
	align-items: center;
	max-width: 379px;
	max-height: 95px;
	border-radius: 8px;
	background-color: #ffffff;
	padding: 1rem 0.5rem 1rem 0.5rem;
	box-shadow: -2px 2px 10px 0px #0000000d;

	@media screen and (max-width: 786px) {
		display: flex;
		align-items: center;
		flex-direction: column;
		max-height: 220.05px;
		max-width: 250px;
	}
`;

export const HeadContainer = styled.div`
	display: flex;
	gap: 1rem;
	width: fit-content;
	align-items: center;
	justify-content: center;

	img {
		width: 100%;
		object-fit: contain;
	}

	@media screen and (max-width: 786px) {
		img {
			width: 60%;
		}
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	color: #2c2c2c;
	font-size: 13px;
	font-weight: 400;
	line-height: 17px;
	letter-spacing: 0px;
	align-items: center;
	text-align: left;
	height: 33px;
	max-width: 113px;

	@media screen and (max-width: 786px) {
		max-width: 100%;
		font-size: 16px;
		font-weight: 400;
	}
`;

export const QtdContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	margin-bottom: 10px;
	margin-top: 10px;
`;

export const QtdLabel = styled.label`
	align-self: flex-start;
	padding-left: 1rem;
	color: #000000;
	font-size: 8px;
	font-weight: 400;
	line-height: 6px;
	letter-spacing: 0em;

	@media screen and (max-width: 786px) {
		display: none;
	}
`;

export const QtdButtonContainer = styled.div`
	display: grid;
	align-items: center;
	text-align: center;
	justify-content: center;
	grid-template-columns: repeat(3, 1fr);
	width: 50px;
	height: 19px;
	border-radius: 4px;
	border: 0.3px solid #bfbfbf;

	div {
		display: flex;
		color: #000000;
		border-left: 0.3px solid #bfbfbf;
		border-right: 0.3px solid #bfbfbf;
		font-size: 8px;
		font-weight: 400;
		line-height: 10px;
		letter-spacing: 0em;
		text-align: center;
		height: 80%;
		justify-content: center;
		align-items: center;
	}

	@media screen and (max-width: 786px) {
		width: 97.37px;
		height: 34.5px;

		div {
			font-size: 20px;
			font-weight: 400;
			line-height: 24px;
			letter-spacing: 0em;
			text-align: center;
			align-items: center;
		}
	}
`;

export const QtdButton = styled.button`
	outline: none;
	background-color: transparent;
	border: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #000000;

	@media screen and (max-width: 768px) {
		font-size: 20px;
		font-weight: 400;
		line-height: 24px;
		letter-spacing: 0em;
		text-align: center;
	}

	:hover {
		cursor: pointer;
	}
`;

export const Price = styled.div`
	color: #000000;
	font-size: 14px;
	font-weight: 700;
	line-height: 17px;
	letter-spacing: 0px;
	text-align: left;

	@media screen and (max-width: 768px) {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 70px;
		height: 20.81px;
		padding: 0.5rem;
		color: #ffffff;
		background-color: #373737;
		font-size: 15px;
		font-weight: 700;
		line-height: 15px;
		letter-spacing: 0px;
		text-align: center;
		border-radius: 5px;
	}
`;

export const RemoveItem = styled.button`
	position: absolute;
	top: -0.8rem;
	right: -1.2rem;
	z-index: 40;
	background-color: transparent;
	border: 0;
	outline: none;
	padding: 0;

	:hover {
		cursor: pointer;
	}

	img {
		width: 60%;
	}
`;

export const MobileRemoveItem = styled.button`
	position: absolute;
	top: 0.7rem;
	right: 0.6rem;
	z-index: 40;
	background-color: transparent;
	border: 0;
	outline: none;
	padding: 0;
`
