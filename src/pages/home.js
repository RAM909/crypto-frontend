import React, { useEffect } from 'react';
import { getData } from '../api/api';
import { useNavigate } from 'react-router-dom';
import backgroundImage from "../assets/bg.png"
const Home = () => {
    // Sample data
    const [data, setData] = React.useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            const response = await getData();
            console.log(response);
            response.data = response.data.reverse();
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
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className="overflow-x-auto rounded-lg border border-gray-200 flex-grow">
                <div className="flex justify-between items-center mb-4 tex">
                    <h1 className="text-3xl font-bold  text-white align-centre">DASHBOARD</h1>
                    <button onClick={logouthandle} className="px-4 py-2 bg-red-500 text-white rounded-md">Logout</button>
                </div>
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">MQ2</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">MQ5</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">MQ6</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">MQ7</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {data.map((item) => (
                            <tr key={item.Id}>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item.MQ2}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item.MQ5}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item.MQ6}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item.MQ7}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
