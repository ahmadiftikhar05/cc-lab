

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white rounded-lg shadow-2xl p-12 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Welcome
        </h1>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
            <label className="font-semibold text-blue-600">Name :</label>
            <span className="text-gray-800 font-medium">Ahmad Iftikhar Khan</span>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
            <label className="font-semibold text-blue-600">Enrollment :</label>
            <span className="text-gray-800 font-medium">01-131232-009</span>
          </div>
        </div>
      </div>
    </div>
  );
}
