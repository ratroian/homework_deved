CREATE TABLE universities(
 id serial PRIMARY KEY,
 country TEXT NOT NULL,
 city TEXT NOT NULL,
 name TEXT NOT NULL,
 accreditation int NOT NULL
);

CREATE TYPE user_role AS ENUM ('student', 'teacher');

CREATE TABLE users(
 id serial PRIMARY KEY,
 name TEXT NOT NULL,
 age int NOT NULL,
 university_id int NOT NULL,
 status user_role,
 FOREIGN KEY (university_id) REFERENCES universities(id)
);

CREATE TABLE cources(
 id serial PRIMARY KEY,
 name TEXT NOT NULL,
 teacher_id int NOT NULL,
 FOREIGN KEY (teacher_id) REFERENCES users(id)
);

CREATE TABLE marks (
 id serial PRIMARY KEY,
 mark int NOT NULL,
 student_id int NOT NULL,
 course_id int NOT NULL,
 FOREIGN KEY (course_id) REFERENCES cources(id),
 FOREIGN KEY (student_id) REFERENCES universities(id)
);

CREATE TABLE users_cources(
 user_id int NOT NULL,
 FOREIGN KEY (user_id) REFERENCES users(id),
 cources_id int NOT NULL,
 FOREIGN KEY (cources_id) REFERENCES cources(id)
);

