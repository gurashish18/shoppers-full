/** @format */
import styled from "styled-components";
import Navbar from "./components/Navbar";
import { Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<Navbar />
			<SidebarContainer>
				<Sidebar />
				<Others>
					<Home />
				</Others>
			</SidebarContainer>
			<Routes></Routes>
		</>
	);
}

export default App;

const SidebarContainer = styled.div`
	display: flex;
`;
const Others = styled.div`
	flex: 4;
`;
