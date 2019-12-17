import MDCLayout from '../../components/layout/MDC.layout';
import dynamic from 'next/dynamic';
import CircleLoading from '../../components/circle-loading';
import './projects.scss';

const DynamicComponent = dynamic(() => import('../../components/projects'), {
	loading: () => (
		<div className='fill flex align-center justify-center'>
			<CircleLoading />
		</div>
	),
	ssr: false,
});

export default class Projects extends React.Component {
	static Layout = MDCLayout;
	render() {
		return (
			<div className='container-projects'>
				<DynamicComponent />
			</div>
		);
	}
}
