import { ActionButton, ActionButtonProps } from "@/components"
import { LuFile } from 'react-icons/lu'
import { createEmptyNoteAtom } from "@renderer/store"
import { useSetAtom } from "jotai"
export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
    const createEmptyNote = useSetAtom(createEmptyNoteAtom)

    const handleCreation = async () => {
        await createEmptyNote()
    }

    return (
        <ActionButton onClick={handleCreation}{...props}>
            <LuFile className='w-4 h-4 text-zinc-300' />
        </ActionButton>
    )
}