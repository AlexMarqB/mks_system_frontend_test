import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const SkeletonContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
	height: 95px;
	border-radius: 8px;
	background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
	background-size: 200% 100%;
	animation: ${loadingAnimation} 1.5s infinite;
	margin-bottom: 10px;
`;

export const SkeletonHeadContainer = styled.div`
	width: fit-content;
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`;

export const SkeletonTitleContainer = styled.div`
	flex-grow: 1;
	height: 33px;
	background-color: #e0e0e0;
	border-radius: 4px;
	margin: 0.5rem;
`;

export const SkeletonQtdContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	margin-bottom: 10px;
	margin-top: 10px;
`;

export const SkeletonQtdLabel = styled.div`
	align-self: flex-start;
	padding-left: 1rem;
	color: #000000;
	font-size: 8px;
	font-weight: 400;
	line-height: 6px;
	letter-spacing: 0em;
	background-color: #e0e0e0;
	height: 15px;
	width: 40%;
	border-radius: 4px;
	margin: 0.5rem;
`;

export const SkeletonQtdButtonContainer = styled.div`
	display: grid;
	align-items: center;
	text-align: center;
	justify-content: center;
	grid-template-columns: repeat(3, 1fr);
	width: 50px;
	height: 19px;
	border-radius: 4px;
	background-color: #e0e0e0;
	margin: 0.5rem;

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
		background-color: #e0e0e0;
	}
`;

export const SkeletonQtdButton = styled.div`
	background-color: #e0e0e0;
	color: #000000;
`;

export const SkeletonPrice = styled.div`
	color: #000000;
	font-size: 14px;
	font-weight: 700;
	line-height: 17px;
	letter-spacing: 0px;
	text-align: left;
	background-color: #e0e0e0;
	height: 15px;
	width: 70%;
	border-radius: 4px;
	margin: 0.5rem;
`;
