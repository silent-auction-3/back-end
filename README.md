# Authentication

## Create User's Account

Create an Account for the authenticated User if an Account for that User does
not already exist. Each User can only have one Account.

**URL** : `/api/auth/register`

**Method** : `POST`

**Auth required** : No

**Permissions required** : None

**Data constraints**

Provide name of Account to be created.

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

## Success Response

**Condition** : If everything is OK and an Account didn't exist for this User.

**Code** : `201 CREATED`

**Content example**

```json
{
    "id": 123,
}
```

## Error Responses

**Condition** : If Account already exists for User.

**Code** : `400 BAD REQUEST`

**Content example**

```json
{
    "errorMessage": "This account already exists"
}
```
### Or

**Condition** : If fields are missed.

**Code** : `400 BAD REQUEST`

**Content example**

```json
{
    "errorMessage": "Missing required field: [fieldName]"
}
```
