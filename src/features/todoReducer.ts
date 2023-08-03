import {createSlice} from "@reduxjs/toolkit";
import categortInIcon from "../helpers/categortInIcon.ts";
import {content, todoTypes} from "../types/types.ts";


const initialState: todoTypes = {
    isOpenFormFoAdd: false,
    isShowArchive: false,
    edit: {isEdit: false, id: 0},
    listOfArchive: [],
    listOfTask: [],
    logList: [{
        id:'task',
        icon: 'task',
        name: 'Task',
        active: 0,
        archive: 0
    }, {
        id: 'idea',
        icon: 'idea',
        name: 'Idea',
        active: 0,
        archive: 0
    }, {
        id: 'random_thought',
        icon: 'random_thought',
        name: 'Random thought',
        active: 0,
        archive: 0
    }],

}
const todoReducer = createSlice({
    name: '@@todo',
    initialState ,
    reducers: {

        setListOfTask: (state, action) => {
           state.listOfTask = action.payload.filter((el: content) => {
               return !el.archived
           })
        },
        setArchiveList: (state, action) => {
            state.listOfArchive = action.payload.filter((el: content) => {
                return el.archived
            })
        },
        openFormForAdd: (state, action) => {
            state.isOpenFormFoAdd = true
            state.edit = action.payload
        },
        closeFormForAdd: (state) => {
            state.isOpenFormFoAdd = false
        },
        addTask: (state, action) => {
            state.listOfTask.push(action.payload);
        },
        setTask: (state, action) => {
            state.listOfTask = action.payload
        },
        getLogList: (state,) => {
            state.logList.forEach((item) => {
                item.active = state.listOfTask.filter((el) => {
                    return el.icon === item.icon
                }).length;
                item.archive = state.listOfArchive.filter((el) => {
                    return el.icon === item.icon
                }).length
            })
        },
        closeArchiveTable: (state) => {
            state.isShowArchive = false
        },
        openArchiveTable: (state) => {
            state.isShowArchive = true
        },
        deleteTask: (state, action) => {
            state.listOfTask = state.listOfTask.filter((el) => {
                return el.id !== action.payload
            })
        },
        archiveTask: (state, action) => {
            const res = state.listOfTask.filter((el) => {
                return el.id === action.payload
            });
            state.listOfTask = state.listOfTask.filter((el) => {
                return el.id !== action.payload
            });
            state.listOfArchive.push(res[0]);
            return state
        },
        editTask: (state, action) => {
            state.listOfTask = state.listOfTask.map((el) => {
                if (el.id === action.payload.id) {
                    el.name = action.payload.name
                    el.category = action.payload.category
                    el.Dates !== action.payload.Dates && action.payload.Dates ? `${el.Dates} , ${action.payload.Dates}` : ""
                    el.content = action.payload.content
                    el.icon = categortInIcon(action.payload.category)
                }
                return el
            })
        },
        deleteFromArchive: (state, action) => {
            state.listOfArchive = state.listOfArchive.filter((el) => {
                return el.id !== action.payload
            })
        },
        unArchive: (state, action) => {
            const res = state.listOfArchive.filter((el) => {
                return el.id === action.payload
            });
            state.listOfArchive = state.listOfArchive.filter((el) => {
                return el.id !== action.payload
            });
            state.listOfTask.push(res[0]);
            return state
        },
        editArchive: (state, action) => {
            state.listOfArchive = state.listOfArchive.map((el) => {
                if (el.id === action.payload.id) {
                    el.name = action.payload.name
                    el.category = action.payload.category
                    el.Dates = action.payload.Dates
                    el.content = action.payload.content
                    el.icon = categortInIcon(action.payload.category)
                }
                return el
            })
        }
    }
})

export const todo = todoReducer.reducer;
export const {
    openFormForAdd,
    closeFormForAdd,
    addTask,
    setTask,
    getLogList,
    closeArchiveTable,
    openArchiveTable,
    deleteTask,
    archiveTask,
    editTask,
    deleteFromArchive,
    unArchive,
    editArchive,
    setListOfTask,
    setArchiveList
} = todoReducer.actions;