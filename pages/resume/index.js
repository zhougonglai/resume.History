import MDCLayout from '../../components/layout/MDC.layout';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import MaterialIcon from '@material/react-material-icon';
import Card, {
	CardPrimaryContent,
	CardMedia,
	CardActions,
	CardActionButtons,
	CardActionIcons,
} from '@material/react-card';
import List, {
	ListItem,
	ListItemText,
	ListItemMeta,
	ListGroup,
	ListGroupSubheader,
	ListDivider,
	ListItemGraphic,
} from '@material/react-list';
import Button from '@material/react-button';
import {
	Headline6,
	Subtitle1,
	Subtitle2,
	Caption,
} from '@material/react-typography';
import './index.scss';

export default class Resume extends React.Component {
	static Layout = MDCLayout;

	selectItem = index => {
		switch (index) {
			case 0:
				window.open(
					`mailto:zhou_gong_lai@qq.com?subject=[招聘]邀请投递:前端&body=`,
				);
				break;
			case 1:
				window.open(`https://www.amap.com/search?query=武汉市`);
				break;
		}
	};

	render() {
		return (
			<div className='container'>
				<Grid>
					<Row>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={6}>
							<div className='subtitle'>
								<Subtitle1>基本信息</Subtitle1>
							</div>
							<Card>
								<CardPrimaryContent className='card__primary-action'>
									<CardMedia
										square
										className='card__media'
										imageUrl='https://avatars0.githubusercontent.com/u/10954751?s=460&v=4'
									/>
									<div className='card__primary'>
										<Headline6 className='card__title'>
											周公来
											<svg className='icon ml-1' aria-hidden='true'>
												<use xlinkHref='#icon-Man'></use>
											</svg>
										</Headline6>
										<Subtitle2 className='card__subtitle'>
											前端开发工程师
										</Subtitle2>
										<Caption>4 年工作经验 / 大专 / 27岁</Caption>
										<MaterialIcon
											className='fit-content'
											aria-label='arrow_forward'
											hasRipple
											icon='arrow_forward'
										/>
									</div>
								</CardPrimaryContent>
							</Card>
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={6}>
							<div className='subtitle'>
								<Subtitle1>联系我</Subtitle1>
							</div>
							<div className='card'>
								<List handleSelect={active => this.selectItem(active)}>
									<ListItem>
										<ListItemGraphic
											graphic={
												<svg className='icon' aria-hidden='true'>
													<use xlinkHref='#icon-mail'></use>
												</svg>
											}
										/>
										<ListItemText primaryText='zhou_gong_lai@qq.com' />
										<ListItemMeta meta='email' />
									</ListItem>
									<ListItem>
										<ListItemGraphic
											graphic={
												<svg className='icon' aria-hidden='true'>
													<use xlinkHref='#icon-Geo-fence'></use>
												</svg>
											}
										/>
										<ListItemText primaryText='武汉地区' />
										<ListItemMeta
											meta={
												<MaterialIcon
													className='fit-content'
													aria-label='arrow_forward'
													hasRipple
													icon='my_location'
												/>
											}
										/>
									</ListItem>
								</List>
							</div>
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={6}>
							asfasf
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={6}>
							asfasf
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={6}>
							asfasf
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={6}>
							asfasf
						</Cell>
					</Row>
				</Grid>
			</div>
		);
	}
}
