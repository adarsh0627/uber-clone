
# User Endpoints Documentation

## Endpoint


### Register
`POST /users/register`

## Description
Registers a new user in the system. This endpoint creates a user account with the provided details and returns an authentication token upon successful registration.

## Request Body
Send a JSON object with the following structure:

```
{
  "fullname": {
    "firstname": "string (min 3 chars, required)",
    "lastname": "string (min 3 chars, optional)"
  },
  "email": "string (valid email, required)",
  "password": "string (min 6 chars, required)"
}
```

### Example
```
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

## Validation
- `email`: Must be a valid email address.
- `fullname.firstname`: Must be at least 3 characters long.
- `password`: Must be at least 6 characters long.

## Responses

### Success
- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<JWT token>",
    "user": {
      "_id": "<user id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // ...other user fields
    }
  }
  ```

### Validation Error
- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      // ...other errors
    ]
  }
  ```

### Missing Fields
- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "All fields are required"
      }
    ]
  }
  ```

## Notes
- The password is securely hashed before storing.
- The response includes a JWT token for authentication.
- The endpoint expects the request body in JSON format.


---

### Login
`POST /users/login`

## Description
Authenticates an existing user and returns a JWT token if the credentials are valid.

## Request Body
Send a JSON object with the following structure:

```
{
  "email": "string (valid email, required)",
  "password": "string (min 6 chars, required)"
}
```

### Example
```
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

## Validation
- `email`: Must be a valid email address.
- `password`: Must be at least 6 characters long.

## Responses

### Success
- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "token": "<JWT token>",
    "user": {
      "_id": "<user id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // ...other user fields
    }
  }
  ```

### Validation Error
- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      // ...other errors
    ]
  }
  ```

### Authentication Error
- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```


---

### Profile
`GET /users/profile`

## Description
Returns the authenticated user's profile information. Requires a valid JWT token in the request (via cookie or Authorization header).

## Authentication
- Requires authentication (JWT token).

## Responses

### Success
- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "_id": "<user id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
    // ...other user fields
  }
  ```

### Authentication Error
- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Authentication required"
  }
  ```

## Notes
- The endpoint returns the user object attached to the request by the authentication middleware.

---

### Logout
`GET /users/logout`

## Description
Logs out the authenticated user by blacklisting the JWT token and clearing the authentication cookie. Requires a valid JWT token in the request.

## Authentication
- Requires authentication (JWT token).

## Responses

### Success
- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Logged out"
  }
  ```

### Authentication Error
- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Authentication required"
  }
  ```


---

# Captain Endpoints Documentation

## Endpoint

### Register Captain
`POST /captains/register`

## Description
Registers a new captain in the system. This endpoint creates a captain account with the provided details and returns an authentication token upon successful registration.

## Request Body
Send a JSON object with the following structure:

```
{
  "fullname": {
    "firstname": "string (min 3 chars, required)",
    "lastname": "string (min 3 chars, optional)"
  },
  "email": "string (valid email, required)",
  "password": "string (min 6 chars, required)",
  "vehicle": {
    "color": "string (min 3 chars, required)",
    "plate": "string (min 3 chars, required)",
    "capacity": "number (min 1, required)",
    "vehicleType": "string (car|motorcycle|auto, required)"
  }
}
```

### Example
```
{
  "fullname": {
    "firstname": "Alice",
    "lastname": "Smith"
  },
  "email": "alice.smith@example.com",
  "password": "securePassword123",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

## Validation
- `email`: Must be a valid email address.
- `fullname.firstname`: Must be at least 3 characters long.
- `password`: Must be at least 6 characters long.
- `vehicle.color`: Must be at least 3 characters long.
- `vehicle.plate`: Must be at least 3 characters long.
- `vehicle.capacity`: Must be at least 1.
- `vehicle.vehicleType`: Must be one of: car, motorcycle, auto.

## Responses

### Success
- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<JWT token>",
    "captain": {
      "_id": "<captain id>",
      "fullname": {
        "firstname": "Alice",
        "lastname": "Smith"
      },
      "email": "alice.smith@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      }
      // ...other captain fields
    }
  }
  ```

### Validation Error
- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      // ...other errors
    ]
  }
  ```

### Duplicate Email
- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "message": "Captain already exist"
  }
  ```

### Missing Fields
- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "message": "All fields are required"
  }
  ```

## Notes
- The password is securely hashed before storing.
- The response includes a JWT token for authentication.
- The endpoint expects the request body in JSON format.
