import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from '././components/Welcome/Welcome';
import Home from '././components/Home/Home';
import Karyawan from '././components/Karyawan/Karyawan';
import Tabel from '././components/Tabel/Tabel';
import Login from '././components/Login/Login';
import Signup from '././components/Signup/Signup';
import NotFound from '././components/NotFound/NotFound';
import TableBacaData from '././components/TableBacaData/TableBacaData';
import DatatablesKry from './components/DatatablesKry/DatatablesKry';
import DatatablesKryVersi2 from './components/DatatablesKryVersi2/DatatablesKryVersi2';
import PaginationExc from './components/PaginationExc/PaginationExc';
import SelectBaca from './components/Select/Select';

const Routes = () => (
	<BrowserRouter >
		<Switch>
			<Route exact path="/" component={Welcome} />
			<Route path="/home" component={Home} />
			<Route path="/login" component={Login} />
			<Route path="/Signup" component={Signup} />
			<Route path="/karyawan" component={Karyawan} />
			<Route path="/tabel" component={Tabel} />	
			<Route path="/datatable" component={TableBacaData} />	
			<Route path="/DatatablesKaryawan" component={DatatablesKry} />	
			<Route path="/DatatablesKaryawanVersi2" component={DatatablesKryVersi2} />	
			<Route path="/PaginationExc" component={PaginationExc} />	
			<Route path="/Select" component={SelectBaca} />	
			<Route path="*" component={NotFound} />
		
		</Switch>
	</BrowserRouter>
);
export default Routes;