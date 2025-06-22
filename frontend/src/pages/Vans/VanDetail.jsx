import React from "react"
import { Link, useParams, useLocation } from "react-router-dom"
import { axiosInstance } from '../../lib/axios'

export default function VanDetail() {
    const params = useParams()
    const location = useLocation()
    
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        async function fetchVanDetail() {
            try {
                const res = await axiosInstance.get(`/auth/vans/${params.id}`);
                setVan(res.data)
            } catch (err) {
                console.error("Failed to fetch van:", err)
            }
        }

        fetchVanDetail()
    }, [])

    const search = location.state?.search || ""
    const filter = location.state?.type || 'all'

    return (
        <div className="p-6">
            <Link
                to={`..${search}`}
                relative="path"
                className="btn btn-link text-sm mb-4"
            >
                &larr; Back to <span className="capitalize">{filter}</span> vans
            </Link>

            {van ? (
                <div className="card bg-base-200 shadow-xl p-6 md:p-10 max-w-3xl mx-auto">
                    <figure className="mb-6">
                        <img
                            src={van.imageUrl}
                            alt={van.name}
                            className="rounded-xl max-h-[400px] w-full object-cover"
                        />
                    </figure>
                    <div className="space-y-4">
                        <div className={`badge badge-lg capitalize ${
                            van.type === "luxury"
                                ? "badge-secondary"
                                : van.type === "rugged"
                                ? "badge-accent"
                                : "badge-primary"
                        }`}>
                            {van.type}
                        </div>
                        <h2 className="text-3xl font-bold">{van.name}</h2>
                        <p className="text-xl font-semibold text-primary">${van.price}<span className="text-base font-normal">/day</span></p>
                        <p className="text-base text-gray-700">{van.description}</p>
                        <button className="btn btn-primary w-full md:w-auto">Rent this van</button>
                    </div>
                </div>
            ) : (
                <div className="text-center text-lg font-medium">Loading...</div>
            )}
        </div>
    )
}
