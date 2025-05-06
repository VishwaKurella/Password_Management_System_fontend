// export default function EntryCard({ data, onClick }) {
//   return (
//     <div
//       onClick={onClick}
//       className="cursor-pointer p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition-transform transform hover:-translate-y-1"
//     >
//       <h3 className="text-lg font-semibold truncate">{data.name}</h3>
//       <p className="text-sm text-gray-500 mt-2 truncate">{data.email}</p>
//     </div>
//   );
// }

export default function EntryCard({ data, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-purple-700 transition-transform transform hover:-translate-y-1"
    >
      <h3 className="text-lg font-semibold text-white truncate">{data.name}</h3>
      <p className="text-sm text-purple-300 mt-2 truncate">{data.email}</p>
    </div>
  );
}
