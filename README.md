# Full Calendar

Give it a star if you like this project! ⭐

A modern, feature-rich calendar application built with Next.js, TypeScript, and Tailwind CSS. This project provides a
customizable and interactive calendar experience with multiple views, event management, and a modern UI.

# Check out this blog post on Medium:

https://medium.com/@yaceeer/building-a-full-featured-calendar-application-with-react-e249b3084b23

## Demo

![Screenshot 2025-04-02 at 21.54.59.png](screenshots/Screenshot%202025-04-02%20at%2021.54.59.png)
![Screenshot 2025-04-02 at 21.53.21.png](screenshots/Screenshot%202025-04-02%20at%2021.53.21.png)
![Screenshot 2025-04-02 at 21.54.32.png](screenshots/Screenshot%202025-04-02%20at%2021.54.32.png)
![Screenshot 2025-04-02 at 21.53.38.png](screenshots/Screenshot%202025-04-02%20at%2021.53.38.png)

## Features

- **Multiple Views**: Day, Week, Month, Year, and Agenda views
- **Event Management**: Create, edit, and delete events
- **Drag & Drop**: Move events between time slots and dates
- **Event Resizing**: Resize events in day and week views with smooth animations
- **User Management**: Multi-user support with user filtering
- **Color Coding**: Events can be color-coded for better organization
- **Responsive Design**: Works seamlessly across all device sizes
- **Dark Mode**: Full dark mode support
- **24/12 Hour Format**: Toggle between 24-hour and 12-hour time formats

## Event Resizing

The calendar now supports event resizing in day and week views:

### Day View

- Resize from top and bottom 
- Visual feedback with resize handles
- Real-time preview of new start and end times
- Minimum duration of 15 minutes
- Boundary validation (events cannot extend beyond the day)

### Week View

- Resize from top and bottom 
- Smooth animations during resize
- Time preview tooltip during resize
- Automatic event updates when resize is complete

### Features

- **Smooth Animations**: Powered by Framer Motion for fluid interactions
- **Visual Feedback**: Hover states and resize handles
- **Time Preview**: Real-time display of new event times during resize
- **Boundary Validation**: Events are constrained to valid time ranges
- **Minimum Duration**: Events cannot be shorter than 15 minutes
- **Responsive**: Works on both desktop and mobile devices

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Run the development server:

   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **date-fns**: Date manipulation library
- **re-resizable**: Resizable component library
- **Radix UI**: Accessible UI primitives
- **React Hook Form**: Form handling
- **Zod**: Schema validation

## Project Structure

```
src/
├── app/                    # Next.js app directory
├── components/            # Reusable UI components
├── lib/                   # Utility functions
└── modules/
    └── calendar/          # Calendar module
        ├── components/    # Calendar-specific components
        ├── contexts/      # React contexts
        ├── hooks/         # Custom hooks
        ├── interfaces.ts  # TypeScript interfaces
        └── types.ts       # Type definitions
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details.
