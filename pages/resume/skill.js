import MDCLayout from '../../components/layout/MDC.layout';
import CircleProcess from '../../components/circle-process';
import HoverCard from '../../components/hovercard';
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
							<HoverCard className='hue-7'>
								<div className='subtitle large  ml-2'>Vue</div>
								<ul>
									<li>多场景应用</li>
									<li>SSR - Nuxt</li>
									<li>Vuex,vue-router</li>
									<li>vue-cli</li>
									<li>Cypress</li>
								</ul>
								<div className='alert mt-2'>
									tip: 自2017年初起从
									<code className='text-danger'>angularJs</code>
									转战<code className='text-danger'>Vue</code>
									时间长达2年有余.在"杭州旦悦科技"团队中长期使用Vue开发各类项目.
									其中包括企业级客户端-兰迪教师客户端.
								</div>
							</HoverCard>
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<HoverCard className='hue-7'>
								<div className='subtitle large ml-2'>React</div>
								<ul>
									<li>精品小巧</li>
									<li>SSR - Next</li>
									<li>RN应用</li>
								</ul>
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
							</HoverCard>
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<HoverCard className='hue-6'>
								<div className='subtitle large ml-2'>Angular</div>
								<ul>
									<li>企业级应用</li>
									<li>hybird混合应用 - ionic</li>
								</ul>
								<div className='alert mt-2'>
									tip:接触前端最开始是从
									<code className='text-danger'>angularJs</code>开始的. 从
									<code className='text-danger'>angular TS</code>
									开始.大部分企业团队开始使用Vue和React.
									一直当作兴趣爱好来学习.最贴近企业业务的就是
									<code className='text-danger'>Ionic</code>.
								</div>
							</HoverCard>
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<HoverCard className='hue-3'>
								<div className='subtitle large ml-2'>Flutter</div>
								<ul>
									<li>Material组件.布局</li>
									<li>请求 [http, dio]</li>
									<li>状态管理</li>
								</ul>
								<div className='alert mt-2'>
									tip:入门级,会布局.对接请求.组织组件.管理状态.
								</div>
							</HoverCard>
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<HoverCard className='hue-2'>
								<div className='subtitle large ml-2'>服务端渲染</div>
								<ul>
									<li>Svelte</li>
									<li>Grid-Some</li>
								</ul>
							</HoverCard>
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<HoverCard className='hue-2'>
								<div className='subtitle large ml-2'>混合应用</div>
								<ul>
									<li>Taro</li>
									<li>Uni-app</li>
									<li>Electron</li>
								</ul>
							</HoverCard>
						</Cell>
					</Row>
					<Headline5 className='title my-2'>后端相关</Headline5>
					<Row>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<HoverCard className='hue-5'>
								<div className='subtitle large ml-2'>NodeJs</div>
								<ul>
									<li>SSR渲染</li>
									<li>GraphQL/Apollo</li>
									<li>企业中台 - egg</li>
									<li>serverless</li>
									<li>soket.io/WS</li>
								</ul>
								<div className='alert mt-2'>
									tip:构建非主干<code className='text-danger'>中台/后台</code>
									服务.GraphQL/Apollo配合serverless更好的输出API.
									于雷神网络科技有限公司接触WebRTC.
								</div>
							</HoverCard>
						</Cell>
					</Row>
					<Headline5 className='title my-2'>部署相关</Headline5>
					<Row>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<HoverCard className='hue-4'>
								<div className='subtitle large ml-2'>Docker</div>
								<ul>
									<li>Node容器</li>
									<li>Nginx容器</li>
								</ul>
							</HoverCard>
						</Cell>
					</Row>

					<Headline5 className='title my-2'>机器学习</Headline5>
					<Row>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<HoverCard className='hue-2'>
								<div className='subtitle large ml-2'>Python</div>
								<ul>
									<li>pandas</li>
									<li>Matplotlib</li>
									<li>scikit-learn</li>
								</ul>
							</HoverCard>
						</Cell>
					</Row>
				</Grid>
			</div>
		);
	}
}
