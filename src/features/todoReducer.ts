import {createSlice} from "@reduxjs/toolkit";
import categortInIcon from "../helpers/categortInIcon.ts";

const todoReducer = createSlice({
    name: '@@todo',
    initialState: {
        isOpenFormFoAdd: false,
        isShowArchive: false,
        edit: {isEdit: false, id: 0},
        listOfArchive: [
            {
                id: 8,
                icon: 'random_thought',
                name: 'The theory of evolution',
                created: '2022-01-01',
                category: 'Random thought',
                content: 'The Evolution of Humanity',
                Dates: ' ',

            }
        ],
        listOfTask: [
            {
                id: 1,
                icon: 'task',
                name: 'Shopping List',
                created: '2022-01-01',
                category: 'Task',
                content: 'Groceries',
                Dates: ' ',

            },
            {
                id: 2,
                icon: 'random_thought',
                name: 'The theory of evolution',
                created: '2022-01-01',
                category: 'Random thought',
                content: 'The Evolution of Humanity',
                Dates: ' ',

            },
            {
                id: 3,
                icon: 'idea',
                name: 'New idea',
                created: '2022-01-01',
                category: 'Idea',
                content: 'Implement a new idea',
                Dates: ' ',

            }, {
                id: 4,
                icon: 'idea',
                name: 'New idea',
                created: '2022-01-01',
                category: 'Idea',
                content: 'Implement a new idea',
                Dates: ' ',

            }, {
                id: 5,
                icon: 'idea',
                name: 'New idea',
                created: '2022-01-01',
                category: 'Idea',
                content: 'Implement a new idea',
                Dates: ' ',

            },
            {
                id: 6,
                icon: 'idea',
                name: 'New idea',
                created: '2022-01-01',
                category: 'Idea',
                content: 'Implement a new idea',
                Dates: ' ',

            },
            {
                id: 7,
                icon: 'idea',
                name: 'New idea',
                created: '2022-01-01',
                category: 'Idea',
                content: 'Implement a new idea',
                Dates: '',

            }
        ],
        logList: [{
            id: 'taskId',
            icon: 'task',
            name: 'Task',
            active: 0,
            archive: 0,
        }, {
            id: 'ideaId',
            icon: 'idea',
            name: 'Idea',
            active: 0,
            archive: 0,
        }, {
            id: 'ThouthId',
            icon: 'random_thought',
            name: 'Random thought',
            active: 0,
            archive: 0,
        }],


    },
    reducers: {
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
                    el.Dates = `${el.Dates} , ${action.payload.Dates}`
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
    editArchive
} = todoReducer.actions;