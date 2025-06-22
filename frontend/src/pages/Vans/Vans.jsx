import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import { axiosInstance } from '../../lib/axios.js'

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])

    const typeFilter = searchParams.get("type")

    React.useEffect(() => {
    async function loadVans() {
        try {
            const res = await axiosInstance.get("/auth/vans");
            setVans(res.data.vans);
        } catch (err) {
            console.error("Failed to fetch vans:", err);
        }
    }

    loadVans();
}, []);

    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    const vanElements = displayedVans.map(van => (
    <div
        key={van.id}
        className="card bg-base-100 shadow-lg w-full max-w-lg mx-auto"
    >
        <Link 
            to={van.id} 
            state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
        >
            <figure>
                <img
                    src={van.imageUrl}
                    alt={van.name}
                    className="h-60 w-md object-cover"
                />
            </figure>
            <div className="card-body space-y-2">
                <h3 className="card-title text-2xl">{van.name}</h3>
                <p className="text-xl font-semibold">${van.price}<span className="text-base font-normal">/day</span></p>
                <div className="badge badge-outline capitalize text-sm py-2 px-4">{van.type}</div>
            </div>
        </Link>
    </div>
))




    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={
                        `van-type simple 
                        ${typeFilter === "simple" ? "selected" : ""}`
                    }
                >Simple</button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={
                        `van-type luxury 
                        ${typeFilter === "luxury" ? "selected" : ""}`
                    }
                >Luxury</button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={
                        `van-type rugged 
                        ${typeFilter === "rugged" ? "selected" : ""}`
                    }
                >Rugged</button>

                {typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                    >Clear filter</button>
                ) : null}

            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}