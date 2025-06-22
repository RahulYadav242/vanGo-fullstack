import React from "react"
import { BsStarFill } from "react-icons/bs"
import reviews from "../../assets/images/reviews.png"

export default function Reviews() {
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ]

    return (
        <section className="p-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold">Your reviews</h2>
                <p className="text-gray-600">
                    Last <span className="font-semibold text-primary">30 days</span>
                </p>
            </div>

            <img
                className="w-full mb-6 rounded-lg shadow"
                src={reviews}
                alt="Review graph"
            />

            <h3 className="text-xl font-semibold mb-4">Reviews ({reviewsData.length})</h3>

            {reviewsData.map((review) => (
                <div key={review.id} className="mb-6">
                    <div className="bg-base-100 p-4 rounded-lg shadow">
                        <div className="flex items-center gap-2 mb-2 text-yellow-500">
                            {[...Array(review.rating)].map((_, i) => (
                                <BsStarFill key={i} className="text-lg" />
                            ))}
                        </div>
                        <div className="flex justify-between items-center mb-1">
                            <p className="font-semibold text-lg">{review.name}</p>
                            <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                        <p className="text-gray-700">{review.text}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}
