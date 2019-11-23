import MDCLayout from '../../components/layout/MDC.layout';
import CircleProcess from '../../components/circle-process';
import { Headline5, Subtitle1 } from '@material/react-typography';
import LinearProgress from '@material/react-linear-progress';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import { ChipSet, Chip } from '@material/react-chips';
import './skill.scss';

export default class Skill extends React.Component {
	static Layout = MDCLayout;

	render() {
		return (
			<div className='skill-container'>
				<Grid>
					<Headline5 className='title mb-2'>前端技能</Headline5>
					<Row>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<div className='flex justify-center'>
								<CircleProcess title='Vue' label='熟练' process={75}>
									<ul>
										<li>多场景应用</li>
										<li>SSR - Nuxt</li>
										<li>Vuex,vue-router</li>
										<li>vue-cli</li>
										<li>Cypress</li>
									</ul>
								</CircleProcess>
							</div>
							<div className='alert mt-2'>
								tip: 自2017年初起从
								<code className='text-danger'>angularJs</code>
								转战<code className='text-danger'>Vue</code>
								时间长达2年有余.在"杭州旦悦科技"团队中长期使用Vue开发各类项目.
								其中包括企业级客户端-兰迪教师客户端.
							</div>
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<div className='flex justify-center'>
								<CircleProcess title='React' label='较熟练' process={65}>
									<ul>
										<li>精品小巧</li>
										<li>SSR - Next</li>
										<li>RN应用</li>
									</ul>
								</CircleProcess>
							</div>
							<div className='alert mt-2'>
								tip: 最初从<code className='text-danger'>0.10.x</code>
								版本开始入门react.配合当时兴起的babel. 在2018年初在
								<code className='text-danger'>Udacity</code>
								完成React纳米专业课程.于2018年下半年.
								<code className='text-danger'>Vue圈RFC稿</code>
								事件.开始在团队推广React体系.得益于
								<code className='text-danger'>IceWork</code>
								在2019年初快速启动多个项目
							</div>
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<div className='flex justify-center'>
								<CircleProcess title='Angular' label='较熟练' process={60}>
									<ul>
										<li>企业级应用</li>
										<li>hybird混合应用 - ionic</li>
									</ul>
								</CircleProcess>
							</div>
							<div className='alert mt-2'>
								tip:接触前端最开始是从
								<code className='text-danger'>angularJs</code>开始的. 从
								<code className='text-danger'>angular TS</code>
								开始.大部分企业团队开始使用Vue和React.
								一直当作兴趣爱好来学习.最贴近企业业务的就是
								<code className='text-danger'>Ionic</code>.
							</div>
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<div className='flex justify-center'>
								<CircleProcess title='Flutter' label='上手' process={45}>
									<ul>
										<li>Material组件.布局</li>
										<li>请求 [http, dio]</li>
										<li>状态管理</li>
									</ul>
								</CircleProcess>
							</div>
							<div className='alert mt-2'>
								tip:入门级,会布局.对接请求.组织组件.管理状态.
							</div>
						</Cell>
					</Row>
					<Headline5 className='title my-2'>后端相关</Headline5>
					<Row>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<div className='flex justify-center'>
								<CircleProcess title='NodeJs' label='上手' process={50}>
									<ul>
										<li>SSR渲染</li>
										<li>GraphQL/Apollo</li>
										<li>企业中台 - egg</li>
										<li>serverless</li>
										<li>soket.io/WS</li>
									</ul>
								</CircleProcess>
							</div>
							<div className='alert mt-2'>
								tip:构建非主干<code className='text-danger'>中台/后台</code>
								服务.GraphQL/Apollo配合serverless更好的输出API.
								于雷神网络科技有限公司接触WebRTC.
							</div>
						</Cell>
					</Row>
					<Headline5 className='title my-2'>部署相关</Headline5>
					<Row>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<div className='flex justify-center'>
								<CircleProcess title='Docker' label='上手' process={50}>
									<ul>
										<li>Node容器</li>
										<li>Nginx容器</li>
									</ul>
								</CircleProcess>
							</div>
						</Cell>
					</Row>
					<Headline5 className='title my-2'>热身技能</Headline5>
					<Row>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<div className='subtitle'>
								<Subtitle1>前端相关</Subtitle1>
							</div>
							<div className='cell-list'>
								<div className='cell-item'>
									<div className='item-content align-center'>
										<div className='label mr-2'>SSR</div>
										<LinearProgress buffer={1} progress={0.25} />
									</div>
									<div className='item-container'>
										<ChipSet>
											<Chip label='Svelte' />
											<Chip label='Grid-Some' />
										</ChipSet>
									</div>
								</div>
								<div className='cell-item'>
									<div className='item-content align-center'>
										<div className='label mr-2'>Web Component</div>
										<LinearProgress buffer={1} progress={0.25} />
									</div>
									<div className='item-container'>
										<ChipSet>
											<Chip label='Lit-html' />
											<Chip label='Lit-element' />
											<Chip label='native' />
										</ChipSet>
									</div>
								</div>
								<div className='cell-item'>
									<div className='item-content align-center'>
										<div className='label  mr-2'>桌面平台</div>
									</div>
									<div className='item-container'>
										<ChipSet>
											<Chip label='Electron' />
										</ChipSet>
									</div>
								</div>
							</div>
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<div className='subtitle'>
								<Subtitle1>后端相关</Subtitle1>
							</div>
							<div className='cell-list'>
								<div className='cell-item'>
									<div className='item-content align-center'>
										<div className='label mr-2'>Golang</div>
										<LinearProgress buffer={1} progress={0.25} />
									</div>
									<div className='item-container'>
										<ChipSet>
											<Chip label='Gin' />
										</ChipSet>
									</div>
								</div>
							</div>
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<div className='subtitle'>
								<Subtitle1>机器学习</Subtitle1>
							</div>
							<div className='cell-list'>
								<div className='cell-item'>
									<div className='item-content align-center'>
										<div className='label mr-2'>Python</div>
										<LinearProgress buffer={1} progress={0.25} />
									</div>
									<div className='item-container'>
										<ChipSet>
											<Chip label='pandas' />
											<Chip label='Matplotlib' />
											<Chip label='scikit-learn' />
										</ChipSet>
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
