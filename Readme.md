## TODO:
---------
backend
-------

- (x) creation of booking system
- (x) -2- achieve end to end booking without authentication
- (x) add user authentication 
- (x) add logout
- (x) -3- create a group for suppliers
- (x) register supplier 
- ( ) add edit account / delete account apis 
- ( ) add getofferbyid/ API (accessed at /details/ss call)
- ( ) define api access for users/admin/suppliers
- ( ) login as supplier
- ( ) creation of availability API that fits the calendar 
- ( ) implement permission classes
- ( ) apply permission classes to api views
- ( ) assingn permissions to supplier
- ( ) adding credit field to the user model
- ( ) create api endpoint to credit management
- ( ) note that the credits are connected with the booking, rating and reviews
- ( ) filter bookings by user / api to display bookings and it's status
- ( ) 

-------------------------------
frontend
---------

- (x) make meeting point and drop off point as direct html display
- (x) make static path and linking for the system to store the bookings/offers
- (x) add calendar to details page
- (x) make booking form and details on the same page
- (x) note to remove the routing  if done
- (x) add nav bar
- (x) make calendar and booking form at the end of the page
- (x) when you click booknow it get u to the end of the page to enter info
- (x) put the tabs inside an appbar 
- (x) main page tabs : light current page and link to the other pages
- ( ) create user login page and connect it to the api
- ( ) design the details page
- ( ) add rows of offers . depending on subcategories/ some filters ? 
- ( ) 

-------------------------------

2-- directly connected to creating the auth system
3-- here Supplier model is not related to the user model 
    maybe it should be so we can take advantage of the models'
    auth system and security systems...
