import React from "react";
import dataa from "../../data";
import MovieCard from "./Cards/movieCard";
export default function moviesArea() {
  return (
    <>
      {dataa.map((sect, index) => (
        <div className="categories_content_movies grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 gap-2 " key={index}>
          {sect.movies && (
          
              sect.movies.map((movie) => (
                <MovieCard
                  img={movie.picture}
                  title={movie.name}
                  ratings={movie.ratings}
                  CineJosh={movie.CineJosh}
                  Telugu={movie.TeluguMirchi}
                 
                  Telugu123={movie.Telugu123}
                  telugubulletin={movie.telugubulletin}
                ></MovieCard>
              ))
         
          )}
        </div>
      ))}
    </>
  );
}
