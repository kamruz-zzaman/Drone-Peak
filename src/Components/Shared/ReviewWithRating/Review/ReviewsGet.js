import React, { useEffect, useState } from 'react';
import Spinner from '../../Spinner/Spinner';
import Review from './Review';

const ReviewsGet = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-woodland-41119.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, []);
    return (
        <>
            {review.length === 0 ? <Spinner></Spinner> : <div className='my-14'>
                <span className='text-3xl font-bold border-b-2 border-gray-200'>Reviews</span>
                <section className="text-gray-600">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap justify-center -m-4">
                            {
                                review.map(rat =>
                                    <Review
                                        key={rat._id}
                                        rating={rat}
                                    >
                                    </Review>
                                )
                            }
                        </div>
                    </div>
                </section>
            </div>
            }
        </>
    );
};

export default ReviewsGet;