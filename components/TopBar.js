export default function TopBar({ onSearch }) {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      <h1 className="text-2xl font-semibold">Your Vault</h1>
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search records..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-2 bg-gray-100 border border-gray-300 rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
          🔍
        </div>
      </div>
    </header>
  );
}
