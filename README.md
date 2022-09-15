# How to build project

### Client

```sh
cd client
npm i
npm run build
```

### Database

```bash
cd server/sql
mysqldump -uuser -ppassword database_name < test.sql
```

### Server

```sh
cd server
npm i
npm run build
npm run start:prod
```
