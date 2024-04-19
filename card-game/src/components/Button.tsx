import classNames from 'classnames';
interface ButtonProps {
	title: string;
	onClick?: () => void;
	className?: string;
	disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ title, onClick, className, disabled }) => {
	return (
	<button
		className={classNames(
		"transform transition duration-300 ease-in-out hover:scale-105 rounded-lg text-white font-bold",
		"px-1 py-0.5 text-xxs sm:px-2 sm:py-1 sm:text-xs md:px-2 md:py-1 md:text-xs",
		"bg-blue-500 hover:bg-blue-300",
		className,
		{ 'opacity-50 cursor-not-allowed': disabled }
		)}
		onClick={onClick}
		disabled={disabled}
	>
		{title}
	</button>
	);
  };
  
