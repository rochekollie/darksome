-- This is a comment
CREATE TABLE employees (
  id INT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100),
  hire_date DATE,
  salary DECIMAL(10, 2)
);

INSERT INTO employees (id, first_name, last_name, email, hire_date, salary)
VALUES
  (1, 'John', 'Doe', 'john.doe@example.com', '2023-04-20', 700.00),
  (2, 'Jane', 'Doe', 'jane.doe@example.com', '2023-04-20', 900.00),
  (3, 'Bob', 'Smith', 'bob.smith@example.com', '2023-04-20', 400.00),
  (4, 'Alice', 'Joe', 'alice.joe@example.com', '2023-04-20', 500.00);

SELECT
  first_name,
  last_name,
  email,
  hire_date,
  salary
FROM
  employees
WHERE
  salary > 500.00;
