# Car Rental Booking System

## Overview

The Car Rental Booking System is a web application that allows users to browse available rental cars, filter them based on criteria, check availability, and book cars for specific dates.


## Table of contents

1. [Features](#features)
2. [Project Structure](#project_structure)
3. [Installation](#installation)
4. [Contributing](#Contributing)
5. [Contributors](#contributors)

## Features

- Browse Cars: View a list of available rental cars with details.
- View Car Details: Click on a car to see its full details and booking options.
- Book a Car: Select dates and confirm a booking.
- Filter Cars: Filter by type, availability, or price range.
- View My Bookings: Users can check their booking history.
- UI Components: Includes a responsive header, navbar, and footer.

## Project Structure

The project is structured as a Single Page Application (SPA) using React and React Router.

Main Components

- Navbar.jsx: Navigation bar with links.

- Header.jsx: Application title and tagline.

- CarList.jsx: Displays available cars.

- Footer.jsx: Footer with copyright info.

- FilterPanel.jsx: Filtering options.

- CarDetail.jsx: Displays full car details and booking form.

- BookingForm.jsx: Allows users to book cars.

  Routes

/cars: Browse available cars.

/cars/:id: View details and book a specific car.

/my-bookings: View user bookings.

## Installation instructions

1. **Fork the repo**
2. **Clone the repo**

```bash
git clone https://github.com/yourusername/car-rental-booking.git

```

3. **Navigate to the project directory**

```bash
cd car-rental-booking
```

4. **Start the JSON server (for mock backend)**

```bash
json-server --watch db.json --port 3001
```

5. **Start the React application**

```bash
npm start
```

## Contributing

Contributions are welcome! Please follow this instructions.

1. Fork the repo
2. Create a new branch

```bash
git checkout -b feature/yourfeature
```

3. Commit your change

```bash
git commit -m "Add a new feature"
```

4. Push to the branch

```bash
git push
```

5. Open a pull request

## Contributors

Emmanuel Njeru
Phoebe Velma Awuor

## License

Distributed under MIT License
