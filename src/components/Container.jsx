export default function Container({ children, className, ...res }) {
	return (
		<div
			className={`container px-4 m-auto max-w-7xl${className ? ' ' + className : ''}`}
			{...res}
		>
			{children}
		</div>
	)
}
