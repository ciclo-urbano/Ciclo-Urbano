# Ciclo Urbano


## Project Description

For this project we worked with West Town Bikes, a Chicago area youth-focused nonprofit, to create a digital inventory of bikes for Ciclo Urbano, their brick-and-mortar storefront. Our application allows users to browse in-stock bikes without having to visit the shop in person or call, which were the only previous ways. 

## Wireframes



## Component Hierarchy


## Schema


```jsx

const bikeSchema = new Schema({
    model: String,
    make: String,
    category: String,
    description: String,
    size: String,
    isSold: Boolean,
    onHold: Boolean,
    });
 
const userSchema = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    admin: Boolean,
    });

```

### MVP/PostMVP


#### MVP 
*These are examples only. Replace with your own MVP features.*

- Find and use external api 
- Render data on page 
- Allow user to choose favorites 

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

- Add second API
- Use local storage to save user favorites

## Project Tracker

https://github.com/orgs/ciclo-urbano/projects/1


## Team Expectations:


