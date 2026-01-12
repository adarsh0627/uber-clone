
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

## Notes
- The endpoint blacklists the JWT token for 24 hours and clears the authentication cookie.
- After logout, the token cannot be used for authentication until it expires from the blacklist.
