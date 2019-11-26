import TopAppBar, {
	TopAppBarFixedAdjust,
	TopAppBarIcon,
	TopAppBarRow,
	TopAppBarSection,
	TopAppBarTitle,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import Router from 'next/router';
import List, {
	ListItem,
	ListItemText,
	ListGroup,
	ListDivider,
} from '@material/react-list';
import Drawer, {
	DrawerHeader,
	DrawerSubtitle,
	DrawerTitle,
	DrawerContent,
	DrawerAppContent,
} from '@material/react-drawer';
import Head from '../head';
import './MDC.layout.scss';

const pathMatch = {
	'/resume': {
		activeIndex: 0,
		type: '关于我',
	},
	'/resume/projects': {
		activeIndex: 1,
		type: '项目经历',
	},
	'/resume/skill': {
		activeIndex: 2,
		type: '技能图谱',
	},
	'/resume/cooperation': {
		activeIndex: 3,
		type: '合作',
	},
	'/resume/work': {
		activeIndex: 4,
		type: '手头工作',
	},
};

export default class MDCLayout extends React.Component {
	state = {
		open: false,
	};

	/**
	 * 切换 Drawer
	 * @param {boolean} [status]
	 */
	drawerHandle = status => {
		this.setState({
			open: status,
		});
	};

	switchRouter = activeIndex => {
		this.setState(
			{
				open: false,
			},
			() => {
				if (!activeIndex) {
					Router.push('/resume').then(() => {
						this.setState(pathMatch['/resume']);
					});
				} else if (activeIndex === 1) {
					Router.push('/resume/projects').then(() => {
						this.setState(pathMatch['/resume/projects']);
					});
				} else if (activeIndex === 2) {
					Router.push('/resume/skill').then(() => {
						this.setState(pathMatch['/resume/skill']);
					});
				} else if (activeIndex === 3) {
					Router.push('/resume/cooperation').then(() => {
						this.setState(pathMatch['/resume/cooperation']);
					});
				} else if (activeIndex === 4) {
					Router.push('/resume/work').then(() => {
						this.setState(pathMatch['/resume/work']);
					});
				}
			},
		);
	};

	componentDidMount() {
		this.setState(pathMatch[Router.pathname]);
		Router.events.on('push', e => {
			this.setState(e);
		});
	}

	render() {
		const { children } = this.props;
		const { type, activeIndex } = this.state;
		return (
			<div className='root'>
				<Head title={type} />
				<Drawer
					modal
					open={this.state.open}
					onClose={() => this.drawerHandle(false)}>
					<DrawerHeader>
						<DrawerTitle tag='h2'>个人简历</DrawerTitle>
						<DrawerSubtitle tag='h4'>前端开发工程师</DrawerSubtitle>
					</DrawerHeader>
					<DrawerContent>
						<ListGroup>
							<ListDivider tag='div' />
							<List
								singleSelection
								selectedIndex={activeIndex}
								handleSelect={index => this.switchRouter(index)}>
								<ListItem>
									<ListItemText primaryText='关于我' />
								</ListItem>
								<ListItem>
									<ListItemText primaryText='项目经历' />
								</ListItem>
								<ListItem>
									<ListItemText primaryText='技能图谱' />
								</ListItem>
								<ListItem>
									<ListItemText primaryText='合作' />
								</ListItem>
								<ListItem>
									<ListItemText primaryText='手头工作' />
								</ListItem>
							</List>
							<ListDivider tag='div' />
						</ListGroup>
					</DrawerContent>
				</Drawer>
				<DrawerAppContent className='drawer-app-content'>
					<TopAppBar fixed>
						<TopAppBarRow>
							<TopAppBarSection align='start'>
								<TopAppBarIcon navIcon tabIndex={0}>
									<MaterialIcon
										hasRipple
										aria-label='menu'
										icon='menu'
										onClick={() => this.drawerHandle(true)}
									/>
								</TopAppBarIcon>
								<TopAppBarTitle>{type}</TopAppBarTitle>
							</TopAppBarSection>
						</TopAppBarRow>
					</TopAppBar>
					<TopAppBarFixedAdjust>{children}</TopAppBarFixedAdjust>
				</DrawerAppContent>
			</div>
		);
	}
}
