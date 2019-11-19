import dynamic from 'next/dynamic';
import MDCLayout from '../../components/layout/MDC.layout';
import CircleLoading from '../../components/circle-loading';
import './projects.scss';

const Container = dynamic(() => import('../../components/projects'), {
	loading: (
		<div className='loading-fit'>
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
				<Container />
			</div>
		);
	}
}
