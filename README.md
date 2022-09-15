# How to build project

### Client

```sh
cd client
npm i
change package.json proxy
npm run build
```

### Database

```bash
cd server/src/sql
mysqldump -uuser -ppassword database_name < test_app.sql
```

### Server

```sh
cd server
npm i
npm run build
npm run start:prod
```
