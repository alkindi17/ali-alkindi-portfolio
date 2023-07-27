export default function PrimaryButton({children}) {
    return (
        <button className='bg-[var(--foreground)] text-[var(--background)] px-7 py-2 mt-5 rounded-md md:hover:bg-[var(--background)] 
        md:hover:text-[var(--foreground)] md:hover:border-[var(--foreground)] border text-sm max-md:text-xs transition ease-in-out 
        duration-300'>
            {children}
        </button>
    )
}