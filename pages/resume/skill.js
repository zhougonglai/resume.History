import MDCLayout from '../../components/layout/MDC.layout';
import CircleProcess from '../../components/circle-process';
import { Headline5 } from '@material/react-typography';
import { Grid, Row, Cell } from '@material/react-layout-grid';

export default class Skill extends React.Component {
	static Layout = MDCLayout;

	render() {
		return (
			<div className='skill-container'>
				<Grid>
					<Headline5 className='title'>前端技能</Headline5>
					<Row>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<CircleProcess title='Vue' label='熟练' process={75}>
								<ul>
									<li>多场景应用</li>
									<li>SSR - Nuxt</li>
									<li>Vuex,vue-router</li>
									<li>cli@3</li>
								</ul>
							</CircleProcess>
							<div className='alert'>
								tip: 自2017年初起从
								<code className='text-danger'>angularJs</code>
								转战<code className='text-danger'>Vue</code>
								时间长达2年有余.在"杭州旦悦科技"团队中长期使用Vue开发各类项目.
								其中包括企业级客户端-兰迪教师.
							</div>
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<CircleProcess title='React' label='较熟练' process={65}>
								<ul>
									<li>精品小巧</li>
									<li>SSR</li>
									<li>RN应用</li>
								</ul>
							</CircleProcess>
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<CircleProcess title='Angular' label='较熟练' process={60}>
								<ul>
									<li>企业级应用</li>
									<li>hybird混合应用 - ionic</li>
								</ul>
							</CircleProcess>
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<CircleProcess title='Flutter' label='上手' process={45}>
								<ul>
									<li>Material组件.布局</li>
									<li>请求 [http, dio]</li>
									<li>状态管理</li>
								</ul>
							</CircleProcess>
						</Cell>
					</Row>
					<Headline5 className='title'>后端相关</Headline5>
					<Row>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<CircleProcess title='NodeJs' label='上手' process={50}>
								<ul>
									<li>SSR渲染</li>
									<li>GraphQL/Apollo</li>
									<li>企业中台 - egg</li>
									<li>serverless</li>
									<li>soket.io</li>
								</ul>
							</CircleProcess>
						</Cell>
					</Row>
					<Headline5 className='title'>部署相关</Headline5>
					<Row>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<CircleProcess title='Docker' label='上手' process={50}>
								<ul>
									<li>Node容器</li>
									<li>Nginx容器</li>
								</ul>
							</CircleProcess>
						</Cell>
					</Row>
				</Grid>
			</div>
		);
	}
}
