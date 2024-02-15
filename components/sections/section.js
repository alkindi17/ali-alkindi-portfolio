export default function Section({ children }) {
  return (
    <div className="container mx-auto px-10 snap-always snap-end w-screen h-screen flex items-center justify-center">
      <div className="flex gap-16 max-sm:gap-10 items-center h-full">
        {children}
      </div>
    </div>
  );
}
