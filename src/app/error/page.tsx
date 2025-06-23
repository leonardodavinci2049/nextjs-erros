export default function ErrorPage() {
  throw new Error("Demo error!");

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <h1 className="text-6xl font-extrabold text-white">Error Page</h1>
    </div>
  );
}
