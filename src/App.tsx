import './App.css'
import TableMain from "./components/tableMain/tableMain.tsx";
import LogTable from "./components/logTable/logTable.tsx";
import Form from "./components/form/form.tsx";
import {useDispatch, useSelector} from "react-redux";
import {selectTodo} from "./features/todoReducerSlice.ts";
import ShowArchive from "./components/archiveTable/showArchive.tsx";

function App() {
    const dispatch = useDispatch();
    const {isOpenFormFoAdd, isShowArchive, edit} = useSelector(selectTodo);

    return (
        <>
            <TableMain/>
            <LogTable/>
            {isOpenFormFoAdd && <Form edit={edit}/>}
            {isShowArchive && <ShowArchive/>}
        </>
    )
}

export default App
