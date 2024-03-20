import React, { useEffect } from 'react';
import { getData } from '../api/api';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    // Sample data
    const [data, setData] = React.useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            const response = await getData();
            console.log(response);
            setData(response.data);
        };
        fetchData();
    }, []);

    const logouthandle = () => {
        localStorage.clear();
        navigate("/login")
        window.location.reload();
    }

    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-4 tex">
                <h1 className="text-3xl font-bold align-centre">DATA</h1>
                <button onClick={logouthandle} className="px-4 py-2 bg-red-500 text-white rounded-md">Logout</button>
            </div>
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Id</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">MQ2</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">MQ5</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">MQ6</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">MQ7</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {data.map((item) => (
                        <tr key={item.Id}>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item.Id}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item.MQ2}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item.MQ5}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item.MQ6}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item.MQ7}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;