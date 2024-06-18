import { MDXEditorMethods } from "@mdxeditor/editor"
import { saveNoteAtom, selectedNoteAtom } from "@renderer/store"
import { NoteContent } from "@shared/models"
import { useAtomValue, useSetAtom } from "jotai"
import { useRef } from "react"
import { throttle } from "loadsh"
import { autoSaveingTime } from "@shared/constants"

export const useMarkdownEditor = () => {
    const selectedNote = useAtomValue(selectedNoteAtom)
    const saveNote = useSetAtom(saveNoteAtom)
    const editorRef = useRef<MDXEditorMethods>(null)

    const handleAutoSave = throttle(async (content: NoteContent) => {
        if (!selectedNote) return

        console.log('Auto saveing:', selectedNote.title)
        await saveNote(content)
    }, autoSaveingTime, {
        leading: false,
        trailing: true
    })

    return {
        editorRef,
        selectedNote,
        handleAutoSave,
    }
}