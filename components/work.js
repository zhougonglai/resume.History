import Square from './square';
import { Headline5 } from '@material/react-typography';
import { Grid, Row, Cell } from '@material/react-layout-grid';

export default class extends React.Component {
	render() {
		return (
			<>
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
								<em className='mt-2 small'>日常代码训练</em>
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
								<em className='mt-2 small'>Electron + RTC训练</em>
							</Square>
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<Square>
								<div className='subtitle large'>跨平台混合应用</div>
								<ul>
									<li>uniapp❌</li>
									<li>mpx[各类小程序融合]</li>
									<li>Taro👌[h5/RN/各类小程序]</li>
									<li>Rax👌[h5/weex/阿里小程序开发平台/flutter(进行中)]</li>
								</ul>
								<em className='mt-2 small'>强业务/弱UI.</em>
							</Square>
						</Cell>
					</Row>
				</Grid>
			</>
		);
	}
}
