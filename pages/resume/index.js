import dynamic from 'next/dynamic';
import MDCLayout from '../../components/layout/MDC.layout';
import CircleLoading from '../../components/circle-loading';
import './index.scss';

const DynamicComponent = dynamic(() => import('../../components/index'), {
	loading: () => (
		<div className='fill flex align-center justify-center'>
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
				<DynamicComponent />
			</div>
		);
	}
}
