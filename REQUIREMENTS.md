# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index 
- Show detail product
- Products by category
- Create [token required]
- Update [token required]
- Delete product [token required]

#### Users
- Index [token required]
- Show Detail [token required]
- Register
- Login
- Edit user

#### Orders
- Current Order by user [token required]
- Get all orders by user [token required]
- Completed Orders by user [token required]

## Data Shapes
#### Product
-  id
- name
- price
- category

#### User
- id
- firstName
- lastName
- userName
- password

#### Orders
- id
- user_id
- status of order (active or complete)
- id of each product in the order

### OrderProduct
- order_id
- product_id
- quantity
