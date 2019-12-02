import './index.scss';

export default ({ children, className }) => {
	return <div className={['hover-card', className].join(' ')}>{children}</div>;
};
