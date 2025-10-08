package com.zwg.paga_ai.config;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.zwg.paga_ai.entities.UserEntity;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Optional;
import java.util.UUID;

@Component
public class TokenConfig {

    // TODO: Alterar a secret para produção
    private static final String JWT_SECRET = "secret";
    private static final Algorithm ALGORITHM = Algorithm.HMAC256(JWT_SECRET);

    public String generateToken(UserEntity user) {
        return JWT.create()
                .withClaim("userId", user.getId().toString())
                .withSubject(user.getUsername())
                .withExpiresAt(Instant.now().plusSeconds(86400))
                .withIssuedAt(Instant.now())
                .sign(ALGORITHM);
    }

    public Optional<JTWUserData> validateToken(String token) {
        try {
            DecodedJWT decoded = JWT.require(ALGORITHM).build().verify(token);
            return Optional.of(new JTWUserData(
                    UUID.fromString(decoded.getClaim("userId").asString()),
                    decoded.getSubject()
            ));
        } catch (JWTVerificationException exception) {
            return Optional.empty();
        }
    }
}
