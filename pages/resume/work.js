import dynamic from 'next/dynamic';
import MDCLayout from '../../components/layout/MDC.layout';
import CircleLoading from '../../components/circle-loading';

const DynamicComponent = dynamic(() => import('../../components/work'), {
	loading: () => (
		<div className='fill flex align-center justify-center'>
			<CircleLoading />
		</div>
	),
	ssr: false,
});

export default class Work extends React.Component {
	static Layout = MDCLayout;

	render() {
		return (
			<div className='work-container'>
				<DynamicComponent />
			</div>
		);
	}
}
