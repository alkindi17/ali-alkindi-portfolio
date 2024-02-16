import NavBar from "@/components/global/nav-bar-other-pages";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className="container mx-auto mb-28 mt-10 px-10 max-sm:px-6 lg:max-w-5xl">
        {children}
      </main>
    </>
  );
}
