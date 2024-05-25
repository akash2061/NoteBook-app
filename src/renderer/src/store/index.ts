import { NoteInfo } from "@shared/models";
import { atom } from "jotai";
import { notesMock } from "@/store/mocks";

export const notesAtom = atom<NoteInfo[]>(notesMock)

export const selectedNoteIndexAtom = atom<number | null>(null)

export const selectedNotesAtom = atom((get) => {
    const notes = get(notesAtom)
    const selectedNoteIndex = get(selectedNoteIndexAtom)

    if (selectedNoteIndex == null) return null

    const selectedNote = notes[selectedNoteIndex]

    return {
        ...selectedNote,
        content: 'Hello from Note${selectedNoteIndex'
    }
})