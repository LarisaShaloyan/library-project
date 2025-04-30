import React from "react";
import { Link } from "react-router-dom";
import authorsData from "../data";


const AuthorsList = () => {
    console.log(authorsData)
    return (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {authorsData.map((author) => (
                <div key={author.id} className="cursor-pointer hover:underline transition-transform transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg duration-300 bg-gray-800 text-white p-4 rounded-xl shadow-md">
                    <img
                        src={author.image}
                        alt={author.name}
                        className="w-8/12 h-52 object-top rounded-md mb-3 mx-auto
                    transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                    />
                    <h2 className="text-xl font-bold mb-1">{author.name}</h2>

                    <p className="text-sm opacity-70 mb-3">{author.bio}...</p>
                    <Link
                        to={`/authors/${author.id}`}
                        className="inline-block mt-auto text-blue-400 hover:text-blue-600 font-semibold"
                    >
                        Տեսնել ավելին →

                    </Link>

                </div>
            ))}
        </div>
    );
};

export default AuthorsList;
