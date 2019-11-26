import MDCLayout from '../../components/layout/MDC.layout';
import { Headline5 } from '@material/react-typography';
import { Grid, Row, Cell } from '@material/react-layout-grid';

export default class Work extends React.Component {
	static Layout = MDCLayout;

	render() {
		return (
			<div className='work-container'>
				<Grid>
					<Headline5 className='title mb-2'>近期项目</Headline5>
					<Row>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<div className='app-card'>
								<div className='card-header'>
									Flutter
									<div className='fill'></div>
									<div className='tag'>Flutter</div>
								</div>
								<div className='card-content'>商城 APP</div>
							</div>
						</Cell>
					</Row>
				</Grid>
			</div>
		);
	}
}
