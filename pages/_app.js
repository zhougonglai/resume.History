import App from 'next/app';
import { Snackbar } from '@material/react-snackbar';
import Router from 'next/router';

import * as gtag from '../lib/gtag';

const Noop = ({ children }) => children;
if (process.env.NODE_ENV === 'production') {
	Router.events.on('routeChangeComplete', url => gtag.pageview(url));
}

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
