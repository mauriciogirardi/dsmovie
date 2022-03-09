package com.maurciogirardi.dsmovie.controllers;

import com.maurciogirardi.dsmovie.dto.MovieDTO;
import com.maurciogirardi.dsmovie.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/movies")
public class MovieController {
    @Autowired
    private MovieService service;

    @GetMapping
    public Page<MovieDTO> findAllMovies(Pageable pageable) {
        return service.findAllMovies(pageable);
    }

    @GetMapping(value = "/{id}")
    public MovieDTO findMovie( @PathVariable Long id) {
        return service.findByIdMovie(id);
    }
}
