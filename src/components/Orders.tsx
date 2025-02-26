'use client'
import React, { useState } from 'react';

const Orders = () => {
    const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

    const toggleDetails = (orderId: string) => {
        setExpandedOrder(prev => (prev === orderId ? null : orderId));
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Your Orders</h2>

            {/* Order 1 */}
            <div className="bg-white shadow-md p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold">Order ID: a25KKRNFa0</h3>
                        <p className="text-gray-600">Total Amount: <span className="font-medium">$2,868.99</span></p>
                    </div>
                    <div className="flex gap-4">
                        <button 
                            className="bg-black text-white px-4 py-2 rounded-md" 
                            onClick={() => toggleDetails("a25KKRNFa0")}
                        >
                            {expandedOrder === "a25KKRNFa0" ? "Hide Details" : "Show Details"}
                        </button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-md">✖ Delete Order</button>
                    </div>
                </div>
                {expandedOrder === "a25KKRNFa0" && (
                    <div className="mt-4">
                        <p>Payment Status: <span className="bg-green-500 text-white px-2 py-1 rounded">Paid</span></p>
                        {/* Additional details can be added here */}
                    </div>
                )}
            </div>

            {/* Order 2 */}
            <div className="bg-white shadow-md p-4 rounded-lg">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold">Order ID: N68NJXxF6</h3>
                        <p className="text-gray-600">Total Amount: <span className="font-medium">$2,569.00</span></p>
                    </div>
                    <div className="flex gap-4">
                        <button 
                            className="bg-black text-white px-4 py-2 rounded-md" 
                            onClick={() => toggleDetails("N68NJXxF6")}
                        >
                            {expandedOrder === "N68NJXxF6" ? "Hide Details" : "Show Details"}
                        </button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-md">✖ Delete Order</button>
                    </div>
                </div>
                {expandedOrder === "N68NJXxF6" && (
                    <div className="mt-4">
                        <p>Payment Status: <span className="bg-green-500 text-white px-2 py-1 rounded">Paid</span></p>
                        {/* Additional details can be added here */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Orders;