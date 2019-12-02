import MDCLayout from '../../components/layout/MDC.layout';
import Square from '../../components/square';
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
							<Square>
								<div className='subtitle large'>Flutter通用型业务</div>
								<ul>
									<li>常规商城类型布局.</li>
									<li>路由[首页,列表,购物车,我的].</li>
									<li>请求.</li>
									<li>数据持久化.</li>
								</ul>
							</Square>
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<Square>
								<div className='subtitle large'>Electron-声网RTC/RTM</div>
								<ul>
									<li>在线社交系统</li>
									<li>语音即时消息</li>
									<li>语音/视频通话</li>
								</ul>
							</Square>
						</Cell>
					</Row>
				</Grid>
			</div>
		);
	}
}
