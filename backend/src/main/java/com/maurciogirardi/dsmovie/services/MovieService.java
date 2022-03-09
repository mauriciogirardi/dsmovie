package com.maurciogirardi.dsmovie.services;

import com.maurciogirardi.dsmovie.dto.MovieDTO;
import com.maurciogirardi.dsmovie.entities.Movie;
import com.maurciogirardi.dsmovie.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class MovieService {
    @Autowired
    private MovieRepository repository;

    @Transactional(readOnly = true)
    public Page<MovieDTO> findAllMovies(Pageable pageable) {
        Page<Movie> result = repository.findAll(pageable);
        return result.map(MovieDTO::new);
    }

    @Transactional(readOnly = true)
    public MovieDTO findByIdMovie(Long id) {
        Movie result = repository.findById(id).get();
        return new MovieDTO(result);
    }
}
