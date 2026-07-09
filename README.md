# Calculator — Operators & Functions

A simple calculator web application built for **Full Stack Development V8 — Assignment 7**. It demonstrates HTML forms, CSS layout, JavaScript operators, and separate functions for each arithmetic operation.

## Live Demo

> Add your hosted link here after deploying (e.g. GitHub Pages, Netlify, or Vercel).

## Features

- Two numerical input fields with `type="number"`
- **Basic operations:** Addition, Subtraction, Multiplication, Division
- **Advanced operations:** Square Root, Cube Root, Power
- Each operation is handled by a dedicated JavaScript function
- Input validation with clear error messages
- Responsive layout using Flexbox and CSS Grid

## Project Structure

```
calculator/
├── index.html      # Main page
├── css/
│   └── style.css   # Styles and responsive layout
├── js/
│   └── index.js    # Calculator logic and functions
└── README.md
```

## How to Run Locally

1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd calculator
   ```

2. Open `index.html` in your web browser, or use a local server:
   ```bash
   npx serve .
   ```

3. Enter numbers in the input fields and click an operation button to see the result.

## JavaScript Functions

| Function       | Description              |
|----------------|--------------------------|
| `add()`        | Adds two numbers         |
| `subtract()`   | Subtracts second from first |
| `multiply()`   | Multiplies two numbers   |
| `divide()`     | Divides first by second  |
| `squareRoot()` | Returns √x               |
| `cubeRoot()`   | Returns ∛x               |
| `power()`      | Returns x raised to y    |

## Technologies Used

- HTML5 (semantic tags, forms, labels)
- CSS3 (Flexbox, Grid, media queries)
- JavaScript (functions, operators, if/else validation)

## Author

Your Name — Full Stack Development V8
