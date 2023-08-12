export default function PrimaryButton({ children }) {
  return (
    <button
      className="border border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]
      dark:border-dark-accent dark:bg-dark-accent dark:hover:bg-dark-accent-100 dark:hover:border-dark-accent-100 dark:hover:text-[var(--foreground)]
      px-7 py-2 mt-5 rounded-xl  
      text-sm max-md:text-xs 
      transition ease-in-out duration-300"
    >
      {children}
    </button>
  );
}
