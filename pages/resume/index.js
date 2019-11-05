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
import IconButton from '@material/react-icon-button';
import {
	Headline6,
	Subtitle1,
	Subtitle2,
	Caption,
} from '@material/react-typography';
import Dialog, {
	DialogTitle,
	DialogContent,
	DialogFooter,
	DialogButton,
} from '@material/react-dialog';
import './index.scss';

export default class Resume extends React.Component {
	static Layout = MDCLayout;
	state = {
		open: false,
	};

	constructor(props) {
		super(props);
		this.dialogRef = React.createRef();
	}

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
			case 2:
				this.setState({
					open: !this.state.open,
				});
				break;
		}
	};

	render() {
		return (
			<div className='container'>
				<Dialog open={this.state.open}>
					<IconButton
						className='dialog-close'
						onClick={() => this.selectItem(2)}>
						<MaterialIcon icon='close' />
					</IconButton>
					<DialogTitle>微信二维码</DialogTitle>
					<DialogContent>
						<img className='qrcode' src='/WechatIMG35.jpeg' alt='qrcode' />
					</DialogContent>
				</Dialog>
				<Grid>
					<Row>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={6}>
							<div className='subtitle'>
								<Subtitle1>基本信息</Subtitle1>
							</div>
							<Card
								onClick={() => window.open('https://github.com/zhougonglai')}>
								<CardPrimaryContent className='card__primary-action'>
									<CardMedia
										square
										className='card__media'
										imageUrl='/WechatIMG37.jpeg'
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
									<ListItem>
										<ListItemGraphic
											graphic={
												<svg className='icon' aria-hidden='true'>
													<use xlinkHref='#icon-weichat'></use>
												</svg>
											}
										/>
										<ListItemText primaryText='微信' />
										<ListItemMeta
											meta={
												<MaterialIcon
													className='fit-content'
													aria-label='launch'
													hasRipple
													icon='launch'
												/>
											}
										/>
									</ListItem>
								</List>
							</div>
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={6}>
							<div className='subtitle'>
								<Subtitle1>核心技能</Subtitle1>
							</div>
							<List>
								<ListItem>
									<ListItemGraphic
										graphic={<img src='/logo.png' alt='vue' />}
									/>
									<ListItemText primaryText='vuex . vue-router . vue-cli . Nuxt' />
								</ListItem>
								<ListItem>
									<ListItemGraphic
										graphic={<img src='/download.svg' alt='react' />}
									/>
									<ListItemText primaryText='redux . react-router . umijs . Next . React-Native' />
								</ListItem>
								<ListItem>
									<ListItemGraphic
										graphic={<img src='/angular.svg' alt='angular' />}
									/>
									<ListItemText primaryText='@ngrx/store . ionic' />
								</ListItem>
								<ListItem>
									<ListItemGraphic
										graphic={
											<MaterialIcon
												className='fit-content'
												aria-label='CI'
												hasRipple
												icon='account_tree'
											/>
										}
									/>
									<ListItemText primaryText='Docker . Nginx . Netlify . CircleCI' />
								</ListItem>
							</List>
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={6}>
							<div className='subtitle'>
								<Subtitle1>自我描述</Subtitle1>
							</div>
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={6}>
							<div className='subtitle'>
								<Subtitle1>工作经历</Subtitle1>
							</div>
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={6}>
							<div className='subtitle'>
								<Subtitle1>教育经历</Subtitle1>
							</div>
						</Cell>
					</Row>
				</Grid>
			</div>
		);
	}
}
