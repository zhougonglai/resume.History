import App from 'next/app';
import { Snackbar } from '@material/react-snackbar';
import Router from 'next/router';

const Noop = ({ children }) => children;

class MyApp extends App {
	state = {
		toast: {
			open: false,
			message: '',
		},
	};

	giveToast = toast => {
		this.setState({ toast });
	};

	close = () => {
		this.setState({
			toast: {
				...this.state.toast,
				open: false,
			},
		});
	};

	render() {
		const { Component, pageProps } = this.props;
		const Layout = Component.Layout || Noop;
		const { open, message } = this.state.toast;

		return (
			<Layout>
				<Snackbar message={message} open={open} onClose={this.close} />
				<Component {...pageProps} giveToast={this.giveToast} />
			</Layout>
		);
	}
}

export default MyApp;
