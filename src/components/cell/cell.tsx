import {JSX} from "react";

type Props = {
    children: string | JSX.Element | JSX.Element[] | number
}
const Cell = ({children}: Props) => {
    return (
        <div>{children}</div>
    )
}

export default Cell