import { notesMock } from "@/store/mocks"
import { ComponentProps } from "react"
import { NotePreview } from "@/components/NotePreview"
import { twMerge } from "tailwind-merge"
import { useNotesList } from "@renderer/hooks/useNotesList"

export const NotePreviewList = ({ className, ...props }: ComponentProps<'ul'>) => {

    const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({})
    if ((notes.length === 0)) {
        return (
            <ul className={twMerge('text-center pt-4', className)} {...props}>
                <span>No Notes Yet!</span>
            </ul>
        )
    }

    return (
        <ul className={className} {...props}>
            {notes.map((note, index) => (
                <NotePreview
                    key={note.title + note.lastEditTime}
                    isActive={selectedNoteIndex === index}
                    onClick={handleNoteSelect(index)}
                    {...note}
                />
            ))}
        </ul>
    )
}