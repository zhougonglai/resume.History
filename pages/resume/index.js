import dynamic from 'next/dynamic';
import MDCLayout from '../../components/layout/MDC.layout';
import CircleLoading from '../../components/circle-loading';
import './index.scss';

const Container = dynamic(() => import('../../components/resume'), {
	loading: (
		<div className='loading-fit'>
			<CircleLoading />
		</div>
	),
	ssr: false,
});

export default class Resume extends React.Component {
	static Layout = MDCLayout;

	render() {
		return (
			<div className='container'>
				<Container />
			</div>
		);
	}
}
