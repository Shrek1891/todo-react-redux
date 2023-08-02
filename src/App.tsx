import TableMain from "./view/tableMain.tsx";
import LogTable from "./view/logTable.tsx";
import Form from "./components/form/form.tsx";
import {useSelector} from "react-redux";
import {selectTodo} from "./features/todoReducerSlice.ts";
import ShowArchive from "./view/showArchive.tsx";
function App() {
    const {isOpenFormFoAdd, isShowArchive, edit} = useSelector(selectTodo);
    return (
        <div className="
            flex
            flex-col
            relative
            items-center
            justify-center
            ">
            <TableMain/>
            <LogTable/>
            {isOpenFormFoAdd && <Form edit={edit}/>}
            {isShowArchive && <ShowArchive/>}
        </div>
    )
}
export default App
