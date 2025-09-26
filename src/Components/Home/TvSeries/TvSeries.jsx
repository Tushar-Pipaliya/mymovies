import React from 'react';
import Card from '../moviesData/Card';
import tvseriesbg from '../../../assets/tvseriesbg.jpg'

const movies = [
    {
        tabName: "TV Show",
        items: [
            {
                title: "Women's Day",
                year: "2025",
                duration: "150",
                rating: "3.5",
                quality: "HD",
                image: "	https://movflxx.netlify.app/img/poster/ucm_poster09.jpg",
            },
            {
                title: "The Perfect Match",
                year: "2022",
                duration: "128",
                rating: "4.0",
                quality: "2K",
                image: "https://movflxx.netlify.app/img/poster/ucm_poster10.jpg",
            },
            {
                title: "The Dog Woof",
                year: "2025",
                duration: "120",
                rating: "4.2",
                quality: "4K",
                image: "https://movflxx.netlify.app/img/poster/ucm_poster03.jpg",
            },
            {
                title: "The Easy Reach",
                year: "2021",
                duration: "128",
                rating: "3.8",
                quality: "4K",
                image: "https://movflxx.netlify.app/img/poster/ucm_poster04.jpg",
            },
            {
                title: "Adventure Land",
                year: "2023",
                duration: "140",
                rating: "4.5",
                quality: "HD",
                image: "https://movflxx.netlify.app/img/poster/ucm_poster05.jpg",
            },
            {
                title: "Love & Life",
                year: "2020",
                duration: "115",
                rating: "3.9",
                quality: "2K",
                image: "https://movflxx.netlify.app/img/poster/ucm_poster06.jpg",
            },
            {
                title: "Ocean Mystery",
                year: "2019",
                duration: "132",
                rating: "4.1",
                quality: "HD",
                image: "https://movflxx.netlify.app/img/poster/ucm_poster07.jpg",
            },
            {
                title: "Future World",
                year: "2024",
                duration: "150",
                rating: "4.7",
                quality: "4K",
                image: "https://movflxx.netlify.app/img/poster/ucm_poster08.jpg",
            },
        ],
    },
];

const TvSeries = () => {
    // Only take the first 4 TV show items
    const tvShows = movies[0].items.slice(0, 4);

    return (
        <div
            className=" bg-center bg-cover pt-32 pb-20 " style={{ backgroundImage: `url(${tvseriesbg})` }}>
            <div className='px-4'>
                <div className="px-4 mb-14 flex flex-col justify-center items-center">
                    <span className="block leading-none text-xs uppercase font-medium relative mb-3 tracking-wide text-primary">
                        Best TV Series
                    </span>
                    <h2 className="mb-0 text-3xl md:text-4xl text-white font-bold">
                        World Best TV Series
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                    {tvShows.map((movie, index) => (
                        <Card
                            key={index}
                            title={movie.title}
                            year={movie.year}
                            duration={movie.duration}
                            rating={movie.rating}
                            quality={movie.quality}
                            image={movie.image}
                        />
                    ))}
                </div>
            </div>
        </div>

    );
};

export default TvSeries;
