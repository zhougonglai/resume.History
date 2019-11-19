import MDCLayout from '../../components/layout/MDC.layout';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import MaterialIcon from '@material/react-material-icon';
import Router from 'next/router';
import { ChipSet, Chip } from '@material/react-chips';
import Card, { CardPrimaryContent, CardMedia } from '@material/react-card';
import List, {
	ListItem,
	ListItemText,
	ListItemMeta,
	ListItemGraphic,
} from '@material/react-list';
import IconButton from '@material/react-icon-button';
import Button from '@material/react-button';
import {
	Headline6,
	Subtitle1,
	Subtitle2,
	Caption,
} from '@material/react-typography';
import Dialog, { DialogTitle, DialogContent } from '@material/react-dialog';
import './index.scss';

export default class Resume extends React.Component {
	static Layout = MDCLayout;
	state = {
		open: false,
		recent: false,
	};

	constructor(props) {
		super(props);
		this.dialogRef = React.createRef();
	}

	selectItem = index => {
		switch (index) {
			case 0:
				this.setState({
					open: !this.state.open,
				});
				break;
			case 1:
				window.open(
					`mailto:zhou_gong_lai@qq.com?subject=[招聘]邀请投递:前端&body=`,
				);
				break;
			case 2:
				window.open(`https://www.amap.com/search?query=武汉市`);
				break;
		}
	};

	switchCase = target => {
		if (target) {
			Router.push(`/resume/projects#${target}`).then(() => {
				Router.events.emit('push', {
					activeIndex: 1,
					type: '项目经历',
				});
			});
		} else {
			this.props.giveToast({
				message: '本作品没有亮点',
				open: true,
			});
		}
	};

	togglerRecent = () => {
		this.setState({
			recent: !this.state.recent,
		});
	};

