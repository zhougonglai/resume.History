import MDCLayout from '../../components/layout/MDC.layout';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import { Headline6 } from '@material/react-typography';
import { ChipSet, Chip } from '@material/react-chips';

export default class Projects extends React.Component {
	static Layout = MDCLayout;

	render() {
		return (
			<div className='container'>
				<Grid>
					<Headline6 className='title'>武汉无限未来科技有限公司</Headline6>
					<Row>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<div className='app-card'>
								<div className='card-title'>
									天马报告
									<div className='fill'></div>
									<div className='tag'>微信网页</div>
								</div>
								<div className='card-content'>
									<div className='desc'>safsaf</div>
									<div className='actions'>asfaf</div>
								</div>
							</div>
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							公司
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							公司
						</Cell>

						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							公司
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							公司
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							公司
						</Cell>

						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							公司
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							公司
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							公司
						</Cell>

						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							公司
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							公司
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							公司
						</Cell>
					</Row>
				</Grid>
			</div>
		);
	}
}
