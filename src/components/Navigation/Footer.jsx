import React from "react";

function Footer() {
    return (

        <footer className=" bg-gray-900 text-white p-4 mt-8">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} My Page. Բոլոր իրավունքները պաշտպանված են։</p>
                <div className="space-x-4 mt-4 sm:mt-0">
                    <a href="/about" className="hover:text-blue-400 transition">Մեր մասին</a>
                    <a href="/contact" className="hover:text-blue-400 transition">Կապ</a>
                    <a href="/privacy" className="hover:text-blue-400 transition">Գաղտնիություն</a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
