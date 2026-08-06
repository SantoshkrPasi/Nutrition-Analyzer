export default function DeleteModal({

                                        isOpen,
                                        onClose,
                                        onConfirm

                                    }) {

    if (!isOpen) return null;

    return (

        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={onClose}
        >

            <div
                className="bg-white rounded-2xl p-8 w-96 shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >

                <h2 className="text-2xl font-bold">

                    Delete Meal?

                </h2>

                <p className="text-slate-500 mt-3">

                    Are you sure you want to delete this meal?

                </p>

                <div className="flex justify-end gap-4 mt-8">

                    <button
                        onClick={onClose}
                        className="px-5 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 transition"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="px-5 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>

    );

}