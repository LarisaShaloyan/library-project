import React, { useState } from 'react';

function Contact(props) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [showForm, setShowForm] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        console.log('Ուղարկված տվյալներ:', formData);

        setFormData({
            name: '',
            email: '',
            message: '',
        });


    };

    const handleShowForm = () => {
        setShowForm(true);
    };

    return (
        <div className="p-6 max-w-2xl mx-auto text-white">
            <h1 className="text-4xl font-bold mb-6 text-center">Հետադարձ կապ</h1>

            <p className="text-lg mb-4 text-gray-300 text-center">
                Խնդրում ենք կապ հաստատել մեզ հետ ցանկացած հարցի կամ առաջարկի դեպքում։
            </p>

            <div className="space-y-4 text-center">
                <p>📧 Էլ․ հասցե՝ <a href="mailto:example@email.com"
                                   className="text-blue-400 hover:underline">example@email.com</a></p>
                <p>📱 Հեռախոս՝ +374 00 00 00 00</p>
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="#" className="text-blue-400 hover:scale-110 transition-transform">Facebook</a>
                    <a href="#" className="text-blue-400 hover:scale-110 transition-transform">Instagram</a>
                    <a href="#" className="text-blue-400 hover:scale-110 transition-transform">LinkedIn</a>
                </div>
            </div>

            <div className="text-center mt-8">
                {!showForm && (
                    <button
                        onClick={handleShowForm}
                        className="px-6 py-2 bg-blue-500 rounded-md hover:bg-blue-700 transition"
                    >
                        Կապ մեզ հետ
                    </button>
                )}

                {showForm && (
                    <div className="space-y-4 mt-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Անուն"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md text-black"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Էլ․ հասցե"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md text-black"
                        />
                        <textarea
                            name="message"
                            placeholder="Հաղորդագրություն"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md text-black h-32"
                        ></textarea>

                        <button
                            onClick={handleSubmit}
                            className="w-full py-3 bg-blue-500 rounded-md hover:bg-blue-700 transition font-bold"
                        >
                            Ուղարկել
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Contact;
