
export default function Button({children}) {
    return (
    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2" >
      {children}
    </button>
    )
}
