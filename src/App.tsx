import TableMain from "./components/tableMain/tableMain.tsx";
import LogTable from "./components/logTable/logTable.tsx";
import Form from "./components/form/form.tsx";
import {useSelector} from "react-redux";
import {selectTodo} from "./features/todoReducerSlice.ts";
import ShowArchive from "./components/archiveTable/showArchive.tsx";
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
