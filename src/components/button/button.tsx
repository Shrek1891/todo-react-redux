type Props = {
    children: string;
    task: () => void;
    type: "button" | "submit" | "reset";
}
const Button = ({children, task, type}: Props) => {
    return (
        <button
            className="
                body-font
                font-lugrasimo
                bg-[white]
                hover:bg-[#646cff]
                hover:text-white
                text-black
                font-bold
                 py-2
                 px-4
                 rounded-full
                 m-2
                 cursor-pointer
                 delay-200
                 border
                 border-indigo-600
                 shadow-lg
                 "
            onClick={() => task()}
            type={type}>
            {children}
        </button>
    )
}
export default Button;