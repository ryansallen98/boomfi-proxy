---
sidebar_position: 3
---

# Response Patterns

Uqualify's API follows specific response patterns to ensure consistency and clarity in data retrieval and error handling. These response patterns provide a standardized format for interpreting API responses, facilitating seamless integration and error handling within your applications.

## Single Item Response

When the call to Uqualify's API returns a single item in the response, this response will follow the pattern presented below:

```json
{ 
    "data": ... 
}
```

## Paginated Response

For API calls that return multiple items, the response will include an array of items, along with pagination details such as the pointer to the next page and the total number of items. An example format is shown below:

```json
{ 
    "items": [{...}, {...}], 
    "next": 1, 
    "total": 10 
}
```

## Error Response

Error responses from the API include key details like the error code, message, and any additional information relevant to the error, as shown in the example below:

```json
{ 
    "error": true, 
    "data": { 
        "code": #, 
        "message": "...", 
        "errors": [ ... ] 
    } 
}
```

## HTTP Response Codes

Uqualify utilizes standard HTTP response codes to indicate the success or failure of API requests:

    - Codes in the 2xx range usually indicate success.
    - Codes in the 4xx range indicate an error occurred based on the provided information.
    - Codes in the 5xx range indicate an internal error.
