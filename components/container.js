export default function Container({children}) {
    return (
        <div className="container mx-auto px-10 snap-always snap-end w-screen h-screen flex items-center justify-center">
            <div className="flex flex-row max-sm:flex-col gap-16 max-sm:gap-10 items-end">
                {children}
            </div>
        </div>
    )
}
