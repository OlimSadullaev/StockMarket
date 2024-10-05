# StockMarket Application

This project is a full-stack stock market web application built using modern technologies, including a **C# .NET** backend and a **React** frontend with **TypeScript**. The app fetches real-time stock data using the [Financial Modeling Prep API](https://site.financialmodelingprep.com/).

## Features

### Backend (C# .NET)
- **ASP.NET Core Web API**: A robust and scalable backend that handles API requests and responses.
- **Stock Data Integration**: Utilizes the [Financial Modeling Prep API](https://site.financialmodelingprep.com/) to retrieve real-time financial data, stock prices, and company information.
- **Entity Framework Core**: For database management and CRUD operations on stock-related data.
- **Authentication & Authorization**: Implemented security using JWT tokens to safeguard API routes.

### Frontend (React + TypeScript)
- **React with TypeScript**: Ensures type safety and code scalability for large projects.
- **React Router**: For smooth client-side navigation between different pages.
- **Responsive UI**: Designed using CSS and React components to be fully responsive and optimized for various devices.
- **Stock Search and Display**: Users can search for specific stocks and view detailed real-time information about company performance, stock prices, and financial metrics.

### Stock API Integration
The project integrates with the [Financial Modeling Prep API](https://site.financialmodelingprep.com/) to fetch up-to-date stock market data, including:
- Stock prices
- Financial ratios
- Company information

### Key Technologies
- **Frontend**: React, TypeScript, React Router, CSS
- **Backend**: ASP.NET Core Web API, Entity Framework Core, SQL Server
- **API**: Financial Modeling Prep API
- **Authentication**: JWT Tokens

## How to Run

### Backend
1. Navigate to the `/Backend` folder.
2. Run the following commands:
   ```bash
   dotnet restore
   dotnet build
   dotnet run
