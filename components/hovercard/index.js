import './index.scss';

export default ({ children, className }) => {
	return <div className={['card', className].join(' ')}>{children}</div>;
};
