function Modal({ isOpen, onClose, id, title, children }) {

    if (!isOpen) {
        return null
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div id={id} className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl transform duration-300">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-semibold"
                >
                    ×
                </button>
                <div className="mb-4">
                    <h2 className="text-lg font-bold text-gray-800">{title}</h2>
                </div>
                <div className="">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;