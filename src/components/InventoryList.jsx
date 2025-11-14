import { useEffect, useState } from 'react'

function InventoryList() {
  const [vehicles, setVehicles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/vehicles`)
        const data = await res.json()
        setVehicles(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Inventory</h2>
          <a href="/inventory" className="text-blue-600 hover:text-blue-700 text-sm font-medium">View all</a>
        </div>

        {loading ? (
          <p className="text-gray-600">Loading vehicles...</p>
        ) : vehicles.length === 0 ? (
          <div className="rounded-lg border border-dashed p-8 text-center text-gray-600">
            No vehicles yet. Add some via the backend or database explorer.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.slice(0,6).map(v => (
              <a key={v.id} href={`/vehicle/${v.id}`} className="group rounded-xl overflow-hidden bg-white ring-1 ring-gray-200 hover:ring-blue-300 transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={v.images?.[0] || 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1200&auto=format&fit=crop'} alt={`${v.make} ${v.model}`} className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">{v.year} {v.make} {v.model}</h3>
                    <span className="text-blue-600 font-bold">${Number(v.price).toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{v.mileage ? `${v.mileage.toLocaleString()} mi • ` : ''}{v.transmission || ''}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default InventoryList
