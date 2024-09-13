import React from "react";

const ModalReply = ({ selectedMessage, setIsModalReplyOpen }) => {


    const handleCloseModal = () => {
        setIsModalReplyOpen(false);
    };

    const handleReply = (e) => {
        e.preventDefault();
        console.log("Pesan dikirim");
        handleCloseModal();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
            <div className="bg-white py-8 px-10 rounded-lg shadow-lg max-w-lg w-full relative ">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
                    Jawab Pesan
                </h2>


                <div className="mb-6">
                    <p className="text-gray-700"><strong>Nama:</strong> {selectedMessage.name}</p>
                    <p className="text-gray-900"><strong>No. Telepon:</strong> {selectedMessage.phone}</p>
                    <div className="my-4 bg-gray-100 shadow-lg p-16">
                        <div className="top-0">
                            <h2>Pesan:</h2>
                        </div>
                        <p className="text-gray-700"> {selectedMessage.message}</p>
                    </div>
                </div>


                <form onSubmit={handleReply}>
          <textarea
              placeholder="Tulis balasan Anda di sini..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-200"
              rows="4"
              required
          ></textarea>

                    <div className="flex justify-between items-center mt-6">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg transition duration-200 ease-in-out transform hover:scale-105"
                        >
                            Balas
                        </button>
                        <button
                            type="button"
                            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg shadow-lg transform hover:scale-105"
                            onClick={()=>handleCloseModal(true)}
                        >
                            Tutup
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalReply;
