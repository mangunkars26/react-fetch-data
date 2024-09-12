import React, {useEffect, useState} from "react";
import axios from 'axios';

const DataTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);

    const handleRowClick = (item) => {
        setSelectedData(item);
        setIsModalOpen(true);
    };




    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="border-b">
                        <th className="px-4 py-2 text-sm">ID</th>
                        <th className="px-4 py-2 text-sm">Name</th>
                        <th className="px-4 py-2 text-sm">Username</th>
                        <th className="px-4 py-2 text-sm">Email</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map(item => (
                        <tr key={item.id} onClick={() => handleRowClick(item)} className="border-b cursor-pointer">
                            <td className="px-4 py-2 text-sm text-green-950">{item.id}</td>
                            <td className="px-4 py-2 text-sm text-green-950">{item.name}</td>
                            <td className="px-4 py-2 text-sm text-green-950">{item.username}</td>
                            <td className="px-4 py-2 text-sm text-green-950">{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen && (
             <div>
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-48 rounded-lg shadow-lg">
                <div className="top-0"><h2 className=" text-xl font-bold mb-4">Detail Data</h2></div>
                <p><strong>Name:</strong> {selectedData.name}</p>
                <p><strong>Username:</strong> {selectedData.username}</p>
                 <p><strong>Email:</strong> {selectedData.email}</p>
            </div>
            <button
                onClick={() => setIsModalOpen(false)}
                className="bg-red-500 cursor-pointer text-white px-4 py-2 mt-4 rounded-md">
                    Close
                </button>
            </div>
             </div>
    )};
        </div>
    );
};

export default DataTable;