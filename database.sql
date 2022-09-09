-- my database info will go here

CREATE TABLE "tasks" (
  "id" SERIAL PRIMARY KEY,
  "task" VARCHAR(200) NOT NULL,
  "completed" BOOLEAN
);

--dummy tester data

INSERT INTO "tasks"
	("task", "completed")
	VALUES
	('Clean the bathroom', false),
	('Take out the trash', false);