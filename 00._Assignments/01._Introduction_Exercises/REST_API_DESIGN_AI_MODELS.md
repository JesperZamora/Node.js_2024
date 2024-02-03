# REST API Design

| HTTP Method | Endpoint             | Description                                   |
|-------------|----------------------|-----------------------------------------------|
| GET         | /ai-models           | Retrieve all AI models                        |
| GET         | /ai-models/{id}      | Retrieve a specific AI model by ID            |
| POST        | /ai-models           | Create a new AI model                         |
| PUT         | /ai-models/{id}      | Update the entire AI model (replace)          |
| PATCH       | /ai-models/{id}      | Update part of the AI model (partial update) |
| DELETE      | /ai-models/{id}      | Delete a specific AI model                    |

<br>
<br>

# REST API Design - Diagram

```mermaid
graph LR
  subgraph collection
    GET["GET /ai-models"]
    POST["POST /ai-models"]
  end

  subgraph resource
    GET_ID["GET /ai-models/{id}"]
    PUT["PUT /ai-models/{id}"]
    PATCH["PATCH /ai-models/{id}"]
    DELETE["DELETE /ai-models/{id}"]
  end

  GET --> |Retrieve all AI models| collection
  POST --> |Create a new AI model| collection

  GET_ID --> |Retrieve specific AI model by ID| resource
  PUT --> |Update entire AI model -replace| resource
  PATCH --> |Update part of AI model - partial update| resource
  DELETE --> |Delete specific AI model| resource
```

<br>
<br>

# Notes

1. Use the appropriate HTTP method for the action.
   - Follow standard HTTP methods for CRUD operations:
     - GET: Retrieve information
     - POST: Create a new resource
     - PUT: Update an entire resource
     - PATCH: Update part of a resource
     - DELETE: Delete a resource

2. The ordering of the HTTP methods.
   - Follow the CRUD sequence:
     1. GET (Read)
     2. POST (Create)
     3. PUT (Update)
     4. PATCH (Update - partial)
     5. DELETE (Delete)

3. Naming the endpoints so that they map the collection.
   - Use clear and consistent endpoint names:
     - Retrieve all: `/ai-models` (GET)
     - Retrieve specific by ID: `/ai-models/{id}` (GET)
     - Create new: `/ai-models` (POST)
     - Update entire: `/ai-models/{id}` (PUT)
     - Update partial: `/ai-models/{id}` (PATCH)
     - Delete specific: `/ai-models/{id}` (DELETE)
