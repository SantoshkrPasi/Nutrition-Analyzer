export default function EmptyState({ message }) {

    return (

        <div className="bg-white rounded-xl p-10 text-center border">

            <h2 className="text-xl font-semibold">

                {message}

            </h2>

        </div>

    );

}