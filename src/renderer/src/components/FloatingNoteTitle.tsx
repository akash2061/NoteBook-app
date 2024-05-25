import { selectedNotesAtom } from "@renderer/store"
import { useAtomValue } from "jotai"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

export const FloatingNoteTitle = ({ className, ...props }: ComponentProps<'div'>) => {
    const selectedNote = useAtomValue(selectedNotesAtom)

    if (!selectedNote) return (
        <div className={twMerge('flex justify-center', className)}{...props}>
            <span className="text-gray-400">Welcome to NoteBook...! 📜</span>
        </div>
    ) //! return null if-needed
    return (
        <div className={twMerge('flex justify-center', className)}{...props}>
            <span className="text-gray-400">{selectedNote.title}</span>
        </div>
    )
}