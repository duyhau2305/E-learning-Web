import { FaStar, FaStarHalf } from "react-icons/fa";


export const renderStars = (rating: any) => {
    let stars = [];
    let fullStars = Math.floor(rating);
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="primary-color" />);
    }
    if (rating - fullStars >= 0.5) {
      stars.push(<FaStarHalf className="primary-color" />);
    }

    return stars;
  };