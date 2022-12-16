# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

-   Index
-   Show
-   Create [token required]
-   Top 5 most popular products
-   Products by category (args: product category)

#### Users

-   Index [token required]
-   Show [token required]
-   Create

#### Orders

-   Current Order by user (args: user id)[token required]
-   Completed Orders by user (args: user id)[token required]

## Data Shapes

### Product
| Column        | Data type                     | 
| ------------- | ----------------------------- |
| `id`          | serial primary key            | 
| `name`        | varchar(100)                  | 
| `price`       | int                           | 
| `category`    | varchar(100)                  | 


### User
| Column        | Data type                     | 
| ------------- | ----------------------------- |
| `id`          | serial primary key            | 
| `firstName`   | varchar(100)                  | 
| `lastName`    | varchar(100)                  | 
| `username`    | varchar(100) not null         | 
| `password`    | varchar(100) not null         |  


### Orders
| Column        | Data type                     | 
| ------------- | ----------------------------- |
| `id`          | serial primary key            | 
| `user_id`     | int REFERENCES users(id)      | 
| `status`      | varchar(100)                  | 


### Order_Products
| Column        | Data type                     | 
| ------------- | ----------------------------- |
| `id`          | serial primary key            | 
| `order_id`    | int REFERENCES orders(id)     | 
| `product_id`  | int REFERENCES products(id)   |