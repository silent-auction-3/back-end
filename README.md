### Base URL: https://silent-auction-backend.herokuapp.com/

# Authentication

#### Table of Contents  
- [Create Users's Account](#create-users-account)
- [Login User](#login-user)
- [List Auction Categories](#list-auction-categories)

## Create User's Account

Create a User if that User does not already exist.

**URL** : `/api/auth/register`

**Method** : `POST`

**Auth required** : No

**Permissions required** : None

**Data constraints**

Provide username and password of User to be created.

```json
{
    "username": "[64 chars max]",
    "password": "[64 chars max]"
}
```

**Data example** All fields must be sent.

```json
{
    "username": "RobbsLegoStore",
    "password": "Lego2theM@x"
}
```

### Success Response

**Condition** : If everything is OK and the User did not exist.

**Code** : `201 CREATED`

**Content example**

```json
{
    "id": 123,
}
```

### Error Responses

**Condition** : If User already exists.

**Code** : `400 BAD REQUEST`

**Content example**

```json
{
    "errorMessage": "This user already exists"
}
```
###### *Or*

**Condition** : If fields are missed.

**Code** : `400 BAD REQUEST`

**Content example**
```json
{
    "errorMessage": "Missing required field: [fieldName]"
}
```
## Login User

Login a User to create an Authentication Token if that User exists and is authenticated.

**URL** : `/api/auth/login`

**Method** : `POST`

**Auth required** : No

**Permissions required** : None

**Data constraints**

Provide username and password of a User to create an Authetication Token.

```json
{
    "username": "[64 chars max]",
    "password": "[64 chars max]"
}
```

**Data example** All fields must be sent.

```json
{
    "username": "RobbsLegoStore",
    "password": "Lego2theM@x"
}
```

### Success Response

**Condition** : If everything is OK and the username and password where authenticated.

**Code** : `200 OK`

**Content example**

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtRsrrA3uyU"
}
```

### Error Responses

**Condition** : If the User has an inaccurate username or password.

**Code** : `401 UNAUTHORIZED`

**Content example**

```json
{
    "errorMessage": "The username and password are not accurate"
}
```
###### *Or*

**Condition** : If fields are missed.

**Code** : `400 BAD REQUEST`

**Content example**
```json
{
    "errorMessage": "Missing required field: [fieldName]"
}
```
## List Auction Categories

Retrieve an array of Auction Categories.

**URL** : `/api/categories`

**Method** : `GET`

**Auth required** : No

**Permissions required** : None

**Data constraints** : None

### Success Response

**Condition** : If everything is OK.

**Code** : `200 OK`

**Content example**

```json
[
  {
    "id": 1,
    "category_name": "Fashion",
    "category_description": "Clothing, Shoes, Jewelry, Watches"
  },
  {
    "id": 2,
    "category_name": "Books, Movies & Music",
    "category_description": "Books, Movies, Music, Musical Instuments, "
  }
]
```

