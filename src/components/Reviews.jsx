import { useState, useEffect } from 'react';
import { FaStar, FaYelp } from 'react-icons/fa';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const getReviews = () => {
    fetch('reviews.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        /*  
        slow for bigger arrays 
        https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
        */
        let newData = data
          .sort(() => Math.random() - Math.random())
          .slice(0, 3);
        setReviews(newData);
      });
  };
  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div className="reviews_outer">
      {' '}
      {reviews &&
        reviews.length > 0 &&
        reviews.map((review, index) => (
          <div className="reviews_line">
            <div className="reviews_card">
              <div className="reviewer_info">
                <div className="reviewer_photo">
                  <p>{review.name[0]}</p>
                </div>
                <p className="reviewer_name">{review.name}</p>
              </div>
              <div className="reviewer_star_outer">
                {[...Array(review.stars)].map((star) => (
                  <FaStar className="reviewer_star" color="#FCE205" />
                ))}
              </div>
              <div className="reviewer_review">
                <p>{review.review}</p>
              </div>
            </div>
            {index === 0 ? (
              <div className="reviews_yelp">
                <a
                  href="https://www.yelp.com/biz/noor-mediterranean-grill-somerville"
                  className="reviews_yelp_link"
                  target="_blank"
                  rel="noreferrer">
                  <FaYelp />
                  <p>Leave us a review!</p>
                </a>
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
    </div>
  );
}

export default Reviews;
