CREATE EXTENSION "uuid-ossp";
CREATE TABLE IF NOT EXISTS "User"
(
    id        UUID DEFAULT uuid_generate_v4() NOT NULL
        CONSTRAINT "User_pkey"
            PRIMARY KEY,
    name      VARCHAR(50)                     NOT NULL,
    email     VARCHAR(50)                     NOT NULL
        CONSTRAINT "User_email_key"
            UNIQUE,
    user_name VARCHAR(50)                     NOT NULL
        CONSTRAINT "User_user_name_key"
            UNIQUE,
    pw        VARCHAR(99)                     NOT NULL
);

CREATE TABLE IF NOT EXISTS "Tweet"
(
    id      UUID      DEFAULT uuid_generate_v4() NOT NULL
        CONSTRAINT "Tweet_pkey"
            PRIMARY KEY,
    created TIMESTAMP DEFAULT now(),
    message VARCHAR(280)                         NOT NULL,
    "user"  UUID                                 NOT NULL
        CONSTRAINT user_fk
            REFERENCES "User"
);

CREATE TABLE IF NOT EXISTS "Like"
(
    id     UUID DEFAULT uuid_generate_v4() NOT NULL
        CONSTRAINT "Likes_pkey"
            PRIMARY KEY,
    tweet  UUID                            NOT NULL
        CONSTRAINT tweet_fk
            REFERENCES "Tweet",
    "user" UUID                            NOT NULL
        CONSTRAINT user_fk
            REFERENCES "User"
);
