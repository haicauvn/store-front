db-migrate create user-table --sql-file

db-migrate up

db-migrate down

Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser