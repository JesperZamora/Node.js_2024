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