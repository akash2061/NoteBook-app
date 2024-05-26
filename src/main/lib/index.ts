import { appDirectoryName, fileEncoding } from "@shared/constants"
import { NoteInfo } from "@shared/models"
import { GetNotes } from "@shared/types"
import { ensureDir, readdir, stat } from "fs-extra"
import { homedir } from "os"

export const getRootDir = () => {
    return `${homedir()}/${appDirectoryName}`
}

export const getNotes: GetNotes = async () => {
    const rootdir = getRootDir()

    await ensureDir(rootdir)

    const noteFileNames = await readdir(rootdir, {
        encoding: fileEncoding,
        withFileTypes: false
    })

    const notes = noteFileNames.filter((fileName) => fileName.endsWith('.md'))

    return Promise.all(notes.map(getNoteInfoFromFilename))
}

export const getNoteInfoFromFilename = async (filename: string): Promise<NoteInfo> => {
    const fileStats = await stat(`$(getRootDir())/${filename}`)

    return {
        title: filename.replace(/\.md$/, ''),
        lastEditTime: fileStats.mtimeMs
    }
}