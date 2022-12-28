# Node DB 4 Guided Project

Guided project for **Node DB 4** Module.

## Prerequisites

- [SQLite Studio](https://sqlitestudio.pl/) installed.
- a rest client like [Insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.

## Project Setup

- [ ] **import** and clone this repository.
- [ ] **CD into the folder** where you cloned **your version**.
- [ ] type `npm i` to download dependencies.
- [ ] type `npm run server` to start the API.

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be used for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information and build the migrations


## Rules for Designing Tables:
1) Use an artificial primary key (PK)
2) Represents a subject of appointment
3) Table Names: 
    - Plural
    - Be consistent
    - No Acryonyms
    - Not Ambiguous
4) EVERYBODY understand what it is

## Rules for Columns:
1) No multipart columns (ex: "John Doe")
    - use instead -> firstName: "John", lastName: "Doe"
2) No multivalues columns (ex: "1, 3, 5")
    - use another table instead
3) No calculated/derived values
    - this is redundant
4) Holds a SINGLE value
5) No email1, email2, etc columns
    - should be a seperate Emails table
        - this is called Normalizing the data
6) Can't depend on each other
7) PK represents the record (what the table represents)
8) Non-PK are attributes of the record (what the table represents)

