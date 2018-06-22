#preparing the Database

Do the following as root

```sql
create database shop_db;
create user shoppers identified by 'pass';
use shop_db;
grant all privileges on shop_db to shoppers;
grant all privileges on shop_db.* to shoppers;
```