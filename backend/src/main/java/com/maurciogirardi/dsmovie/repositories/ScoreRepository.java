package com.maurciogirardi.dsmovie.repositories;

import com.maurciogirardi.dsmovie.entities.Score;
import com.maurciogirardi.dsmovie.entities.ScorePK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
