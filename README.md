# Merchant Contact

Merchant Contact is a small React + Vite app that displays a list of 100 fake customer profiles.

Each customer card shows only the avatar, first name, last name, and three actions:

- Send an email
- Call the customer
- Show customer details

When the user clicks **Show customer details**, the app displays the selected customer's full information: first name, last name, phone number, email, avatar, and job title.

## Tech Stack

- React
- Vite
- Faker.js
- Bootstrap
- react-bootstrap

## Run the App

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm run dev
```

Build for production:

```bash
pnpm run build
```

## Project Structure

```txt
src/
  App.jsx
  main.jsx
  components/
    Customers.jsx
    Customer.jsx
    CustomerDetails.jsx
    Email.jsx
    Phone.jsx
```

## Notes

The customer data is generated locally with Faker.js. There is no backend, routing, authentication, or remote storage.
