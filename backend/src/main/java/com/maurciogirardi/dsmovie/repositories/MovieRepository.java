package com.maurciogirardi.dsmovie.repositories;

import com.maurciogirardi.dsmovie.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
