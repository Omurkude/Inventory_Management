function Navbar() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="h-16 border-b border-zinc-800 bg-zinc-900 flex items-center justify-between px-6">

      <h2 className="text-2xl font-semibold text-white">
        Dashboard
      </h2>

      <div className="flex items-center gap-3">

        <div className="h-10 w-10 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold">
          {user?.name?.charAt(0)}
        </div>

        <div>
          <p className="text-white font-medium">
            {user?.name}
          </p>

          <p className="text-xs text-zinc-400">
            {user?.email}
          </p>
        </div>

      </div>

    </header>
  );
}

export default Navbar;