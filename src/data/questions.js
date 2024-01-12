const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      answer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Mars',
    },
    {
      question: 'What is the largest mammal in the world?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      answer: 'Blue Whale',
    },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
      answer: 'William Shakespeare',
    },
    {
      question: 'Which programming language is often used for building web interfaces?',
      options: ['Java', 'Python', 'JavaScript', 'C++'],
      answer: 'JavaScript',
    },
    {
      question: 'In what year did World War II end?',
      options: ['1945', '1939', '1950', '1940'],
      answer: '1945',
    },
    {
      question: 'What is the largest ocean on Earth?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Southern Ocean', 'Pacific Ocean'],
      answer: 'Pacific Ocean',
    },
    {
      question: 'Who is the author of "To Kill a Mockingbird"?',
      options: ['J.K. Rowling', 'Harper Lee', 'George Orwell', 'Ernest Hemingway'],
      answer: 'Harper Lee',
    },
    {
      question: 'What is the capital of Japan?',
      options: ['Beijing', 'Tokyo', 'Seoul', 'Bangkok'],
      answer: 'Tokyo',
    },
    {
      question: 'Which element has the chemical symbol "O"?',
      options: ['Oxygen', 'Gold', 'Iron', 'Silver'],
      answer: 'Oxygen',
    },
];

const shuffledQuestions = () => {
    var qsns = questions;
    for(let i=0; i<qsns.length; i++){
        // shuffle options
        qsns[i].options.sort(() => Math.random() - 0.5);
    }
    return qsns.sort(() => Math.random() - 0.5);
}

export { shuffledQuestions };
  
export default questions;
  