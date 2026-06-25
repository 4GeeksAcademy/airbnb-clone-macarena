import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-rose-500">
          airbnb
        </Link>

        <div className="hidden items-center rounded-full border shadow-sm md:flex">
          <Link href="/catalog" className="px-6 py-3 font-semibold">
            En cualquier lugar
          </Link>

          <span className="h-6 border-l"></span>

          <button className="px-6 py-3 font-semibold">
            Cualquier fecha
          </button>

          <span className="h-6 border-l"></span>

          <button className="px-6 py-3 text-gray-600">
            ¿Cuántos?
          </button>

          <Link
            href="/catalog"
            className="mr-2 flex h-9 w-9 items-center justify-center rounded-full bg-rose-500 text-white"
          >
            🔍
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden font-semibold md:block">
            Conviértete en anfitrión
          </button>

          <button className="rounded-full p-3 hover:bg-gray-100">🌐</button>

          <button className="flex items-center gap-3 rounded-full border px-4 py-2 shadow-sm">
            <span>☰</span>
            <span>👤</span>
          </button>
        </div>
      </nav>

      <div className="px-6 pb-4 md:hidden">
        <Link
          href="/catalog"
          className="flex w-full items-center gap-3 rounded-full border px-5 py-4 shadow-md"
        >
          <span>🔍</span>
          <span className="font-semibold">Empieza a buscar</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;