# Skip Hire Selection Interface

A modern, responsive React application for selecting skip sizes for waste disposal services, built with React, TypeScript, and Tailwind CSS.

## 🚀 Development Approach

The application follows a clean, modular development approach with clear separation of concerns:

1. **Page Component (`SkipSelection`)**

   - Serves as the container for the entire skip selection page
   - Uses the `useSkipSelection` hook for data management
   - Composes layout and skip components together
   - Handles navigation and UI state

2. **Custom Hook (`useSkipSelection`)**

   - Encapsulates all business logic and data fetching
   - Manages skip data, loading states, and filtering
   - Provides selection functionality independent of UI

3. **Layout Components**

   - `ProgressBar`: Shows booking progress steps with horizontal scrolling. Right now its not functional or interactive
   - Handles responsive behavior across devices
   - Maintains consistent UI structure

4. **Skip Components**
   - `CategoryFilter`: Handles filtering of skips by size category
   - `SkipList`: Displays skips in table (desktop) or card (mobile) format
   - Focuses purely on presentation with props from parent
