export default function Navbar({ progress, children }) {
  return (
    <nav>
      <div className='navbar'>
        <h1>Occurrence Tracker</h1>
        <p className='progress'>Progress: {Number(progress.toFixed(2))}%</p>
      </div>
      <div className='navbar-btns'>{children}</div>
    </nav>
  );
}
