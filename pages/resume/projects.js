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
											<li>实力页</li>
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
									斗牛商城
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
									湖北法拍网
									<small>(中断)</small>
									<div className='fill'></div>
									<div className='tag'>跨终端响应式</div>
								</div>
								<div className='card-content'>
									<div className='desc'>
										<p>
											替代现行业务方案. made by{' '}
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
								<div className='card-media'>
									<img src='/WX20191107.png' />
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
				</Grid>
			</div>
		);
	}
}
