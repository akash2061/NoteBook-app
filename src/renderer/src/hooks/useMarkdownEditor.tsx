import { selectedNotesAtom } from "@renderer/store"
import { useAtomValue } from "jotai"

export const useMarkdownEditor = () => {
    const selectedNote = useAtomValue(selectedNotesAtom)

    return {
        selectedNote
    }
}