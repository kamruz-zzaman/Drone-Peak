import React from 'react';

const Review = (props) => {
    const { name, thouts, rating } = props.rating;

    return (
        <>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-2 m-5 bg-gray-200 rounded-2xl">
                <div className="mt-4 ">
                    <h3 className="text-gray-900 text-2xl font-bold  mb-1">{name}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{thouts}...</h2>
                    <p className="mt-1">rating:
                        {rating == 1 && <> <i className="text-yellow-500 fas fa-star"></i></>}
                        {rating == 2 && <> <i className="text-yellow-500 fas fa-star"></i><i className="text-yellow-500 fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></>}
                        {rating == 3 && <> <i className="text-yellow-500 fas fa-star"></i><i className="text-yellow-500 fas fa-star"></i><i className="text-yellow-500 fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></>}
                        {rating == 4 && <> <i className="text-yellow-500 fas fa-star"></i><i className="text-yellow-500 fas fa-star"></i><i className="text-yellow-500 fas fa-star"></i><i className="text-yellow-500 fas fa-star"></i><i class="fas fa-star"></i></>}
                        {rating == 5 && <> <i className="text-yellow-500 fas fa-star"></i><i className="text-yellow-500 fas fa-star"></i><i className="text-yellow-500 fas fa-star"></i><i className="text-yellow-500 fas fa-star"></i><i className="text-yellow-500 fas fa-star"></i></>}
                    </p>
                </div>
            </div>

        </>
    );
};

export default Review;