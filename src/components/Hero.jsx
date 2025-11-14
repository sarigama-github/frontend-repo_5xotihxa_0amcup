function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.15),transparent_40%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Drive Your Next Adventure
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Premium new and pre-owned vehicles. Transparent pricing. Exceptional service.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="/inventory" className="inline-flex items-center rounded-md bg-blue-600 text-white px-5 py-3 text-sm font-medium shadow hover:bg-blue-700">Browse Inventory</a>
              <a href="#contact" className="inline-flex items-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-black">Book Test Drive</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1600&auto=format&fit=crop" alt="Sport car" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
