import { ComponentProps, forwardRef } from "react"
import { twMerge } from "tailwind-merge"

export const Sidebar = ({ className, children, ...props }: ComponentProps<'aside'>) => {
    return <aside className={twMerge('w-[250px] mt-10 h-[100vh + 10px] overflow-auto', className)}{...props}>
        {children}
    </aside>
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
    ({ children, className, ...props }, ref) => (
        <div ref={ref} className={twMerge('flex-1 overflow-auto', className)} {...props}>
            {children}
        </div>
    )
)

Content.displayName = 'Content'