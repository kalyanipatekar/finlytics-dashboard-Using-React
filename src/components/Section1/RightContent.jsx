<div className="flex flex-col sm:flex-row gap-4 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-md border border-gray-200">

  <input
    type="text"
    placeholder="🔍 Search member..."
    className="flex-1 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 outline-none"
    onChange={(e) => setSearch(e.target.value)}
  />

  <select
    className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 outline-none"
    onChange={(e) => setFilter(e.target.value)}
  >
    <option>All</option>
    <option>UI Designer</option>
    <option>Frontend</option>
    <option>Backend</option>
    <option>Tester</option>
  </select>
</div>
