# The BAMAZON Storefront App

1. This node application provides a basic utility to enter and manage inventory for sales purposes on both the customer and manager ends. It provides a menu to help direct user needs and updates through a mysql database. 

2. As previously mentioned, this is a node app on both the customer and manager sales ends. 

    1. The customer app provides a list of all products and prices, and then asks how many they would like to purchase. If there is not enough inventory for a large order, then it replies with "Insufficient Quantity!"

    2. The Manager app is a little more robust, starting with a menu that offers 4 services and an exit. Depending on which menu item is selected, the user is then led down a path to either see product information or enter new product information into the database. 

This app uses the inquirer and mysql npm packages for both apps and references the same mysql database. Find database info in the schema.sql file. 

3. The customer app and the manager app are similar in how they are run, but different js files are needed to be called to reference each: 

    1. For the customer app, open the corresponding folder in your terminal, and then begin the process by typing "node bamazonCustomer.js". Once the app loads, read the data in the table that displays and enter in a product ID # to select it for purchase, and then enter how many of the product you would like to "buy". If there is enough inventory the app will either process the order order return an insuffient quantity notice. The database will be updated with a reduced number of products should the request go through. 
    
    2. For the manager app, pen the corresponding folder in your terminal, and then begin the process by typing "node bamazonManager.js". Once the app loads, the user is prompted with 4 options, plus an exit option, as listed below: 

        1. View Products for Sale
        2. View Low Inventory (below 30)
        3. Add to Inventory
        4. Add New Product
        5. Exit

    Following commands 1 & 2, a table or series of tables will load showing a ever product for sale or just those products with less than 30 in inventory, respectively.

    Following commands 3 & 4, a prompt will load asking for information to either increase the amount of product in inventory or add a new product all together, respectively. Once completed, the database will be updated with an increased number of existing products or new products. 

    For Reference:
    
    * node bamazonCustomer.js
    * node bamazonManager.js

4. Here are a few photo examples of the each node app:
    1. bamazonCustomer
        * ![InsufficientQuantity] (./images/bamazon_customer_insufficient_quantity.png)
        * ![OrderProcessed] (./images/bamazon_customer_order_processed.png)
        * ![ProductList] (./images/bamazon_customer_product_list.png)
    2. bamazonManager
        * ![AddNewProduct] (./images/bamazon_manager_add_new_product.png)
        * ![LowInventory] (./images/bamazon_manager_low_inventory.png)
        * ![NewInventoryQuantity] (./images/bamazon_manager_new_inventory_quantity.png)
        * ![OpenMenu] (./images/bamazon_manager_open_menu.png)
        * ![ShowInventory] (./images/bamazon_manager_show_inventory.png)

5. Link to app: https://github.com/RyanGelow/bamazon

6. Technologies/npm packages used:
    
    * mysql
    * inquirer
 
7. List of key individuals:
    * Lead-Developer: Ryan Gelow
