import React from "react";
import { useParams, Link } from "react-router-dom";
import authorsData from "../data";

const AuthorPage = () => {
    const { id } = useParams();
    const author = authorsData.find((a) => a.id === parseInt(id));

    if (!author) {
        return (
            <div className="p-4 text-center text-red-500">
                Հեղինակը չի գտնվել։ <Link to="/" className="text-blue-500">Վերադառնալ</Link>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-4xl mx-auto text-white">
            <img
                src={author.image}
                alt={author.name}
                className="w-full h-80 object-cover rounded-xl mb-6 shadow-lg"
            />
            <h1 className="text-3xl font-bold mb-2">{author.name}</h1>
            <p className="mb-6 opacity-80">{author.bio}</p>

            <h2 className="text-2xl font-semibold mb-2">Ստեղծագործություններ</h2>
            <ul className="list-disc list-inside space-y-1 mb-8">
                {author.works.map((work, index) => (
                    <li key={index}>
                        <Link
                            to={`/authors/${author.id}/works/${encodeURIComponent(work.title)}`}
                            className="text-blue-400 hover:underline"
                        >
                            {work.title}

                        </Link>

                    </li>
                ))}

            </ul>

            <Link
                to="/"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
                ← Վերադառնալ հեղինակների ցուցակին
            </Link>

        </div>
    );
};

export default AuthorPage;
