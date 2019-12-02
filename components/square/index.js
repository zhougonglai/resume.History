import './index.scss';

export default ({ children }) => {
	return (
		<div className='square'>
			<span></span>
			<span></span>
			<span></span>
			<div className='content'>
				{children}
				<div className='action'>细节</div>
			</div>
		</div>
	);
};
