[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

### after deploy ...
#### table create & insert data(you need to install 'heroku toolbelt')

 $ heroku pg:psql --app {deployed app name , like 'whispering-badlands-2199'}} DATABASE

 CREATE SEQUENCE users_seq;

 CREATE TABLE IF NOT EXISTS users (
   "id" integer PRIMARY KEY default nextval('users_seq'),
   "name" varchar(30) DEFAULT NULL,
   "email" varchar(128) DEFAULT NULL
 );

 INSERT INTO users (name) VALUES
    ('hogetahogeo', 'hoge@hoge.com');
