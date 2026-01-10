interface Props {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ searchTerm, setSearchTerm }: Props) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search movies..."
      className="px-4 py-2 rounded-lg w-72 text-black outline-none bg-white"
    />
  );
}
