CREATE SEQUENCE IF NOT EXISTS users_seq;
CREATE TABLE IF NOT EXISTS users (
  "id" integer PRIMARY KEY default nextval('users_seq'),
  "name" varchar(30) DEFAULT NULL
);

INSERT INTO users (name) VALUES
    ('hogetahogeo');
