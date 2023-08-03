export type data = {
    id: number | string,
    icon: string,
    name: string,
    created: string,
    category: string,
    content: string,
    Dates: string
}

export type content = {
    id: number | string,
    icon: string,
    name: string,
    created: string,
    category: string,
    content: string,
    Dates: string
    archived: boolean
}

export type archiveMenu =
    {
        id: string
        icon: string;
        name: string;
        active: number;
        archive: number;
    }


export type todoTypes = {
    isOpenFormFoAdd: boolean,
    isShowArchive: boolean,
    edit: { isEdit: boolean, id: number },
    listOfArchive: { id: number, icon: string, name: string, created: string, category: string, Dates: string, content: string, archived: boolean }[],
    listOfTask: { id: number, icon: string, name: string, created: string, category: string, Dates: string, content: string, archived: boolean }[],
    logList: archiveMenu[],

}

