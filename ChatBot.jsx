import React, { useState } from 'react';
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const ChatBot = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    console.log("Entered handleNewUserMessage")
    // This function is called when the user sends a message
    if (!selectedCategory) {
      // Greet the user and ask to select a category
      addResponseMessage(`Hello! I'm your sports chatbot. Please select a category: Cricket, Football, Tennis, or Yoga.`);
      setSelectedCategory(newMessage.toLowerCase());
      console.log(newMessage, selectedCategory);
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
    console.log("Entered getHardcodedAnswer")
    // Hardcoded answers based on selected category
    const answers = {
      cricket: {
        'Tell me about cricket rules?': 'Cricket is a bat-and-ball game played between two teams.',
        'Who is the best cricketer?': 'There are many great cricketers. It depends on personal preference.',
        "Who is known as the 'Little Master' in cricket?": "Sachin Tendulkar.",
        "Which country won the first-ever Cricket World Cup in 1975?": "West Indies.",
        "What is the maximum number of runs a batsman can score in a single delivery (without any extras)?": "6.",
        "Who holds the record for the highest individual score in Test cricket?": "Brian Lara (400 not out).",
        "Which country has won the most number of Cricket World Cups?": "Australia.",
        "What does LBW stand for in cricket?": "Leg Before Wicket.",
        "Which cricket format is also known as 'limited-overs' or 'one-day' cricket?": "One Day International (ODI).",
        "Who is the only player to have scored 100 international centuries in cricket?": "Sachin Tendulkar.",
        "Which Australian cricketer is known as 'Punter'?": "Ricky Ponting.",
        "What is the term for a batsman being dismissed without scoring any runs?": "Duck.",
        "In cricket, what is a hat-trick?": "Taking three wickets in three consecutive deliveries.",
        "Which country has won the most ICC Cricket World Cup titles?": "Australia.",
        "Who is the current captain of the Indian cricket team (as of my last knowledge update in January 2022)?": "Virat Kohli.",
        "What is the length of a standard cricket pitch?": "22 yards (20.12 meters).",
        "Which player has scored the fastest century in One Day Internationals (ODIs)?": "AB de Villiers (off 31 balls).",
        "What is the Duckworth-Lewis method used for in cricket?": "Adjusting targets in rain-affected matches.",
        "Who holds the record for the most runs in a single Test innings?": "Brian Lara (400 not out).",
        "Which cricketer is known as the 'Rawalpindi Express'?": "Shoaib Akhtar.",
        "What is the significance of the term 'Ashes' in cricket?": "It refers to the Test series played between England and Australia.",
        "Who is the fastest bowler to reach 100 wickets in One Day Internationals (ODIs)?": "Afghanistan's Rashid Khan.",
        "Which cricket stadium is known as the 'Home of Cricket'?": "Lord's Cricket Ground in London."
      },
      football: {
        'Explain the offside rule.': 'The offside rule is a fundamental aspect of football.',
        'Who won the last World Cup?': 'The last World Cup was won by France in 2018.',
        'Who holds the record for the most goals scored in a calendar year?': 'Lionel Messi.',
        'In which country did football originate?': 'England.',
        'Who is the all-time top scorer in the UEFA Champions League?': 'Cristiano Ronaldo.',
        'Which country has won the most FIFA World Cup titles?': 'Brazil.',
        'Who won the Ballon d\'Or in 2021?': 'Lionel Messi.',
        'What is the nickname of the Argentina national football team?': 'Albiceleste.',
        'Who is the current manager of the Liverpool FC football team?': 'Jürgen Klopp.',
        'Which football club is known as "The Red Devils"?': 'Manchester United.',
        'Who is the top scorer in the history of the English Premier League?': 'Alan Shearer.',
        'In which city is the Camp Nou stadium located?': 'Barcelona, Spain.',
        'Which player is often referred to as "CR7"?': 'Cristiano Ronaldo.',
        'Who won the UEFA Euro 2020 tournament?': 'Italy.',
        'What is the name of the trophy awarded to the winner of the UEFA Champions League?': 'The European Cup.',
        'Which country hosted the first FIFA World Cup in 1930?': 'Uruguay.',
        'Who is the all-time top scorer for the German national football team?': 'Miroslav Klose.',
        'Which football club has the nickname "The Gunners"?': 'Arsenal.',
        'Who is the captain of the Portugal national football team?': 'Cristiano Ronaldo.',
        'Which player has won the most Ballon d\'Or awards?': 'Lionel Messi.',
        'What is the offside rule in football?': 'A player is in an offside position if they are nearer to their opponent\'s goal line than both the ball and the second-to-last defender when the ball is played to them.',
        'Which stadium is known as the "Theatre of Dreams"?': 'Old Trafford (Manchester United\'s stadium).',
        'Who is the record holder for the most appearances in the English Premier League?': 'Gareth Barry.',
        'What is the name of the football competition contested between the senior men\'s national teams of the CONMEBOL region?': 'Copa America.',
        'Who won the FIFA Women\'s World Cup in 2019?': 'United States.',
        'Which player is often called "The Egyptian King"?': 'Mohamed Salah.',
        'Who is the manager of the Manchester City football team?': 'Pep Guardiola.',
        'Which country won the first-ever FIFA World Cup in 1930?': 'Uruguay.',
        'What is the name of the football tournament contested in the Summer Olympics?': 'Men\'s and Women\'s Olympic Football Tournament.',
        'Who holds the record for the fastest goal scored in a FIFA World Cup match?': 'Hakan Şükür (Turkey) - 11 seconds in 2002.',
        'Which player is known for his nickname "The Magician" due to his exceptional dribbling skills?': 'Andrés Iniesta.',
        'What is the name of the famous football tournament contested by universities in England?': 'The Varsity Match.',
        'Who is the all-time leading goal scorer for the Spanish national football team?': 'David Villa.',
        'What is the name of the football club based in Madrid that plays at the Wanda Metropolitano stadium?': 'Atlético Madrid.',
        'Which goalkeeper is often referred to as "The Flying Dutchman"?': 'Edwin van der Sar.',
        'Who won the FIFA World Cup in 2006?': 'Italy.',
        'Which country has won the most UEFA European Championship titles?': 'Germany.',
        'What is the term for a situation in football where a player scores three goals in a single game?': 'Hat-trick.',
        'Who is the all-time leading goal scorer for the French national football team?': 'Thierry Henry.',
        'Which football club is known as "The Blues"?': 'Chelsea.',
        'Who is the top scorer in the history of the UEFA Europa League?': 'Radamel Falcao.',
        'What is the name of the trophy awarded to the winner of the FIFA World Cup?': 'The FIFA World Cup Trophy.',
        'Which country hosted the FIFA World Cup in 2014?': 'Brazil.',
        'Who is the all-time leading goal scorer for the Italian national football team?': 'Luigi Riva.',
        'What is the name of the football stadium known as "The Cathedral of Football"?': 'Maracanã Stadium (Rio de Janeiro, Brazil).',
        'Who won the UEFA Champions League in the 2020-2021 season?': 'Chelsea.',
        'Which player is often called "The Atomic Flea"?': 'Lionel Messi.',
        'Who is the manager of the Barcelona football team?': 'Xavi Hernandez (as of my last knowledge update in January 2022).',
        'What is the term for a situation where a team wins three consecutive major trophies in a single season?': 'Treble.',
        'Who won the Golden Boot for being the top scorer in the 2018 FIFA World Cup?': 'Harry Kane (England).',
        'Which country hosted the UEFA Euro 2016 tournament?': 'France.'
      },
      tennis: {
        'What are the Grand Slam tournaments?': 'The Grand Slam tournaments are the four major tennis events.',
        'Who is the current world No. 1 in tennis?': 'Novak Djokovic is the current world No. 1.',
        'Who holds the record for the most Grand Slam singles titles in tennis?': 'Novak Djokovic, Roger Federer, and Rafael Nadal share the record with 20 Grand Slam singles titles each (as of my last knowledge update in January 2022).',
        'What is the surface of the tennis court used in the French Open?': 'Clay.',
        'Which tennis player is known as the "King of Clay"?': 'Rafael Nadal.',
        'What are the four Grand Slam tournaments in tennis?': 'The Australian Open, French Open, Wimbledon, and the US Open.',
        'What is a "love" score in tennis?': 'A score of zero, commonly referred to as "love" in tennis.',
        'Who is considered one of the greatest female tennis players of all time and is often referred to as the "Queen of the Court"?': 'Serena Williams.',
        'What is the term for a serve in tennis that the receiver fails to touch?': 'Ace.',
        'Who won the most Wimbledon singles titles in the Open Era (as of my last knowledge update)?': 'Martina Navratilova with 9 titles.',
        'What is the Davis Cup in tennis?': 'The Davis Cup is an international team competition in men\'s tennis.',
        'Who holds the record for the fastest serve in tennis (men\'s category)?': 'Novak Djokovic, with a recorded serve speed of 163.4 mph (263 km/h).',
        'What is the term for a situation where both players or teams have the same score in a game or set in tennis?': 'Deuce.',
        'Who won the most consecutive Grand Slam singles titles in tennis (Open Era)?': 'Rod Laver, who won all four Grand Slam tournaments in 1969.',
        'What is the name of the trophy awarded to the winner of the men\'s singles at Wimbledon?': 'The Challenge Cup.',
        'Which country has won the most Davis Cup titles?': 'United States.',
        'What is the term for a shot in tennis where the ball is hit before it bounces on the court?': 'Volley.',
        'Who is the youngest player to win a Grand Slam singles title in tennis?': 'Martina Hingis, who won the Australian Open in 1997 at the age of 16.',
        'What is the Hawk-Eye system used in tennis?': 'Hawk-Eye is an electronic line-calling system used to review close calls by players challenging the on-court decisions.',
        'Who is known for his powerful and accurate serve, often referred to as the "Rocket Rod" in tennis?': 'Rod Laver.',
        'What is the term for a shot in tennis that lands outside the boundaries of the court?': 'Out.',
        'Who holds the record for the most consecutive weeks as the world No. 1 in the ATP rankings?': 'Novak Djokovic, with 356 weeks as of my last knowledge update in January 2022.',
      },
      yoga: {
        'What are the benefits of yoga?': 'Yoga has numerous physical and mental health benefits.',
        'Can you suggest beginner yoga poses?': 'Sure! Some beginner poses include Downward Dog and Child’s Pose.',
        'What does the word "yoga" mean?': '"Yoga" is derived from the Sanskrit word "yuj," meaning to yoke or unite. It represents the union of mind, body, and spirit.',
        'How many main types of yoga are there?': 'There are several types of yoga, but the main branches include Hatha, Vinyasa, Ashtanga, Bikram, and Kundalini.',
        'What is the purpose of yoga?': 'The purpose of yoga is to achieve a balance between the mind, body, and spirit, leading to improved physical health, mental clarity, and spiritual well-being.',
        'What is "asana" in yoga?': '"Asana" refers to the physical postures or poses practiced in yoga.',
        'What is the significance of the "Om" symbol in yoga?': '"Om" is a sacred sound and a spiritual icon in Hinduism. In yoga, it represents the essence of the ultimate reality or consciousness.',
        'What is pranayama?': 'Pranayama is the practice of breath control in yoga. It involves various breathing techniques aimed at improving respiratory health and calming the mind.',
        'What are the benefits of practicing yoga regularly?': 'Regular yoga practice can improve flexibility, strength, balance, reduce stress, enhance mental clarity, and promote overall well-being.',
        'What is the purpose of the Savasana (Corpse Pose) in yoga?': 'Savasana is a relaxation pose at the end of a yoga session, promoting deep relaxation and integration of the benefits of the practice.',
        'What is the difference between yoga and meditation?': 'Yoga is a broader practice that includes physical postures, breath control, and meditation. Meditation is a specific practice focusing on calming the mind and achieving inner stillness.',
        'What is the role of a yoga instructor?': 'A yoga instructor guides students through yoga practices, providing cues for postures, alignment, and encouraging a mindful and safe practice.',
        'What are the Yamas and Niyamas in yoga philosophy?': 'Yamas are ethical guidelines in yoga, including principles like non-violence and truthfulness. Niyamas are personal observances, such as contentment and self-discipline.',
        'What is a mantra in yoga?': 'A mantra is a sacred sound, word, or phrase repeated during meditation to aid concentration and promote a focused, meditative state.',
        'What is the purpose of using props in yoga?': 'Yoga props like blocks, straps, and bolsters are used to assist in achieving proper alignment, enhance comfort, and accommodate various body types.',
        'What is the Sun Salutation (Surya Namaskar)?': 'Sun Salutation is a series of yoga poses performed in a sequence, often used as a warm-up or as a standalone practice to energize the body.',
        'What is the concept of chakras in yoga?': 'Chakras are energy centers in the body. In yoga, there are seven main chakras, each associated with specific physical, emotional, and spiritual qualities.',
        'What is the meaning of "Namaste" in yoga?': '"Namaste" is a traditional greeting in yoga. It signifies a gesture of respect and recognition of the divine spark within each person.',
        'What is the difference between Yin and Yang yoga?': 'Yin yoga involves passive postures held for an extended period, targeting connective tissues. Yang yoga, like Vinyasa, is more dynamic, focusing on muscle strength and movement.',
        'What is mindfulness in yoga?': 'Mindfulness in yoga involves being fully present and aware in the current moment, paying attention to breath, sensations, and thoughts without judgment.',
        'Can anyone practice yoga, regardless of age or fitness level?': 'Yes, yoga is adaptable to various fitness levels and ages. Modifications can be made to accommodate individual needs.',
        'What is the purpose of meditation in yoga practice?': 'Meditation in yoga aims to cultivate a focused and quiet mind, promoting inner peace, self-awareness, and a deeper connection with one\'s true nature.',
      },
    };

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
