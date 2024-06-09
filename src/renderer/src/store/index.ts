import { NoteInfo } from "@shared/models";
import { atom } from "jotai";
import { notesMock } from "@/store/mocks";
import { unwrap } from "jotai/utils";

const loadNotes = async () => {
    const notes = await window.context.getNotes()

    // Sort by most recently updated

    return notes.sort((a, b) => b.lastEditTime - a.lastEditTime)
}

const notesAtomAsync = atom<NoteInfo[] | Promise<NoteInfo[]>>(loadNotes())

export const notesAtom = unwrap(notesAtomAsync, (prev) => prev)

export const selectedNoteIndexAtom = atom<number | null>(null)

export const selectedNoteAtom = atom((get) => {
    const notes = get(notesAtom)
    const selectedNoteIndex = get(selectedNoteIndexAtom)

    if (selectedNoteIndex == null || !notes) return null

    const selectedNote = notes[selectedNoteIndex]

    return {
        ...selectedNote,
        content: `Hello from Note ${selectedNoteIndex}`
    }
})

export const createEmptyNoteAtom = atom(null, (get, set) => {
    const notes = get(notesAtom)
    if (!notes) return
    const title = `Note ${notes.length + 1}`

    const newNote: NoteInfo = {
        title,
        lastEditTime: Date.now()
    }

    set(notesAtom, [newNote, ...notes.filter((note) => note.title !== newNote.title)])

    set(selectedNoteIndexAtom, 0)
})
export const deleteNoteAtom = atom(null, (get, set) => {
    const notes = get(notesAtom)
    const selectedNote = get(selectedNoteAtom)

    if (!selectedNote || !notes) return

    set(
        notesAtom,
        notes.filter((note) => note.title !== selectedNote.title)
    )

    set(selectedNoteIndexAtom, null)
})

