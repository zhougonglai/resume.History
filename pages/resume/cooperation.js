import MDCLayout from '../../components/layout/MDC.layout';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import TextField, { HelperText, Input } from '@material/react-text-field';
import Button from '@material/react-button';

export default class Cooperation extends React.Component {
	static Layout = MDCLayout;

	constructor(props) {
		super(props);
		this.inputEl = React.createRef();
	}
	state = {
		subject: '',
		body: '',
	};

	send = () => {
		const { subject, body } = this.state;
		if (subject) {
			const params = new URLSearchParams({ subject, body });
			window.open(`mailto:zhou_gong_lai@me.com?${params.toString()}`);
		} else {
			console.log(this.inputEl.current);
			this.inputEl.current.inputElement.focus();
			this.props.giveToast({
				message: '合作请注明主题',
				open: true,
			});
		}
	};

	render() {
		const { subject, body } = this.state;
		return (
			<div className='container-cooperation'>
				<Grid>
					<Row>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<div className='app-card'>
								<div className='card-header'>
									前言
									<div className='fill'></div>
								</div>
								<div className='card-content'>
									<ul>
										<li>⚠️不接烂尾楼</li>
										<li>⚠️不接急活</li>
										<li>⚠️不定目标</li>
									</ul>
								</div>
							</div>
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<div className='app-card'>
								<div className='card-header'>
									职责
									<div className='fill'></div>
								</div>
								<div className='card-content'>
									<p>
										各类客户端,包含 微信平台, 手机App, 系统桌面, 企业站, 电商,
										管理.
									</p>
									<p className='mt-2'>
										以功能性业务为主.提供产品交互图和相应素材即可.需要按设计图稿实施需另外
										<strong>加钱</strong>.推荐照搬现行同行业务.
									</p>
								</div>
							</div>
						</Cell>
						<Cell phoneColumns={4} tabletColumns={4} desktopColumns={4}>
							<div className='app-card'>
								<div className='card-header'>
									联系我
									<div className='fill'></div>
								</div>
								<div className='card-content'>
									<TextField
										label='subject'
										fullWidth
										helperText={<HelperText>主题</HelperText>}>
										<Input
											id='subject'
											type='text'
											placeholder='主题'
											aria-label='Full-Width Text Field'
											value={subject}
											ref={this.inputEl}
											onChange={e =>
												this.setState({ subject: e.currentTarget.value })
											}
										/>
									</TextField>
									<TextField
										className='mt-2'
										label='body'
										outlined
										textarea
										helperText={<HelperText>内容</HelperText>}
										fullWidth>
										<Input
											inputType='textarea'
											value={body}
											placeholder='内容'
											onChange={e =>
												this.setState({ body: e.currentTarget.value })
											}
										/>
									</TextField>
									<div className='flex'>
										<div className='fill'></div>
										<Button onClick={() => this.send()}>发送</Button>
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
