import React from "react"
import graph from '../../assets/images/graph.png'

export default function Income() {
    const transactionsData = [
        { amount: 720, date: "Jan 3, '23", id: "1" },
        { amount: 560, date: "Dec 12, '22", id: "2" },
        { amount: 980, date: "Dec 3, '22", id: "3" },
    ]
     return (
        <section className="p-6 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Income</h1>
            <p className="text-gray-500 mb-4">
                Last <span className="font-semibold">30 days</span>
            </p>

            <div className="stats shadow mb-6">
                <div className="stat">
                    <div className="stat-title">Total Income</div>
                    <div className="stat-value text-primary">$2,260</div>
                </div>
            </div>

            <div className="mb-6">
                <img
                    className="rounded-lg w-full h-auto"
                    src={graph}
                    alt="Income graph"
                />
            </div>

            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Your transactions ({transactionsData.length})</h3>
                <p className="text-gray-500">
                    Last <span className="font-medium">30 days</span>
                </p>
            </div>

            <div className="grid gap-4">
                {transactionsData.map((item) => (
                    <div key={item.id} className="card bg-base-200 shadow-md">
                        <div className="card-body flex-row justify-between items-center">
                            <h3 className="text-lg font-bold">${item.amount}</h3>
                            <p className="text-sm text-gray-500">{item.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}