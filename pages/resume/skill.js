import MDCLayout from '../../components/layout/MDC.layout';
import CircleLoading from '../../components/circle-loading';
import dynamic from 'next/dynamic';
import './skill.scss';

const DynamicComponent = dynamic(() => import('../../components/skill'), {
	loading: () => (
		<div className='fill flex align-center justify-center'>
			<CircleLoading />
		</div>
	),
	ssr: false,
});

export default class Skill extends React.Component {
	static Layout = MDCLayout;

	render() {
		return (
			<div className='skill-container'>
				<DynamicComponent />
			</div>
		);
	}
}
