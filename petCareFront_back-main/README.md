
# PetCare Jordan 🐾

PetCare Jordan is a web-based platform designed to help people in Jordan adopt pets, report lost pets, and connect with veterinarians. The system provides a comprehensive solution to streamline pet adoption and lost pet management.

## Features
- **User Registration and Authentication**: Secure login and registration for users and veterinarians.
- **Pet Management**: Browse available pets for adoption and post lost pet reports.
- **Veterinary Communication**: Private chat feature for users to consult veterinarians.
- **Lost Pet Reporting**: Report and search for lost pets using Pet IDs.
- **Lost Pet Search by ID**: Users can search for lost pets using a unique Pet ID, improving the accuracy and efficiency of recovering lost animals.

## Technologies Used
- **Frontend**: React, Vite
- **Backend**: C#, ASP.NET Core
- **Database**: SQLite
- **Dev Tools**: GitHub, Swagger for API documentation

## Setup Instructions

### 1. Prerequisites 🛠️

Ensure you have the following installed:
- **.NET SDK** (To run the Backend) -> [Download here](https://dotnet.microsoft.com/download)
- **Node.js & npm** (To run the Frontend) -> [Download here](https://nodejs.org/)
- **Git** (To clone the repository)

Check your installations by running:
```bash
dotnet --version
node --version
npm --version
````

### 2. Installation & Setup ⚡

#### Step 1: Clone the Repository

Open your terminal/command prompt and run:

```bash
git clone https://github.com/safaaquran/petCareFront_back.git
cd petCareFront_back
```

#### 3. Running the Backend (ASP.NET Core) 🖥️

* **Navigate to the Backend folder**:

  ```bash
  cd .\backend\
  ```
   ```bash
   cd .\PetCare.API\
  ```
* **Run the Backend**:

  ```bash
  dotnet run
  ```

  The API will start at: [http://localhost:5237](http://localhost:5237)

#### 4. Running the Frontend (React + Vite) 🖥️

* **Open a new terminal and navigate to the frontend folder**:

  ```bash
  cd .\petcare-frontend\
  ```
* **Install dependencies**:

  ```bash
  npm install
  ```
* **Start the development server**:

  ```bash
  npm run dev
  ```

  The Frontend will start at: [http://localhost:5173](http://localhost:5173)

### 5. Summary of Commands ⚡

For **Backend**:

```bash
 cd .\backend\ && cd .\PetCare.API\ && dotnet run
```

For **Frontend**:

```bash
cd .\petcare-frontend\ && npm install && npm run dev
```

### 6. Testing the Application ⚡

* Open [http://localhost:5173](http://localhost:5173) in your browser.
* Ensure both terminals (Backend & Frontend) are kept open while using the app.

```

