import './circle-process.scss';

export default ({ children, title, label, process }) => {
	const circleRage = Math.PI * 100 * 2 * 0.75;
	return (
		<div className='circle-process'>
			<svg className='credit_card ignore'>
				<circle
					className='fill-fit'
					fill='transparent'
					r='100'
					cx='50%'
					cy='50%'
					strokeDasharray={circleRage}
					strokeDashoffset={0}></circle>
				<circle
					className='bar'
					fill='transparent'
					r='100'
					cx='50%'
					cy='50%'
					strokeDasharray={circleRage}
					strokeDashoffset={circleRage * ((100 - process) / 100)}></circle>
			</svg>
			<div className='circle-content'>
				<div className='content-title title xx-large bold'>{title}</div>
				<div className='content-subtitle mt-1'>{label}</div>
				<div className='content-desc mt-1'>{children}</div>
			</div>
		</div>
	);
};
