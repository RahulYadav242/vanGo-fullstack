import React from "react"
import { Link } from "react-router-dom"
import { BsStarFill } from "react-icons/bs"
import { axiosInstance } from '../../lib/axios.js'

export default function Dashboard() {
    const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        async function loadVans() {
            try {
                const res = await axiosInstance.get("/auth/vans")
                setVans(res.data.vans)
            } catch (err) {
                setError(err)
            }
        }

        loadVans()
    }, [])

    function renderVanElements(vans) {
        return (
            <div className="flex flex-col gap-4">
                {vans.map(van => (
                    <div
                        key={van.id}
                        className="card card-side bg-base-100 shadow-md flex items-center"
                    >
                        <figure className="w-48">
                            <img
                                src={van.imageUrl}
                                alt={van.name}
                                className="object-cover h-full w-full rounded-l-xl"
                            />
                        </figure>
                        <div className="card-body flex-row justify-between items-center w-full px-6">
                            <div>
                                <h2 className="card-title text-xl">{van.name}</h2>
                                <p className="text-lg font-semibold">${van.price}/day</p>
                            </div>
                            <Link to={`vans/${van.id}`} className="btn btn-sm btn-primary">
                                View
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    if (error) {
        return (
            <div className="alert alert-error shadow-lg mt-6">
                <span>Error: {error.message}</span>
            </div>
        )
    }

    return (
        <div className="p-6 space-y-10">
            <section className="bg-primary text-primary-content p-6 rounded-xl shadow-md flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Welcome!</h1>
                    <p className="text-base">Income last <span className="font-bold">30 days</span></p>
                    <h2 className="text-2xl">$2,260</h2>
                </div>
                <Link to="income" className="btn btn-secondary">Details</Link>
            </section>

            <section className="bg-base-200 p-6 rounded-xl shadow-md flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <BsStarFill className="text-yellow-400 text-2xl" />
                    <p className="text-lg font-medium"><span className="font-bold">5.0</span>/5</p>
                </div>
                <Link to="reviews" className="btn btn-accent">Details</Link>
            </section>

            <section>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Your listed vans</h2>
                    <Link to="vans" className="btn btn-outline btn-sm">View all</Link>
                </div>
                {
                    loading
                        ? <p className="text-center text-lg font-semibold">Loading...</p>
                        : renderVanElements(vans)
                }
            </section>
        </div>
    )
}
