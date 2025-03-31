export const Header = () => {
  return (
    <header className="sticky top-3 w-full z-30 flex justify-center items-center">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#" className="nav-item">Home</a>
        <a href="#" className="nav-item">Projects</a>
        <a href="#" className="nav-item">About</a>
        <a href="#" className="nav-item selected-tab">Contact</a>
      </nav>
    </header>
  )
};
