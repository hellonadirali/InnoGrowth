// import React, { useEffect, useState } from 'react';


// const AnimatedText = () => {
//   const words = [
//     "Growth",
//     "Success",
//     "Innovation",
//     "Engagement",
//     "Strategy",
//     "Creativity",
//     "Visibility",
//     "Conversion",
//     "Impact",
//     "Results",
//   ];
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [text, setText] = useState('');
//   const [isWriting, setIsWriting] = useState(true);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const animateText = () => {
//       const currentWord = words[currentWordIndex];
//       const currentText = text.slice(0, text.length + 1);

//       setText(currentText);

//       if (currentText === currentWord) {
//         setTimeout(() => {
//           setIsDeleting(true);
//         }, 1000); // Wait for 1 second before starting to delete the word
//       }

//       if (isDeleting && currentText === '') {
//         setIsDeleting(false);
//         setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
//         setTimeout(() => {
//           setIsWriting(true);
//         }, 1000); // Wait for 1 second before writing the next word
//       }

//       const delay = isWriting ? 1000 : 5000; // Adjust the typing and deleting speed here

//       setTimeout(animateText, delay);
//     };

//     setText('');
//     animateText();

//     // Clean up the animation when the component unmounts
//     return () => {
//       clearTimeout();
//     };
//   }, [currentWordIndex, words, text, isWriting, isDeleting]);

//   return (
//     <div>
//       <h1>Platform for</h1>
//       <div className="text-container">
//         <div className="text">{text}</div>
//       </div>
//     </div>
//   );
// };

// export default AnimatedText;
