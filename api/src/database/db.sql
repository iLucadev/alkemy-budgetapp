-- Users table
CREATE TABLE users(
    user_id INT(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(16) NOT NULL,
    user_password VARCHAR(60) NOT NULL,
    user_email VARCHAR(50) NOT NULL,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)

-- Operations table
CREATE TABLE operations(
    operation_id INT(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(50) NOT NULL,
    concept VARCHAR(250) NOT NULL,
    amount INT UNSIGNED NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)