import React from "react";
import DataTable from "./components/DataTable";
import'./index.css';

function App() {
  return (

    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Data Table</h1>
      <DataTable />
    </div>

  );
}

export default App;
