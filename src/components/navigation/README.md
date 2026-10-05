# Navigation

This directory contains the reusable navigation UI and its supporting data: labels, icons, link destinations, and navigation-specific types. It helps the marketing site and dashboard present consistent links without putting navigation configuration inside page components.

## What belongs here

- Navigation components that render menus or navigation actions.
- Navigation configuration, such as labels, icons, ordering, and destination links.
- Types used to describe navigation items.
- Central route constants used by navigation links.

Page content belongs under `src/app`. Feature-specific screens and business logic belong under `src/features`. The dashboard layout and sidebar shell belong under `src/components/layouts/dashboard`; this directory supplies the sidebar's navigation data and shared link components.

## Current structure

```text
navigation/
├── dashboard/
│   ├── config/
│   │   └── dashbooard.config.ts       # Dashboard sidebar entries
│   ├── routes/
│   │   ├── auth/auth.routes.ts        # Sign-in and sign-up paths
│   │   ├── dashboard/dashboard.routes.ts # Dashboard pages and API paths
│   │   └── marketing/marketing.routes.ts # Marketing sections and shared destinations
│   └── types/
│       └── dashboardNavigation.type.ts # Dashboard sidebar item types
└── marketing/
    ├── auth/
    │   └── authButtonProvider.tsx     # Sign-in, sign-up, dashboard, and user actions
    ├── config/
    │   └── navigation.config.ts       # Marketing menu entries
    ├── navigationComponent/
    │   └── marketing.navigation.tsx   # Renders the configured marketing links
    └── types/
        └── types.ts                   # Marketing navigation item type
```

The dashboard route constants currently live under `dashboard/routes`, including the marketing and auth route files. This README describes their current location; it does not imply that each route file is used by every navigation component.

## How the pieces connect

The dashboard sidebar layout imports `dashboard/config/dashbooard.config.ts` and renders its top-level entries. Those entries use page URL constants from `DASHBOARD_ROUTES`. The marketing header renders entries from `marketing/config/navigation.config.ts`; section links use IDs from `MARKETING_ROUTES.SECTIONS`, which should match the corresponding section IDs on the marketing pages.

Keep navigation destinations as page URLs or section anchors. API endpoint constants may also appear in the dashboard route registry, but they are for data requests and must not be used as menu links.

## Adding a navigation entry

1. Confirm the destination page exists under `src/app`, or the marketing section ID exists on its page.
2. Use the appropriate route constant where one exists. If a route is new, add its page URL to the appropriate route registry and then reference it from the config.
3. Add the label, icon, and destination to the relevant navigation config; keep rendering and layout behavior in the navigation or layout component.
4. For dashboard child entries, make sure the sidebar renderer supports and displays `items`. The current sidebar layout renders top-level entries only.

Navigation controls where a user can go; it does not protect a route. Authentication and authorization checks belong in the dashboard route layout, proxy, and backend/API layer.
