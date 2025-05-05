export default function Sidebar() {
  const NavItem = ({ label, icon, active }) => (
    <a
      href="#"
      className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition ${
        active
          ? "bg-gray-900 text-white font-semibold"
          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
      }`}
    >
      <span className="text-lg">{icon}</span>
      <span className="text-base font-medium">{label}</span>
    </a>
  );

  return (
    <aside className="w-64 hidden md:flex flex-col bg-white shadow-lg p-6 space-y-8">
      <div className="text-3xl font-bold tracking-wide uppercase">VaultX</div>
      <nav className="flex flex-col space-y-4 mt-10">
        <NavItem label="Dashboard" icon="🏠" active />
        <NavItem label="Add New" icon="✏️" />
        <NavItem label="Settings" icon="⚙️" />
      </nav>
    </aside>
  );
}
