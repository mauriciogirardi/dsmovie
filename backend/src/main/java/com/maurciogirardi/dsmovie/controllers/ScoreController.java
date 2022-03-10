package com.maurciogirardi.dsmovie.controllers;

import com.maurciogirardi.dsmovie.dto.MovieDTO;
import com.maurciogirardi.dsmovie.dto.ScoreDTO;
import com.maurciogirardi.dsmovie.services.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {

    @Autowired
    private ScoreService service;

    @PutMapping
    public MovieDTO saveScore(@RequestBody ScoreDTO dto) {
        return service.saveScore(dto);
    }
}
