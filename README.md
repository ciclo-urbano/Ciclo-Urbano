# Ciclo Urbano


## Project Description

For this project we worked with West Town Bikes, a Chicago area youth-focused nonprofit, to create a digital inventory of bikes for Ciclo Urbano, their brick-and-mortar storefront. Our application allows users to browse in-stock bikes without having to visit the shop in person or call, which were the only previous ways. 

## Mockups

### Home
![alt text](https://i.imgur.com/1jsouiKm.png "Mockup - Home")

### Bikes
![alt text](https://i.imgur.com/Cc0JBrFm.png "Mockup - Bikes")

### Bike Details
![alt text](https://i.imgur.com/7LD4dlom.png "Mockup - Details")

### Login/Create User
![alt text](https://i.imgur.com/QuWea8Em.png "Mockup - Login")

### Add Bike
![alt text](https://i.imgur.com/hp8AWZOm.png "Mockup - Add")

### Edit Bike
![alt text](https://i.imgur.com/XyINdn6m.png "Mockup - Edit")

## Component Hierarchy

https://whimsical.com/bike-shop-component-hierarchy-Qce9EyUxakGVpkLiAsjPgi

## Schema


```jsx

const Bike = new Schema({
    model: String,
    make: String,
    category: String,
    description: String,
    price: String,
    size: String,
    isSold: Boolean,
    onHold: Boolean,
    });
 
const User = new Schema({
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

https://docs.google.com/document/d/1YVS7fB8tx3OwuwKuecyFbrRGISdLhzSySwKXC2LJNgY/edit
