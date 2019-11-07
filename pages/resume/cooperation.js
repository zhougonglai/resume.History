import MDCLayout from '../../components/layout/MDC.layout';
import { Grid, Row, Cell } from '@material/react-layout-grid';

export default class Cooperation extends React.Component {
	static Layout = MDCLayout;
	render() {
		return (
			<div className='container-cooperation'>
				<Grid>
					<Row>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							container-cooperation
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							container-cooperation
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							container-cooperation
						</Cell>
					</Row>
				</Grid>
			</div>
		);
	}
}
