INSERT INTO departments(department_name)
VALUES ('Management'),
('Sales'),
('Warehouse'),
('Human Resources'),
('Quality Control');

INSERT INTO roles(title, salary, department_id)
VALUES('Regional Manager', 20000, 1),
('Sales Rep', 15000, 2),
('HR Rep', 10000, 4);

INSERT INTO employees(first_name, last_name)
VALUES('Tim', 'Beesly'),
('Michael', 'Brown'),
('Jim', 'Jones');
