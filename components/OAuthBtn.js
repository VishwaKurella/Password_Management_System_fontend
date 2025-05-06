import Image from "next/image";
export default function OAuthBtn({ label, logo, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-700 rounded-full border border-gray-600 hover:bg-gray-600 transition hover:scale-110"
    >
      <Image src={logo} alt={`${label} logo`} width={20} height={20} />
      <span className="text-sm text-white">{label}</span>
    </button>
  );
}
