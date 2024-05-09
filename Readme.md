## TODO:
---------
  
the first version of the application is the following : login as supplier or customer  
customer see offers and create orders  
supplier create offers/part of the offers data  
and redeem orders using qrcode/link  
   

a complete rewrite in 10 days be:
---------------------------------
- star

for chat.openai.com 
------------------
what would be the step by step guide to create this system? 
- i want to create a booking system for tourist activities and tours 
Creating a booking system for tourist activities and tours using Django and React is an excellent choice due to the robustness and scalability of Django for backend services and React's reactive and component-driven interface for the frontend. Here's a suggested path to follow, along with the key Django apps you might need and the main React components to consider:


### Django Backend


**1. Project Structure**:
   - **Core**: A core app for fundamental shared models or utilities.
   - **Users**: An app for handling user authentication, profiles, and permissions.
   - **Activities**: This app would manage tour activities, descriptions, images, etc.
   - **Bookings**: Manages bookings, booking dates, user references, and payment status.
   - **Payments**: Handles payment processing integration, such as using Stripe or PayPal.


**2. Key Models and Features**:
   - **User**: Custom user model extending `AbstractUser` for authentication and authorization.
   - **Activity**: Model to store information about different tours and activities. Includes fields like title, description, price, duration, guide information, etc.
   - **Booking**: Model linking users to the activities they’ve booked with fields like date, number of participants, and status (e.g., confirmed, pending, cancelled).
   - **Payment**: Manages payment details and history.


**3. Essential Django Features**:
   - **Django REST Framework**: For building a RESTful API that your React frontend will consume.
   - **Django Signals**: For sending notifications or executing actions triggered by booking or payment updates.
   - **Django ORM**: Efficiently manage database queries for scalability.
   - **Authentication**: Utilize Django’s built-in authentication or integrate with third-party providers using packages like `django-allauth`.

### React Frontend

**1. Components Structure**:
   - **AuthComponents**: For login, registration, and user profile management.
   - **ActivityList**: Display all available activities. Could include search and filter functionalities.
   - **ActivityDetail**: Detailed view of each activity, including booking options.
   - **BookingForm**: A form to finalize and confirm a booking.
   - **UserProfile**: Allows users to view and manage their bookings and personal info.
   - **PaymentComponent**: Handles payment processing.

**2. Key Features and Libraries**:
   - **React Router**: Manage routing across your different components.
   - **State Management**: Use Context API or Redux for managing state across components, especially useful for user authentication and handling booking details across components.
   - **Axios or Fetch API**: For making API requests to your Django backend.
   - **Formik or React Hook Form**: For building forms with validation.
   - **Material-UI or Bootstrap**: For styling your components.

### Development Approach

- **API First**: Design and develop your API using Django and Django REST Framework. Ensure you have solid endpoints for activities, bookings, and user management.
- **Mocking and Prototypes**: Before connecting to the backend, you might use static data in React to develop and test your components.
- **Incremental Development**: Develop feature by feature, ensuring each part works independently and then ensure seamless integration.
- **Testing**: Use Django’s test framework and React testing tools like Jest and React Testing Library to write tests early and often.

### Deployment and Production

- **Docker**: Consider using Docker to containerize your application, making it easier to deploy and scale.
- **CI/CD**: Implement continuous integration and deployment pipelines to automate testing and deployment using platforms like GitHub Actions or GitLab CI.

This approach ensures a robust system capable of handling real-world usage, with Django providing a solid backend and React ensuring a dynamic user interface.


create a complete crud app for a base in Development (feedback-loop needed)

backend
-------

- (x) creation of booking system
- (x) -2- achieve end to end booking without authentication
- (x) add user authentication 
- (x) add logout
- (x) register supplier 
- (x) add edit account / delete account apis 
- (x) add getofferbyid/ API (accessed at /details/ss call)
- (x) create token authentication system with jwt
- ( ) create an api that takes the token to return the user page and the type of the user.
- ( ) ensure correct functionality of jwt connection with the front end
- ( ) define api access for users/admin/
- ( ) implement permission classes
- ( ) -3- create a group for suppliers
- ( ) create api access for suppliers
- ( ) apply permission classes to api views
- ( ) login as supplier
- ( ) creation of availability API that fits the calendar 
- ( ) assingn permissions to supplier
- ( ) adding credit field to the user model
- ( ) create api endpoint to credit management
- ( ) note that the credits are connected with the booking, rating and reviews
- ( ) filter bookings by user / api to display bookings and it's status
- ( ) create links to redeem the bookings and use these links to create the qrcodes
- ( ) list orders for suppliers 
- ( ) supplier accept and redeem bookings
- ( ) user : show booking status 
- ( ) user : show booking history
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
- (x) add login/signup link in the main tabs
- (x) create user login page 
- (x) app bar login tab connect to login component
- (x) ensure connection related to the jwt token that is returned on /api/token
- (x) fix token bug to be stored at local storage
- ( ) check token on page load
- ( ) if user is authenticated do the view
- ( ) ensure session management
- ( ) ensure booking pending
- ( ) connect user login to the api
- ( ) add signup key
- ( ) create signup form
- ( ) connect signup form to the register api
- ( ) create edit account page 
- ( ) create the delete account page
- ( ) design the details page
- ( ) add rows of offers . depending on subcategories/ some filters ? 
- ( ) 

-------------------------------
Notes
-----

2-- directly connected to creating the auth system
3-- here Supplier model is not related to the user model 
    maybe it should be so we can take advantage of the models'


- use jwt for authentication completely except for admin which is connected to the admin model and
    may need some apis
- the difference between user model and the supplier model :
both have username
both need email
both need pass 

