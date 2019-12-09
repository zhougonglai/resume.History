import MDCLayout from '../../components/layout/MDC.layout';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import { Headline5 } from '@material/react-typography';
import IconButton from '@material/react-icon-button';
import Dialog, { DialogTitle, DialogContent } from '@material/react-dialog';
import Button from '@material/react-button';
import MaterialIcon from '@material/react-material-icon';
import dynamic from 'next/dynamic';
import './projects.scss';

const DynamicComponent = dynamic(() => import('../../components/projects'));

export default class Projects extends React.Component {
	static Layout = MDCLayout;

	state = {
		example1: false,
		example2: false,
		landiv3_login: false,
		landiv3_landing: false,
		landiv3_schema: false,
		sales1: false,
		sales2: false,
	};

	togglerEx1 = () => {
		this.setState({
			example1: !this.state.example1,
		});
	};

	togglerEx2 = () => {
		this.setState({
			example2: !this.state.example2,
		});
	};

	togglerLoginEx = () => {
		this.setState({
			landiv3_login: !this.state.landiv3_login,
		});
	};

	togglerLandingEx = () => {
		this.setState({
			landiv3_landing: !this.state.landiv3_landing,
		});
	};

	togglerSchemaEx = () => {
		this.setState({
			landiv3_schema: !this.state.landiv3_schema,
		});
	};

	togglerSales1 = () => {
		this.setState({
			sales1: !this.state.sales1,
		});
	};

	togglerSales2 = () => {
		this.setState({
			sales2: !this.state.sales2,
		});
	};

	render() {
		return (
			<div className='container-projects'>
				<DynamicComponent />
			</div>
		);
	}
}
