import React, { useState } from 'react';
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import { answers } from './constants/questions-answers';


const ChatBot = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleNewUserMessage = (newMessage) => {
    // This function is called when the user sends a message
    if (!selectedCategory) {
      // Greet the user and ask to select a category
      addResponseMessage(`Hello! I'm your sports chatbot. Please select a category: Cricket, Football, Tennis, or Yoga.`);
      setSelectedCategory(newMessage.toLowerCase());
    } else {
      // Simulate loading
      addResponseMessage('Typing...');
      setTimeout(() => {
        // Reply with a hardcoded answer based on the selected category
        const answer = getHardcodedAnswer(newMessage);
        addResponseMessage(answer);
      }, 1000);
    }
  };

  const getHardcodedAnswer = (question) => {
    // Check if the question exists in the selected category
    if (answers[selectedCategory] && answers[selectedCategory][question]) {
      return answers[selectedCategory][question];
    } else {
      return "I'm sorry, I don't have an answer for that question.";
    }
  };

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      title="Sports Chatbot"
      subtitle="Ask me about Cricket, Football, Tennis, or Yoga"
    />
  );
};

export default ChatBot;
