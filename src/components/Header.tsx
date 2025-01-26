export default function Header() {
  return (
    <>
      <header className="flex w-full justify-between items-center bg-blue-600 p-4">
        <h1 className="font-bold text-lg ml-10">Notes</h1>
        <div className="flex mr-10 text-sm justify-between gap-4">
          <h2>Notes</h2>
          <h2>Dashboard</h2>
          <h3>Profile</h3>
        </div>
      </header>
    </>
  );
}
