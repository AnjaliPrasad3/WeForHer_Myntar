import React, { Fragment, useState } from 'react';
import Sidebar from '../GlamHome/GlamBoard/sidebar';
import { dummyClients, dummyMessages } from './dummyData';




const MessagePage = () => {
    const [selectedClient, setSelectedClient] = useState(null);
    const [messages, setMessages] = useState(dummyMessages);

    const handleSelectClient = (client) => {
        setSelectedClient(client);
        // Filter messages for the selected client
        setMessages(dummyMessages.filter(msg => msg.clientId === client.id));
    };

    const handleSendMessage = () => {
        // Handle send message functionality
        console.log('Sending message...');
    };

    return (
        <Fragment>
            <div className='py-4 border-b-2 border-gray-300 mx-auto w-[90%] mt-5 2xl:w-[70%] xl:w-[70%] lg:w-[70%]'>
                <h1 className='font-semibold text-lg text-gray-800'>Account</h1>
                <p className='text-xs text-gray-600'>User Name</p>
            </div>
            <div className="flex w-[90%] mx-auto 2xl:w-[70%] xl:w-[70%] lg:w-[70%] mt-4">
                <div className='w-[30%] border-r-2 border-gray-300 2xl:w-[20%] xl:w-[20%] lg:w-[20%]'>
                    <Sidebar />
                </div>
                <div className="w-[70%] 2xl:w-[80%] xl:w-[80%] lg:w-[80%] p-4 bg-gray-50 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Messages</h2>
                    <div className="flex">
                        <div className="w-1/4 border-r-2 border-gray-300">
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">Clients</h3>
                            <ul className="bg-white rounded-md shadow-md">
                                {dummyClients.map(client => (
                                    <li
                                        key={client.id}
                                        onClick={() => handleSelectClient(client)}
                                        className={`p-2 cursor-pointer hover:bg-purple-100 ${selectedClient && selectedClient.id === client.id ? 'bg-purple-200' : ''}`}
                                    >
                                        {client.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-3/4 p-4">
                            {selectedClient ? (
                                <Fragment>
                                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Chat with {selectedClient.name}</h3>
                                    <div className="chat-box h-96 overflow-y-scroll p-4 border rounded-lg bg-white shadow-md">
                                        {messages.map((msg, index) => (
                                            <div key={index} className={`message ${msg.isSent ? 'text-right' : 'text-left'} my-2`}>
                                                <p className={`inline-block p-2 rounded-lg ${msg.isSent ? 'bg-purple-500 text-white' : 'bg-gray-300'}`}>{msg.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4">
                                        <textarea className="w-full p-2 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500" rows="3" placeholder="Type your message..."></textarea>
                                        <button onClick={handleSendMessage} className="mt-2 p-2 bg-purple-500 text-white rounded-md hover:bg-purple-600">Send</button>
                                    </div>
                                </Fragment>
                            ) : (
                                <p className="text-gray-600">Select a client to start chatting</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default MessagePage;
