import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InventoryList from './components/InventoryList'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <InventoryList />
      <ContactForm />
      <footer className="border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} AutoCorp. All rights reserved.</p>
          <a href="/test" className="text-blue-600 hover:text-blue-700">System Test</a>
        </div>
      </footer>
    </div>
  )
}

export default App
