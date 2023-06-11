USE codebridge;

CREATE TABLE dogs (
  id INT AUTOINCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  color VARCHAR(255) NOT NULL,
  tail_length INT NOT NULL,
  weight INT NOT NULL,
  createdAt CURRENT_TIMESTAMP,
  updatedAt CURRENT_TIMESTAMP
);

INSERT INTO dogs (name, color, tail_length, weight)
VALUES
  ('Neo', 'red & amber', 22, 32),
  ('Jessy', 'black & white', 7, 14);
