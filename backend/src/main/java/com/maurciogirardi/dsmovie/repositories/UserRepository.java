package com.maurciogirardi.dsmovie.repositories;

import com.maurciogirardi.dsmovie.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
