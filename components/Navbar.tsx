const Navbar = () => {
  return (
    <nav className="border-b p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-rose-500">
        Airbnb
      </h1>

      <button className="border rounded-full px-4 py-2">
        Perfil
      </button>
    </nav>
  );
};

export default Navbar;