export default function Section({ children }) {
  return (
    <div className="container mx-auto flex h-[100dvh] w-screen snap-end snap-always items-center justify-center px-10">
      <div className="flex h-full items-center">{children}</div>
    </div>
  );
}
