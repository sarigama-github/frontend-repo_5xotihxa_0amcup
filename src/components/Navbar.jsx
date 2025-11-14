import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-white font-bold">A</span>
            <span className="text-xl font-semibold text-gray-800">AutoCorp</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <NavLink to="/" className={({isActive}) => `hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-600'}`}>Home</NavLink>
            <NavLink to="/inventory" className={({isActive}) => `hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-600'}`}>Inventory</NavLink>
            <NavLink to="/contact" className={({isActive}) => `hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-600'}`}>Contact</NavLink>
            <a href="/test" className="text-gray-600 hover:text-blue-600">System Test</a>
          </nav>
          <div className="md:hidden">
            <a href="/inventory" className="inline-flex items-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-blue-700">Browse Cars</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
