Here's a well-structured **README.md** file in proper markdown format:  

---

```md
# 🎲 Fair Dice Game

A **Provably Fair Dice Game** built with **React/Next.js** for the frontend and **Node.js/Express** for the backend, using **MongoDB** for data storage. It features **SHA-256 hashing** for provable fairness, user authentication, game history tracking, and optional Web3 integration with **Ethers.js**.

---

## 🚀 Features

- **Provable Fairness:** SHA-256 hashing ensures every roll is fair and verifiable.
- **Authentication:** Instant registration & login with MongoDB-generated user IDs.
- **Betting & Game History:** Users can place bets and view their past rolls.
- **Leaderboard:** Tracks top players based on winnings.
- **Web3 Integration (Optional):** Connect wallet and place bets with crypto.
- **Styled UI:** Fully designed and responsive frontend.

---

## 🛠 Project Structure

```
fair-dice/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── gameController.js
│   │   ├── leaderboardController.js
│   │   └── userController.js
│   ├── middlewares/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── gameModel.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── gameRoutes.js
│   │   ├── leaderboardRoutes.js
│   │   └── userRoutes.js
│   ├── utils/
│   │   └── hash.js
│   ├── .env
│   ├── index.js
│   ├── package-lock.json
│   └── package.json
│
└── frontend/
    ├── app/
    │   ├── components/
    │   │   ├── ConnectWallet.js
    │   │   ├── DiceRoll.js
    │   │   ├── FairnessCheck.js
    │   │   ├── Leaderboard.js
    │   │   └── Navbar.js
    │   ├── context/
    │   │   ├── authContext.js
    │   │   └── Web3Context.js
    │   ├── pages/
    │   │   ├── auth/
    │   │   │   ├── login.js
    │   │   │   └── register.js
    │   │   ├── Dashboard.jsx
    │   │   ├── game.js
    │   │   └── roll-dice.js
    │   ├── services/
    │   │   └── gameService.js
    │   ├── styles/
    │   │   ├── Game.css
    │   │   ├── Leaderboard.css
    │   │   ├── Login.css
    │   │   └── Register.css
    │   ├── index.js
    │   ├── layout.tsx
    │   └── page.js
    ├── .env
    ├── package-lock.json
    ├── package.json
    ├── tailwind.config.js
    └── tsconfig.json
```

---

## 🏗 Setup & Installation

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/Aanushka001/Fair-DiceGame.git
cd Fair-DiceGame
```

### **2️⃣ Backend Setup**
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the backend:
   ```bash
   npm run dev
   ```

### **3️⃣ Frontend Setup**
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```
4. Start the frontend:
   ```bash
   npm run dev
   ```

---

## 🔗 Database: MongoDB Compass Connection

- Make sure MongoDB is running.
- Open **MongoDB Compass** and connect using:
  ```
  mongodb://localhost:27017/fair-dice
  ```
- The database will store:
  - **Users**
  - **Game History**
  - **Leaderboards**

---

## 🎮 Running the Full Application

1. Start the **backend**:
   ```bash
   cd backend
   npm run dev
   ```
2. Start the **frontend**:
   ```bash
   cd frontend
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📝 License
This project is licensed under the **MIT License**.
```
