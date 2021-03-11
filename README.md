# Ciclo Urbano

https://hungry-agnesi-3dd2fb.netlify.app/

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

const bikeSchema = new Schema(
  {
    model: { type: String, required: true },
    make: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    size: { type: String, required: true },
    image_url: { type: String, required: true },
    isSold: { type: Boolean, required: true },
    onHold: { type: Boolean, required: true },
  },
  { timestamps: true }
);
 
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

- Full Frontend CRUD functionality
- Full Backend CRUD functionality
- User authorization implemented (site admins can sign up/sign in)
- Landing Page Carousel displays featured bikes
- Responsive design
- Navigation bar
- Search bar 

#### PostMVP  

- Ability for users to "like" their favorite bikes
- Additional filtering options for displayed results (filter by bike size and price)

## Project Tracker

https://github.com/orgs/ciclo-urbano/projects/1


## Team Expectations:

https://docs.google.com/document/d/1YVS7fB8tx3OwuwKuecyFbrRGISdLhzSySwKXC2LJNgY/edit
