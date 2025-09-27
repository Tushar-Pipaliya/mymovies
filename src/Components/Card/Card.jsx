import React from 'react';

const MovieCard = ({ title, date, quality, duration, rating, imgSrc, link }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
      <div className="movie-item mb-12">
        <div className="movie-poster">
          <a href={link}>
            <img src={imgSrc} alt={title} className="w-full h-auto rounded-lg" />
          </a>
        </div>
        <div className="movie-content p-4">
          <div className="top flex justify-between items-center mb-4">
            <h5 className="title text-xl font-semibold text-gray-900">
              <a href={link}>{title}</a>
            </h5>
            <span className="date text-sm text-gray-600">{date}</span>
          </div>
          <div className="bottom">
            <ul className="flex items-center space-x-3 text-sm text-gray-700">
              <li><span className="quality py-1 px-3 bg-gray-200 rounded-md">{quality}</span></li>
              <li><span className="duration flex items-center"><i className="far fa-clock mr-1"></i>{duration}</span></li>
              <li><span className="rating flex items-center"><i className="fas fa-thumbs-up mr-1"></i>{rating}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const MovieGrid = () => {
  const movies = [
    { title: 'Women\'s Day', date: '2022', quality: 'HD', duration: '128 min', rating: '3.5', imgSrc: 'https://movflxx.netlify.app/img/poster/ucm_poster01.jpg', link: '/movie-details' },
    { title: 'The Perfect Match', date: '2022', quality: '2K', duration: '128 min', rating: '3.5', imgSrc: 'https://movflxx.netlify.app/img/poster/ucm_poster02.jpg', link: '/movie-details' },
    { title: 'The Dog Woof', date: '2021', quality: '4K', duration: '128 min', rating: '3.5', imgSrc: 'https://movflxx.netlify.app/img/poster/ucm_poster03.jpg', link: '/movie-details' },
    { title: 'The Easy Reach', date: '2021', quality: '4K', duration: '128 min', rating: '3.5', imgSrc: 'https://movflxx.netlify.app/img/poster/ucm_poster04.jpg', link: '/movie-details' },
    { title: 'The Cooking', date: '2021', quality: '4K', duration: '128 min', rating: '3.5', imgSrc: 'https://movflxx.netlify.app/img/poster/ucm_poster05.jpg', link: '/movie-details' },
    { title: 'The Hikaru', date: '2021', quality: '4K', duration: '128 min', rating: '3.5', imgSrc: 'https://movflxx.netlify.app/img/poster/ucm_poster06.jpg', link: '/movie-details' },
    { title: 'Life Quotes', date: '2021', quality: '4K', duration: '128 min', rating: '3.5', imgSrc: 'https://movflxx.netlify.app/img/poster/ucm_poster07.jpg', link: '/movie-details' },
    { title: 'The Beachball', date: '2021', quality: '4K', duration: '128 min', rating: '3.5', imgSrc: 'https://movflxx.netlify.app/img/poster/ucm_poster08.jpg', link: '/movie-details' },
    { title: 'The Beachball', date: '2021', quality: '4K', duration: '128 min', rating: '3.5', imgSrc: 'https://movflxx.netlify.app/img/poster/ucm_poster09.jpg', link: '/movie-details' },
    { title: 'The Beachball', date: '2021', quality: '4K', duration: '128 min', rating: '3.5', imgSrc: 'https://movflxx.netlify.app/img/poster/ucm_poster10.jpg', link: '/movie-details' },

  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {movies.map((movie, index) => (
        <MovieCard 
          key={index}
          title={movie.title}
          date={movie.date}
          quality={movie.quality}
          duration={movie.duration}
          rating={movie.rating}
          imgSrc={movie.imgSrc}
          link={movie.link}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
