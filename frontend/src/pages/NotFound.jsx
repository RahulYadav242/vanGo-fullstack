import React from "react"
import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-base-200 text-center px-4">
            <h1 className="text-4xl font-bold text-error mb-4">404 - Page Not Found</h1>
            <p className="text-lg mb-6">
                Sorry, the page you were looking for doesn’t exist.
            </p>
            <Link to="/" className="btn btn-primary">
                Return to Home
            </Link>
        </div>
    )
}
