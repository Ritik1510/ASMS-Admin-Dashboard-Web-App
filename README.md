# Gate-G Admin dashboard web app. 
Admin dashboard web app Live here: https://admin.thinkwithoutlimits.com <br>
Deployed on vercel, usng subdomain of https://thinkwithoutlimits.com


# Apartment & Society Management System — Frontend

The Gate-G frontend is the web interface for the Apartment & Society Management System. It provides the public marketing website and the authenticated admin dashboard used to manage society operations.

The frontend is designed around a simple separation:

* **Marketing** — public-facing website that introduces Gate-G, its purpose, features, pricing, and early access.
* **Dashboard** — authenticated administrative interface for managing society data and operations.

## Features

### Marketing Website

* Product introduction and positioning
* Why Gate-G section
* How Gate-G works
* Core product features
* Admin, guard, and resident overview
* Pricing / early access
* Responsive navigation and mobile menu
* Responsive marketing layout
* Public footer and navigation

### Admin Dashboard

The dashboard provides the administrative interface for society management, including:

* Society overview
* User management
* Apartment management
* Complaint management
* Notice management
* Visitor management

Some modules are currently under active development as the Gate-G MVP is being built.

## Technologies

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **shadcn/ui**
* **Radix UI**
* **Clerk** — authentication
* **TanStack Table** — data tables
* **Lucide React** — icons
* **Fetch API** — HTTP communication

## Project Structure

The frontend is organized around the two primary application surfaces:

```text
src/
├── app/
│   ├── marketing/
│   └── dashboard/
│
├── components/
│   ├── marketing/
│   ├── dashboard/
│   ├── shared/
│   └── ui/
│
└── lib/
```

