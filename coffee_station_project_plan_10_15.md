# Coffee_station — Project Documentation

## 1. Project Overview

### 1.1 Purpose

The purpose of this project is to develop a cafe management and ordering platform that helps customers browse the product, place orders, and make reservations conveniently without visiting the cafe in person.

Additionally, administrators can manage the cafe's product by adding, updating, and removing food items through the application. This system aims to improve customer experience, increase sales opportunities, and simplify cafe operations.

### 1.2 Project Objectives

1. Provide customers with a convenient way to browse and purchase cafe products online.
2. Enable customers to make reservations without needing to visit the cafe in person.
3. Increase sales by improving the efficiency and accessibility of the ordering process.
4. Promote the cafe's brand, product, and services to a wider range of customers.

### 1.3 Who will use

- Cafe customers (browsing, ordering, reserving)
- Cafe staff/marketing (brand presentation — read-only for now, no admin UI yet)
- Software Engineer (you — build and maintain it)

---

## 2. Project Scope

### 2.1 Product Scope

- Home page
- Booking page
- About page
- Contact page
- Booking page
- Cart (sidebar overlay)

### 2.2 Technical Scope

| Area | Technology |
|---|---|
| Frontend | React.js + Vite.js + TypeScript + Tailwindcss |

### 2.3 Future / Scalable Scope

The scope may increase in later versions.

The following features are currently outside the planned scope:

- Backend - Nest.js
- Database - PostgreSQL

---

## 3. Project Requirements / Features

### 3.1 Major Functions

**Catalog & Ordering**
- Browse product items by category (Coffee, Tea, Desserts, Breakfast, Combos)
- Add item to cart
- Adjust quantity / remove item from cart
- View cart total

**Booking**
- Create a reservation (name, date, guests, preferred time)
- Validate reservation form input

**Site Content**
- View Home page (hero, top sellers, ambience, testimonials)
- View About page
- View Contact page (info + map)
- Responsive layout on mobile through desktop
- Page transitions and scroll animations

---

## 4. Technical Approach

### 4.1 Frontend

- **Framework:** React Vite
- **Router:** React Router
- **Language:** TypeScript
- **UI:** React
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Animations:** Framer Motion
- **Icons:** Lucide React, React Icons

### 4.2 Backend (future, not built in this phase)

- **Framework:** NestJS
- **Language:** TypeScript

### 4.3 Database (future, not built in this phase)

- **Database:** PostgreSQL

### 4.4 Authentication / Security (future, not built in this phase)

1. Sign up and sign in using email.
2. Never commit secrets or credentials to the repository; keep them in environment variables.

---

## 5. Project Structure

### 5.1 High-Level System Architecture

```text
┌─────────────────────────────────┐
│     React + Vite Web (now)      │
│                                 │
│   Pages   │   Cart (Zustand)    │
└────────────────┬────────────────┘
                 │  (planned, future)
                 │  REST
                 ▼
┌─────────────────────────────────┐
│          NestJS API             │
│    Booking   Orders   Bookings     │
└─────────────────┬───────────────┘
                  ▼
┌─────────────────────────────────┐
│          PostgreSQL             │
└─────────────────────────────────┘

```

### 5.2 Main Modules

#### Frontend

- `Navbar`
- `Hero`
- `ProductCard`
- `CartSidebar`
- `TopSelling`
- `Ambience`
- `Testimonials`
- `CTASection`
- `Footer`
- `BookingForm`
- `Category`

#### Backend (future)

- `MenuModule`
- `OrdersModule`
- `BookingsModule`

---

## 6. Development Plan

### Phase 1 — Foundation

#### Task

- Repository 
- Create all issues
- React + Vite + TypeScript app setup
- Tailwind config
- React Router setup
- Page design / design system (colors, fonts, buttons, badges and cards)

### Phase 2 — Core Pages

#### Task

- Layout (Header/Navbar, Footer)
- Router
- Home page (Hero, TopSelling, Ambience, Testimonials)
- About page
- Contact page

### Phase 3 — Shopping Experience

#### Task

- Product page (ProductCard grid, Category filter)
- CartSidebar UI
- Zustand cart store
- Add-to-cart wiring across pages

### Phase 4 — Booking & Polish

#### Task

- Booking page / Booking form
- Framer Motion page transitions
- Responsive pass across breakpoints
- Final bug/polish pass

