Contacts Manager (MERN Stack)

A simple Contacts Manager web application built using the MERN stack that allows users to Create, Read, Update, and Delete (CRUD) contacts.

🚀 Features

➕ Add new contacts (Name, Email, Phone)

📄 View all contacts

🔍 Search contacts by name or email

✏️ Edit existing contacts using the same form

❌ Delete contacts

🔄 Real-time UI refresh after CRUD operations

☁️ MongoDB Atlas integration

🛠 Tech Stack
Frontend

React (Hooks)

Fetch API

CSS (Custom styling)

Backend

Node.js

Express.js

MongoDB (Mongoose)

MongoDB Atlas

📂 Project Structure
project-root/
│
├── backend/
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   └── contacts.js
│   ├── index.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ContactForm.jsx
│   │   │   └── ContactList.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   └── App.css
│
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone <your-repo-url>
cd project-root

2️⃣ Backend Setup
cd backend
npm install
node index.js


Backend will run on:

http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend will run on:

http://localhost:5173

🔗 API Endpoints
Method	Endpoint	Description
GET	/api/contacts	Get all contacts
GET	/api/contacts?search=	Search contacts
POST	/api/contacts	Create a new contact
PUT	/api/contacts/:id	Update a contact
DELETE	/api/contacts/:id	Delete a contact
🧠 Key Learnings

Implemented full CRUD functionality using MERN stack

Reused the same form for Create and Update using conditional logic

Handled MongoDB _id correctly

Managed state lifting between components

Fixed real-world issues like API routing, port conflicts, and ESLint warnings

🎯 Future Improvements

Form validation (email & phone)

Toast notifications

Loading spinners

Authentication (Login / Register)

Deployment (Netlify + Render)

👨‍💻 Author

Dev Shukal
Aspiring Full Stack Developer 


B