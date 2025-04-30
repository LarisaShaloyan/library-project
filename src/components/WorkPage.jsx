import { Link, useParams } from "react-router-dom";
import authorsData from "../data";

function WorkPage() {
    const { works } = useParams();

    const decodedWork = decodeURIComponent(works);


    const author = authorsData.find((a) =>
        a.works.some((work) => decodeURIComponent(work.title) === decodedWork)
    );

    // if (!author) {
    //     return <p className="text-red-500 p-4">Հեղինակը չի գտնվել։</p>;
    // }

    const work = author.works.find(
        (w) => decodeURIComponent(w.title) === decodedWork
    );

    if (!work) {
        return <p className="text-red-500 p-4">Ստեղծագործությունը չի գտնվել։</p>;
    }

    return (
        <div className="p-6 text-white">
            <h1 className="text-2xl font-bold mb-4">{work.title}</h1>
            <p className="mb-2 text-lg text-gray-300">Հեղինակ՝ {author.name}</p>
            <p className="mb-6 whitespace-pre-line text-left leading-relaxed">{work.description}</p>


            <Link
                to={`/authors/${author.id}`}
                className="text-blue-400 hover:text-blue-600"
            >
                ← Վերադառնալ հեղինակին
            </Link>
        </div>
    );
}

export default WorkPage;
