# Overview

BitcoinHub is a modern web application focused on Bitcoin education and institutional adoption trends. The app provides users with real-time Bitcoin statistics, price predictions from industry experts, and insights into cutting-edge developments like Lightning Network evolution and ETF adoption. Built as a full-stack application with React frontend and Express backend, it's designed to serve as an informational hub for Bitcoin enthusiasts and investors tracking the cryptocurrency's institutional transformation in 2025.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side application is built with React and TypeScript, utilizing a component-based architecture with the following key decisions:

- **UI Framework**: Implements shadcn/ui component library with Radix UI primitives for consistent, accessible components
- **Styling**: Uses Tailwind CSS with CSS variables for theming, supporting dark mode with orange/yellow accent colors
- **Routing**: Wouter for lightweight client-side routing with simple route management
- **State Management**: TanStack Query for server state management and caching, providing optimistic updates and background refetching
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
The server-side follows a REST API pattern with Express.js:

- **Framework**: Express.js with TypeScript for type safety
- **Architecture Pattern**: Layered architecture separating routes, storage interface, and business logic
- **Storage Abstraction**: IStorage interface allows switching between memory storage (development) and database storage (production)
- **Development Setup**: Integrated Vite middleware for full-stack development experience

## Data Storage Solutions
The application uses a flexible storage approach:

- **Development**: In-memory storage implementation for rapid development
- **Production Ready**: Drizzle ORM configured for PostgreSQL with Neon Database serverless connection
- **Schema Management**: Shared TypeScript schema definitions with Zod validation
- **Migrations**: Drizzle Kit for database schema migrations and updates

## Authentication and Authorization
Currently implements a basic user system:

- **User Model**: Simple username/password structure defined in shared schema
- **Storage Methods**: CRUD operations abstracted through IStorage interface
- **Session Management**: Ready for implementation with connect-pg-simple for PostgreSQL session storage

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database for production workloads
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect support

### Frontend Libraries
- **shadcn/ui Components**: Complete UI component system built on Radix UI primitives
- **TanStack Query**: Server state management with caching and synchronization
- **Wouter**: Minimalist routing library for single-page applications
- **React Hook Form**: Form state management with validation support

### Development Tools
- **Vite**: Build tool with HMR and optimized bundling
- **TypeScript**: Static type checking across the entire application
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **ESBuild**: Fast JavaScript bundler for server-side code compilation

### Infrastructure
- **Replit Integration**: Built-in deployment and development environment support
- **Font Assets**: Google Fonts integration for typography (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)