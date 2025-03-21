
// import React, { useState } from 'react';
// import axios from 'axios';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3000/signup/Signup', {
//         email,
//         password,
//       });
//       setMessage('Signup successful!');
//     } catch (error) {
//       setMessage('Error during signup!');
//     }
//   };

//   return (
//     <div>
//       <h1>Signup</h1>
//       <form onSubmit={handleSignup}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Signup</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default Signup;