	render() {
		return (
			<div className='container'>
				<Dialog open={this.state.open}>
					<IconButton
						className='dialog-close'
						onClick={() => this.selectItem(0)}>
						<MaterialIcon icon='close' />
					</IconButton>
					<DialogTitle>微信二维码</DialogTitle>
					<DialogContent>
						<img className='qrcode' src='/WechatIMG35.jpeg' alt='qrcode' />
					</DialogContent>
				</Dialog>
				<Dialog open={this.state.recent}>
					<IconButton
						className='dialog-close'
						onClick={() => this.togglerRecent()}>
						<MaterialIcon icon='close' />
					</IconButton>
					<DialogTitle>近况</DialogTitle>
					<DialogContent>
						<img className='recent' src='/WechatIMG36.jpeg' alt='recent' />
					</DialogContent>
				</Dialog>
				<Grid>
					<Row>
						{/* 基本信息 */}
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
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
						{/* 联系我 */}
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<div className='subtitle'>
								<Subtitle1>联系我</Subtitle1>
							</div>
							<div className='card'>
								<List handleSelect={active => this.selectItem(active)}>
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
						{/* 核心技能 */}
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
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
									<ListItemText primaryText='redux . react-router . umijs . Next . RN' />
								</ListItem>
								<ListItem>
									<ListItemGraphic
										graphic={<img src='/angular.svg' alt='angular' />}
									/>
									<ListItemText primaryText='@ngrx/store . ionic . flutter' />
								</ListItem>
								<ListItem>
									<ListItemGraphic
										graphic={<img src='/node.png' alt='NodeJs' />}
									/>
									<ListItemText primaryText='express . koa . egg . GraphQL . Nest' />
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
									<ListItemText primaryText='Docker . Nginx .' />
								</ListItem>
							</List>
						</Cell>
						{/* 自我描述 */}
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<div className='subtitle'>
								<Subtitle1>自我描述</Subtitle1>
								<div className='fill'></div>
								<Button
									trailingIcon={<MaterialIcon icon='info' />}
									onClick={() => this.togglerRecent()}>
									秃头警告
								</Button>
							</div>
							<p className='indent'>
								长期作战一线的码农.4年时间参与了大大小小数十个项目.项目涉及PC.Mobile.
								微信平台.国外平台等各类项目.能够独立编码.主动尝试各种项目优化方案.习惯性快速学习.
								热衷学习热门技术.练习相关解决方案.
								<br />
								<small>
									tip:
									早期常常熬夜加班到天亮.对身心造成了极大的影响.目前不太能接受996或连续性加班.
								</small>
							</p>
						</Cell>
						{/* 工作经历 */}
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<div className='subtitle'>
								<Subtitle1>工作经历</Subtitle1>
							</div>
							<div className='cell-list'>
								<div className='cell-item'>
									<div className='item-content'>
										<img src='/logo_default.png' className='avatar' />
										<div className='item-info'>
											<strong>武汉无限未来科技有限公司 (软件服务)</strong>
											<p>研发部 / 前端开发工程师</p>
										</div>
										<div className='time-line'>
											<i>2019.9 ~ 2019.11</i>
										</div>
									</div>
									<div className='item-container'>
										<div className='chips'>
											参与项目:
											<ChipSet>
												<Chip
													label='微信-天马报告 [ 手机页 ]'
													handleInteraction={() => this.switchCase('pegasus')}
												/>
												<Chip
													label='电商App孵化 [ 双平台APP+手机页 . 电商 ]'
													handleInteraction={() =>
														this.switchCase('donew-store')
													}
												/>
												<Chip
													label='电商页面孵化 [ 跨终端企业站 . 响应式电商 ]'
													handleInteraction={() => this.switchCase('fpw')}
												/>
											</ChipSet>
										</div>
									</div>
								</div>
								{/* 上海雷神 */}
								<div className='cell-item'>
									<div className='item-content'>
										<img src='/leigod.jpg' className='avatar' />
										<div className='item-info'>
											<strong>上海雷神网络科技有限公司 (网游加速器)</strong>
											<p>NN语音研发部 / 前端开发工程师</p>
										</div>
										<div className='time-line'>
											<i>2019.7 ~ 2019.9</i>
										</div>
									</div>
									<div className='item-container'>
										<div className='chips'>
											参与项目:
											<ChipSet>
												<Chip
													label='微信-NN约玩 [ 手机页 ]'
													handleInteraction={() => this.switchCase('nnplayer')}
												/>
											</ChipSet>
										</div>
									</div>
								</div>
								{/* 兰迪 */}
								<div className='cell-item'>
									<div className='item-content'>
										<img src='/abc360.png' className='avatar' />
										<div className='item-info'>
											<strong>杭州旦悦科技 (少儿教育)</strong>
											<p>兰迪2组(教师) / 前端开发工程师</p>
										</div>
										<div className='time-line'>
											<i>2017.10 ~ 2019.3</i>
										</div>
									</div>
									<div className='item-container'>
										<div className='chips'>
											参与项目:
											<ChipSet>
												<Chip
													label='TPlus - [ 面向海外教师 ]'
													handleInteraction={() => this.switchCase('tp2')}
												/>
												<Chip
													label='EPlus - [ 业务运营项目 ]'
													handleInteraction={() => this.switchCase()}
												/>
												<Chip
													label='微信-作业 - [ 学生课后作业 ]'
													handleInteraction={() => this.switchCase('homework')}
												/>
											</ChipSet>
										</div>
									</div>
								</div>

								<div className='cell-item'>
									<div className='item-content'>
										<img src='/utang.png' className='avatar' />
										<div className='item-info'>
											<strong>成都悠唐网络科技有限公司 (软件服务)</strong>
											<p>开发组 / 前端开发工程师</p>
										</div>
										<div className='time-line'>
											<i>2017.03 ~ 2017.06</i>
										</div>
									</div>
									<div className='item-container'>
										<div className='chips'>
											参与项目:
											<ChipSet>
												<Chip
													label='U信 - [ API service ]'
													handleInteraction={() => this.switchCase()}
												/>
												<Chip
													label='5km - [ 阅读社交 ]'
													handleInteraction={() => this.switchCase()}
												/>
											</ChipSet>
										</div>
									</div>
								</div>

								<div className='cell-item'>
									<div className='item-content'>
										<img src='/yifudai.png' className='avatar' />
										<div className='item-info'>
											<strong>亿富贷商务顾问科技有限公司 (P2P金融)</strong>
											<p>技术部 / 程序员</p>
										</div>
										<div className='time-line'>
											<i>2015.06 ~ 2017.02</i>
										</div>
									</div>
									<div className='item-container'>
										<div className='chips'>
											参与项目:
											<ChipSet>
												<Chip
													label='企业官网'
													handleInteraction={() => this.switchCase()}
												/>
												<Chip
													label='微信服务'
													handleInteraction={() => this.switchCase()}
												/>
												<Chip
													label='混合应用'
													handleInteraction={() => this.switchCase()}
												/>
											</ChipSet>
										</div>
									</div>
								</div>
							</div>
						</Cell>
						{/* 教育经历 */}
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<div className='subtitle'>
								<Subtitle1>教育经历</Subtitle1>
							</div>

							<div className='cell-list'>
								<div className='cell-item'>
									<div className='item-content'>
										<img src='/bglg.jpg' className='avatar' />
										<div className='item-info'>
											<strong>北京理工大学</strong>
											<p>大专 / 计算机应用</p>
										</div>
										<div className='time-line'>
											<i>2018 ~ 2020</i>
										</div>
									</div>
								</div>

								<div className='cell-item'>
									<div className='item-content'>
										<img src='/udacity-cn.svg' className='avatar' />
										<div className='item-info'>
											<strong>优达学城</strong>
											<p>网教 / React</p>
										</div>
										<div className='time-line'>
											<i>2018</i>
										</div>
									</div>
								</div>

								<div className='cell-item'>
									<div className='item-content'>
										<img src='/tanzhou_logo.png' className='avatar' />
										<div className='item-info'>
											<strong>潭州学院</strong>
											<p>网教 / Java</p>
										</div>
										<div className='time-line'>
											<i>2014</i>
										</div>
									</div>
								</div>

								<div className='cell-item'>
									<div className='item-content'>
										<img src='/jianghan.jpg' className='avatar' />
										<div className='item-info'>
											<strong>江汉大学</strong>
											<p>自考 / 电子信息工程(辍学)</p>
										</div>
										<div className='time-line'>
											<i>2011 ~ 2014</i>
										</div>
									</div>
								</div>
							</div>
						</Cell>
					</Row>
				</Grid>
			</div>
		);
	}
}
