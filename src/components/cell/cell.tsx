import {JSX} from "react";

type Props = {
    children: string | JSX.Element | JSX.Element[] | number,
    className?: string
}
const Cell = ({children, className}: Props) => {
    return (
        <div className={className}>{children}</div>
    )
}

export default Cell