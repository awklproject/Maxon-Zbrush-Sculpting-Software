## TODO:
---------
backend
-------

- (x) creation of booking system
- (x) -2- achieve end to end booking without authentication
- (x) add user authentication 
- (x) add logout
- ( ) add edit account / delete account apis 
- (x) -3- create a group for suppliers
- ( ) add getofferbyid/ API (accessed at /details/ss call)
- ( ) define api access for users/admin/suppliers
- (x) register supplier 
- ( ) login as supplier
- ( ) creation of availability API that fits the calendar 
- ( ) implement permission classes
- ( ) apply permission classes to api views
- ( ) assingn permissions to supplier
- ( ) adding credit field to the user model
- ( ) create api endpoint to credit management
- ( ) note that the credits are connected with the booking, rating and reviews
- ( ) 

-------------------------------
frontend
---------

- (x) make meeting point and drop off point as direct html display
- (x) make static path and linking for the system to store the bookings/offers
- (x) add calendar to details page
- ( ) make booking form and details on the same page
- ( ) add nav bar with categories on the main page(rows vs tabs ?)
- ( ) when you click "book now" the book component should open to the booking component ?
- ( ) 

-------------------------------

2-- directly connected to creating the auth system
3-- here Supplier model is not related to the user model 
    maybe it should be so we can take advantage of the models'
    auth system and security systems...
