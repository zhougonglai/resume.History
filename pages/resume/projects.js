import MDCLayout from '../../components/layout/MDC.layout';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import { Headline5 } from '@material/react-typography';
import Button from '@material/react-button';
import MaterialIcon from '@material/react-material-icon';
import './projects.scss';

export default class Projects extends React.Component {
	static Layout = MDCLayout;

	render() {
		return (
			<div className='container-projects'>
				<Grid>
					<Headline5 className='title'>武汉无限未来科技有限公司</Headline5>
					<Row>
						{/* 天马报告 */}
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<div className='app-card'>
								<div className='card-header'>
									天马报告
									<small>(中断)</small>
									<div className='fill'></div>
									<div className='tag'>微信网页</div>
								</div>
								<div className='card-content'>
									<div className='desc'>
										<p>
											后端任务 (made by <code className='text-danger'>koa</code>
											):
										</p>
										<ul>
											<li>微信网页授权</li>
											<li>微信消息</li>
											<li>微信jsConfig</li>
											<li>微信统一下单 -> sdk支付 -> 退款协议(未对接完成)</li>
										</ul>
										<p>
											前端任务 (made by
											<code className='text-danger'>Next for React</code>):
										</p>
										<ul>
											<li>Landing Page 落地页</li>
											<li>登录页</li>
											<li>示例页</li>
										</ul>
									</div>
								</div>
								<div className='actions'>
									<Button
										dense
										outlined
										target='_blank'
										href='https://github.com/zhougonglai/wechat-koa'
										trailingIcon={<MaterialIcon icon='launch' />}>
										后端代码
									</Button>
									<Button
										dense
										outlined
										target='_blank'
										href='https://nextjs.zhougonglai.now.sh/'
										trailingIcon={<MaterialIcon icon='launch' />}>
										前端示例
									</Button>
								</div>
							</div>
						</Cell>
						{/* 斗牛商城 */}
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<div className='app-card'>
								<div className='card-header'>
									商城App孵化
									<small>(中断)</small>
									<div className='fill'></div>
									<div className='tag'>Android</div>
									<div className='tag'>IOS</div>
									<div className='tag'>手机页面</div>
								</div>
								<div className='card-content'>
									<div className='desc'>
										<p>
											前端混合应用. made by{' '}
											<code className='text-danger'>Ionic for Angular</code>
										</p>
										<ul>
											<li>
												Tabs 基础
												<ul>
													<li>Home 首页</li>
													<li>SearchResult 查找页</li>
													<li>Cart 购物车</li>
													<li>User 用户</li>
												</ul>
											</li>
											<li>
												Share 共享
												<ul>
													<li>components 组件</li>
													<li>model 数据模型</li>
													<li>service 服务</li>
													<li>store 数据持久</li>
													<li>utils 工具</li>
												</ul>
											</li>
										</ul>
									</div>
									<div className='desc mt-2'>
										赋能: 微信平台.Android平台.IOS平台.手机浏览器终端
									</div>
								</div>
								<div className='actions'>
									<Button
										dense
										outlined
										target='_blank'
										href='https://www.pgyer.com/1JnN'
										trailingIcon={<MaterialIcon icon='launch' />}>
										<MaterialIcon icon='android' />
									</Button>
									<Button
										dense
										outlined
										target='_blank'
										href='https://storekit.zhougonglai.now.sh'
										trailingIcon={<MaterialIcon icon='launch' />}>
										前端示例
									</Button>
									<Button
										dense
										outlined
										href='https://github.com/zhougonglai/store_kit'
										trailingIcon={<MaterialIcon icon='launch' />}>
										前端代码
									</Button>
								</div>
							</div>
						</Cell>
						{/* 湖北法拍网 */}
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<div className='app-card'>
								<div className='card-header'>
									电商孵化
									<small>(中断)</small>
									<div className='fill'></div>
									<div className='tag'>跨终端响应式</div>
								</div>
								<div className='card-content'>
									<div className='desc'>
										<p>
											以“湖北法拍网”业务为蓝本. made by
											<code className='text-danger'>Next with React</code>
										</p>
										<ul className='mb-2'>
											<li>住宅类</li>
											<li>别墅类</li>
											<li>商铺类</li>
											<li>搜索页</li>
										</ul>
										<small className='text-gray'>
											tip: 新设计考虑可跨终端的响应式布局设计方案
										</small>
										<br />
										<Button
											dense
											outlined
											target='_blank'
											className='my-2'
											href='http://hbfpw.net/mobile/'
											trailingIcon={<MaterialIcon icon='launch' />}>
											现行业务(手机打开)
										</Button>
										<br />
										或微信公众号搜索"湖北法拍网"
									</div>
								</div>
								<div className='actions'>
									<Button
										dense
										outlined
										target='_blank'
										href='https://hbfpw.zhougonglai.now.sh/home'
										trailingIcon={<MaterialIcon icon='launch' />}>
										设计方案样板
									</Button>
									<Button
										dense
										outlined
										target='_blank'
										href='https://github.com/zhougonglai/hbfpw'
										trailingIcon={<MaterialIcon icon='launch' />}>
										代码
									</Button>
								</div>
							</div>
						</Cell>
					</Row>

					<Headline5 className='title my-2'>上海雷神网络科技有限公司</Headline5>
					<Row>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<div className='app-card'>
								<div className='card-header'>
									NN约玩
									<div className='fill' />
									<div className='tag'>微信网页</div>
								</div>
								<div className='card-content'>
									项目简介: made by <code className='text-danger'>vue@2.x</code>
									<div className='card-media'>
										<img src='/WX20191107.png' />
									</div>
								</div>
								<div className='actions'>
									线上地址: 微信公众号搜索"NN约玩"
									<div className='fill'></div>
									<Button
										dense
										outlined
										target='_blank'
										href='https://mand-starter.zhougonglai.now.sh/'
										trailingIcon={<MaterialIcon icon='launch' />}>
										原型项目
									</Button>
								</div>
							</div>
						</Cell>
					</Row>

					<Headline5 className='title my-2'>杭州旦悦科技</Headline5>
					<Row>
						{/* TPlus V2 */}
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<div className='app-card'>
								<div className='card-header'>
									TPlus V2.x (教师客户端)
									<div className='fill'></div>
									<div className='tag'>国际客户服务</div>
									<div className='tag'>国际推广</div>
								</div>
								<div className='card-content'>
									<div className='desc'>
										项目业务: create by{' '}
										<code className='text-danger'>vue with iview UI</code>
										<ul>
											<li>
												入职流程:
												<ul>
													<li>注册</li>
													<li>
														申请 [ <i>授课</i>, <i>公开课</i> ] 老师
													</li>
													<li>预约远程面试</li>
													<li>
														入职资料学习 [ <i>Doc</i>, <i>PPT</i>, <i>考题</i> ]
													</li>
													<li>设定上课时间表</li>
													<li>提交信用卡等信息</li>
												</ul>
											</li>
											<li>
												执教:
												<ul>
													<li>课表</li>
													<li>备课</li>
													<li>课后评价/评级工作</li>
												</ul>
											</li>
											<li>
												推广/深化:
												<ul>
													<li>FaceBook / Twetter 分享/邀请</li>
													<li>UV / PV 等数据统计</li>
												</ul>
											</li>
										</ul>
									</div>
									<div className='desc'>项目描述:</div>
									<p className='desc mt-2 smaller text-gray'>
										项目描述: 从 2017年10月起开始接手 TPlus项目. 当即开启
										V2.0的重构方案. 持续至 2018年10月 提出V3.0版本设计方案.
										2019年开始着手动工
									</p>
								</div>
								<div className='actions'>
									<Button
										dense
										outlined
										target='_blank'
										href='https://teacher.landi.com'
										trailingIcon={<MaterialIcon icon='launch' />}>
										线上地址
									</Button>
								</div>
							</div>
						</Cell>

						{/* TPlus V3 */}
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}></Cell>
					</Row>
				</Grid>
			</div>
		);
	}
}
