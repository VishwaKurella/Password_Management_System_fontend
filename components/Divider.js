export default function Divider({ text }) {
  return (
    <div className="flex items-center my-4 text-purple-400">
      <div className="flex-grow h-px bg-purple-700" />
      <span className="px-2 text-sm">{text}</span>
      <div className="flex-grow h-px bg-purple-700" />
    </div>
  );
}
