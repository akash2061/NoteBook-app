import { appDirectoryName, fileEncoding } from "@shared/constants"
import { NoteInfo } from "@shared/models"
import { GetNotes, ReadNote, WriteNote } from "@shared/types"
import { ensureDir, readdir, stat, readFile, writeFile } from "fs-extra"
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
    const fileStats = await stat(`${getRootDir()}/${filename}`)

    return {
        title: filename.replace(/\.md$/, ''),
        lastEditTime: fileStats.mtimeMs
    }
}

export const readNote: ReadNote = async (filename) => {
    const rootDir = getRootDir()

    return readFile(`${rootDir}/${filename}.md`, { encoding: 'utf-16le' })
}

export const writeNote: WriteNote = async (filename, content) => {
    const rootDir = getRootDir()

    console.log(`Writing Note ${filename}`)
    return writeFile(`${rootDir}/${filename}.md`, content, { encoding: 'utf-16le' })
}