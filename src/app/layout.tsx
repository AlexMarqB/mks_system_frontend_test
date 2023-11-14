import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { CartContextProvider } from "@/context/CartContext";
import { QueryProvider } from "@/services/queryProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "MKS Sistemas",
	description: "Teste para desenvolvedor frontend",
};

export default function RootLayout({
	children,
  }: {
	children: React.ReactNode;
  }) {
	return (
	  <html lang="pt-br" style={{ height: '100%' }}>
		<body
		  className={montserrat.className}
		  style={{
			padding: 0,
			margin: 0,
			height: '100%',
			backgroundColor: '#F9F9F9',
		  }}
		>
		  <QueryProvider>
			<CartContextProvider>
			  <div style={{justifyContent: 'space-between'}}>
					<Header />
					<Main>{children}</Main>
					<Footer />
				</div>
			</CartContextProvider>
		  </QueryProvider>
		</body>
	  </html>
	);
  }
  
