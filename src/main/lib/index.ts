import { homedir } from "os"

export const getRootDir = () => {
    return `${homedir()}/NoteBook`
}