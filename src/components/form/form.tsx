import Button from "../button/button.tsx";
import {useDispatch, useSelector} from "react-redux";
import {addTask, closeFormForAdd, editTask} from "../../features/todoReducer.ts";
import nameIcons from "../../helpers/categortInIcon.ts";
import {useState} from "react";
import {selectTodo} from "../../features/todoReducerSlice.ts";
import {classesForm, inputClass} from "../../namesClasses/classesName.ts";

type Props = {
    edit: {
        isEdit: boolean,
        id: number
    }
}
const Form = ({edit}: Props) => {
    const {listOfTask} = useSelector(selectTodo);
    let [inputNameDefault,selectNameDefault,dateDefault,contentDefault] = ["","Task","",""];
    if (edit.isEdit) {
            const res = listOfTask.find((el) => el.id === edit.id);
            if (res) {
                inputNameDefault = res.name;
                selectNameDefault = res.category;
                dateDefault = res.Dates;
                contentDefault = res.content;
        }
    }
    const [inputName, setInputName] = useState(inputNameDefault);
    const [selectName, setSelectName] = useState(selectNameDefault);
    const [date, setDates] = useState(dateDefault);
    const [content, setContent] = useState(contentDefault);
    const dispatch = useDispatch();
    const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (edit) {
            dispatch(editTask({id: edit.id, name: inputName, category: selectName, Dates: date, content: content}))
        } else {
            const res = {
                id: Date.now(),
                icon: nameIcons(selectName),
                name: inputName,
                created: new Date().getFullYear() + '-' + ((new Date().getMonth() + 1) > 10 ? new Date().getMonth() + 1 : '0' + (new Date().getMonth() + 1)) + '-' + new Date().getDate(),
                category: selectName,
                content: content.length > 20 ? content.substring(0, 17) + '...' : content,
                Dates: date,
                archived: false
            }
            dispatch(addTask(res));
        }
        dispatch(closeFormForAdd())
    }
    const closeFormHandler = () => {
        dispatch(closeFormForAdd())
    }
    return (
        <form
            onSubmit={(e) => submitFormHandler(e)}
            className={classesForm}>
            <label form="name">Input name task</label>
            <input
                onChange={(e) => setInputName(e.target.value)}
                type="text"
                placeholder="name task"
                name="name"
                id="name"
                required
                value={inputName}
                className={inputClass}
            />
            <label htmlFor="category">select category</label>
            <select
                defaultValue={selectName}
                name="category"
                id="category"
                required
                onChange={(e) => setSelectName(e.target.value)}
                className={inputClass}
            >
                <option value="Task">Task</option>
                <option value="Random thought">Random thought</option>
                <option value="Idea">Idea</option>
            </select>
            <label htmlFor="camp-week">put time (if need)</label>
            <input onChange={(e) => setDates(e.target.value)}
                   type="date"
                   name="day"
                   id="camp-week"
                   min="2018-W18"
                   defaultValue={date}
                   className={inputClass}
            />
            <label htmlFor="content">write task</label>
            <textarea
                name="content"
                id="content"
                required
                defaultValue={content}
                className={inputClass}
                onChange={(e) => setContent(e.target.value)}></textarea>
            <div>
                <Button
                    task={()=>{}}
                    type={"submit"}
                >{edit && edit.isEdit ? 'Edit' : 'Add'}</Button>
                <Button
                    task={closeFormHandler}
                    type={"button"}
                >Cancel</Button>
            </div>
        </form>
    )
}
export default Form;