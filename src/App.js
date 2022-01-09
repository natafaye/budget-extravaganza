import TransactionPage from "./transactions/TransactionPage";
import BudgetPage from "./budget/BudgetPage";
import CategoryPage from "./budget/CategoryPage";
import { Route, Routes, NavLink } from "react-router-dom";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NotFoundPage from "./NotFoundPage";

export default function App() {
	return (
		<React.Fragment>
			<Navbar bg="dark" variant="dark">
				<Container fluid>
					<Navbar.Brand href="#home">Budget Extravaganza</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link as={NavLink} to="/">Home</Nav.Link>
						<Nav.Link as={NavLink} to="/transactions">Transactions</Nav.Link>
						<Nav.Link as={NavLink} to="/budget">Budget</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<div className="container">
				<Routes>
					<Route path="transactions" element={<TransactionPage/>}/>
					<Route path="budget" element={<BudgetPage/>} />
					<Route path="budget/:categoryId" element={<CategoryPage/>}/>
					<Route path="notfound" element={<NotFoundPage/>} />
					<Route path="*" element={<NotFoundPage/>} />

					<Route path="notes/*">
					</Route>
				</Routes>
			</div>
		</React.Fragment>
	);
}
