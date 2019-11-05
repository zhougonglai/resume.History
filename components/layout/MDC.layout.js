import TopAppBar, {
	TopAppBarFixedAdjust,
	TopAppBarIcon,
	TopAppBarRow,
	TopAppBarSection,
	TopAppBarTitle,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import List, {
	ListItem,
	ListItemText,
	ListGroup,
	ListGroupSubheader,
	ListDivider,
	ListItemGraphic,
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

export default class MDCLayout extends React.Component {
	state = {
		open: false,
		activeIndex: 0,
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

	render() {
		const { children } = this.props;
		return (
			<div className='root'>
				<Head />
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
							<ListGroupSubheader>类型</ListGroupSubheader>
							<List singleSelection selectedIndex={this.state.activeIndex}>
								<ListItem>
									<ListItemText primaryText='关于我' />
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
										aria-label='menu'
										hasRipple
										icon='menu'
										onClick={() => this.drawerHandle(true)}
									/>
								</TopAppBarIcon>
								<TopAppBarTitle>关于我</TopAppBarTitle>
							</TopAppBarSection>
							<TopAppBarSection align='end' role='toolbar'>
								<TopAppBarIcon actionItem tabIndex={1}>
									<MaterialIcon aria-label='info' hasRipple icon='info' />
								</TopAppBarIcon>
							</TopAppBarSection>
						</TopAppBarRow>
					</TopAppBar>
					<TopAppBarFixedAdjust>{children}</TopAppBarFixedAdjust>
				</DrawerAppContent>
			</div>
		);
	}
}
