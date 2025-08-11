```mermaid
sequenceDiagram
participant browser 
participant server

 %%when save button is clicked 
browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
activate server
server-->>browser: 201 created application/json)
deactivate server

