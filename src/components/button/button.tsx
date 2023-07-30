type Props = {
    children: string;
    task: () => void;
    type: "button" | "submit" | "reset";
}
const Button = ({children, task, type}: Props) => {
    return (
        <button
            className="button"
            onClick={() => task()}
            type={type}>
            {children}
        </button>
    )
}
export default Button;