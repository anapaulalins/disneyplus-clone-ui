import React from 'react';

import {CarouselCard, CarouselCardItem, CarouselCardItemButton} from './styles';

interface PropsMovies {
  id: number;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  release_date: string;
  genre_ids: Array<number>;
}

interface PropsContainer {
  movies: PropsMovies[];
}

const CarouselContainerItem: React.FC<PropsContainer> = ({movies}) => {
  return (
    <>
      {movies &&
        movies.map((movie) => (
          <CarouselCard key={movie.id}>
            <CarouselCardItemButton>
              <CarouselCardItem
                source={{
                  uri: `https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`,
                }}
                resizeMode="contain"
              />
            </CarouselCardItemButton>
          </CarouselCard>
        ))}
    </>
  );
};

export default CarouselContainerItem;
