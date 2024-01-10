import React, { useState } from 'react';
import myImage from './card img.png';

const ChatCard = ({ name }) => {
  const [modalOpen, onChatButtonClick, setModalOpen] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState('');
  const buttonStyle = {
    padding: '8px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  };

  const handleChatButtonClick = () => {
    // Assuming  the parent component
    onChatButtonClick(name);
  };

  const handlePayment = () => {
    // the payment logic here
    const payment = prompt(`Enter payment information for ${name}`);
    setPaymentInfo(payment);
  };



  const bookNow = () => {
    alert('Booking functionality will be implemented here.');
    // You can add the actual booking logic here
  };

  return (
    <div style={styles.mainContainer}>
    {/* 1. */}
      <div style={styles.card}>
        <div style={styles.firstPartLeft}>
          <div style={styles.partFa}>
            <img src={myImage} alt="placeholder image" style={styles.image} />
          </div>
          <div style={styles.partFb}>
            <div style={styles.rating}>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
            </div>
            <p style={styles.p1}>Price: $50/hour</p>
            <p style={styles.order}>Order: 777</p>
          </div>
        </div>
        <div style={styles.secondPartRight}>
          <div style={styles.partSa}>
            <h3>{name}Ritesh</h3>
            <p style={styles.language}>Language: English & Hindi</p>
            <p style={styles.specialist}>Specialist: Army Training</p>
            <p style={styles.experience}>Experience: 2 Years</p>
            <button style={styles.bookBtn} onClick={bookNow}>Book Now</button>
          </div>
          
          <div style={styles.partSb}>
          <button style={buttonStyle} onClick={handleChatButtonClick}>
          Chat Now
        </button>
        <button style={buttonStyle} onClick={handlePayment}>
          Pay Now
        </button>
          </div>
        </div>
     
      </div>

{/* 2. */}
      <div style={styles.card}>
        <div style={styles.firstPartLeft}>
          <div style={styles.partFa}>
            <img src={myImage} alt="placeholder image" style={styles.image} />
          </div>
          <div style={styles.partFb}>
            <div style={styles.rating}>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
            </div>
            <p style={styles.p1}>Price: $50/hour</p>
            <p style={styles.order}>Order: 777</p>
          </div>
        </div>
        <div style={styles.secondPartRight}>
          <div style={styles.partSa}>
            <h3>{name}Ritesh</h3>
            <p style={styles.language}>Language: English & Hindi</p>
            <p style={styles.specialist}>Specialist: Army Training</p>
            <p style={styles.experience}>Experience: 2 Years</p>
            <button style={styles.bookBtn} onClick={bookNow}>Book Now</button>
          </div>
          
          <div style={styles.partSb}>
          <button style={buttonStyle} onClick={handleChatButtonClick}>
          Chat Now
        </button>
        <button style={buttonStyle} onClick={handlePayment}>
          Pay Now
        </button>
          </div>
        </div>
     
      </div>

      {/* 3. */}
      <div style={styles.card}>
        <div style={styles.firstPartLeft}>
          <div style={styles.partFa}>
            <img src={myImage} alt="placeholder image" style={styles.image} />
          </div>
          <div style={styles.partFb}>
            <div style={styles.rating}>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
            </div>
            <p style={styles.p1}>Price: $50/hour</p>
            <p style={styles.order}>Order: 777</p>
          </div>
        </div>
        <div style={styles.secondPartRight}>
          <div style={styles.partSa}>
            <h3>{name}Ritesh</h3>
            <p style={styles.language}>Language: English & Hindi</p>
            <p style={styles.specialist}>Specialist: Army Training</p>
            <p style={styles.experience}>Experience: 2 Years</p>
            <button style={styles.bookBtn} onClick={bookNow}>Book Now</button>
          </div>
          
          <div style={styles.partSb}>
          <button style={buttonStyle} onClick={handleChatButtonClick}>
          Chat Now
        </button>
        <button style={buttonStyle} onClick={handlePayment}>
          Pay Now
        </button>
          </div>
        </div>
      
      </div>

      {/* 4. */}
      <div style={styles.card}>
        <div style={styles.firstPartLeft}>
          <div style={styles.partFa}>
            <img src={myImage} alt="placeholder image" style={styles.image} />
          </div>
          <div style={styles.partFb}>
            <div style={styles.rating}>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
            </div>
            <p style={styles.p1}>Price: $50/hour</p>
            <p style={styles.order}>Order: 777</p>
          </div>
        </div>
        <div style={styles.secondPartRight}>
          <div style={styles.partSa}>
            <h3>{name}Ritesh</h3>
            <p style={styles.language}>Language: English & Hindi</p>
            <p style={styles.specialist}>Specialist: Army Training</p>
            <p style={styles.experience}>Experience: 2 Years</p>
            <button style={styles.bookBtn} onClick={bookNow}>Book Now</button>
          </div>
          
          <div style={styles.partSb}>
          <button style={buttonStyle} onClick={handleChatButtonClick}>
          Chat Now
        </button>
        <button style={buttonStyle} onClick={handlePayment}>
          Pay Now
        </button>
          </div>
        </div>
        
      </div>
      {/* 5. */}
      <div style={styles.card}>
        <div style={styles.firstPartLeft}>
          <div style={styles.partFa}>
            <img src={myImage} alt="placeholder image" style={styles.image} />
          </div>
          <div style={styles.partFb}>
            <div style={styles.rating}>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
            </div>
            <p style={styles.p1}>Price: $50/hour</p>
            <p style={styles.order}>Order: 777</p>
          </div>
        </div>
        <div style={styles.secondPartRight}>
          <div style={styles.partSa}>
            <h3>{name}Ritesh</h3>
            <p style={styles.language}>Language: English & Hindi</p>
            <p style={styles.specialist}>Specialist: Army Training</p>
            <p style={styles.experience}>Experience: 2 Years</p>
            <button style={styles.bookBtn} onClick={bookNow}>Book Now</button>
          </div>
          
          <div style={styles.partSb}>
          <button style={buttonStyle} onClick={handleChatButtonClick}>
          Chat Now
        </button>
        <button style={buttonStyle} onClick={handlePayment}>
          Pay Now
        </button>
          </div>
        </div>
     
      </div>
      {/* 6. */}
      <div style={styles.card}>
        <div style={styles.firstPartLeft}>
          <div style={styles.partFa}>
            <img src={myImage} alt="placeholder image" style={styles.image} />
          </div>
          <div style={styles.partFb}>
            <div style={styles.rating}>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
            </div>
            <p style={styles.p1}>Price: $50/hour</p>
            <p style={styles.order}>Order: 777</p>
          </div>
        </div>
        <div style={styles.secondPartRight}>
          <div style={styles.partSa}>
            <h3>{name}Ritesh</h3>
            <p style={styles.language}>Language: English & Hindi</p>
            <p style={styles.specialist}>Specialist: Army Training</p>
            <p style={styles.experience}>Experience: 2 Years</p>
            <button style={styles.bookBtn} onClick={bookNow}>Book Now</button>
          </div>
          
          <div style={styles.partSb}>
          <button style={buttonStyle} onClick={handleChatButtonClick}>
          Chat Now
        </button>
        <button style={buttonStyle} onClick={handlePayment}>
          Pay Now
        </button>
          </div>
        </div>
       
      </div>

      {/* 7. */}
      <div style={styles.card}>
        <div style={styles.firstPartLeft}>
          <div style={styles.partFa}>
            <img src={myImage} alt="placeholder image" style={styles.image} />
          </div>
          <div style={styles.partFb}>
            <div style={styles.rating}>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
            </div>
            <p style={styles.p1}>Price: $50/hour</p>
            <p style={styles.order}>Order: 777</p>
          </div>
        </div>
        <div style={styles.secondPartRight}>
          <div style={styles.partSa}>
            <h3>{name}Ritesh</h3>
            <p style={styles.language}>Language: English & Hindi</p>
            <p style={styles.specialist}>Specialist: Army Training</p>
            <p style={styles.experience}>Experience: 2 Years</p>
            <button style={styles.bookBtn} onClick={bookNow}>Book Now</button>
          </div>
          
          <div style={styles.partSb}>
          <button style={buttonStyle} onClick={handleChatButtonClick}>
          Chat Now
        </button>
        <button style={buttonStyle} onClick={handlePayment}>
          Pay Now
        </button>
          </div>
        </div>
      
      </div>
      {/* 8. */}
      <div style={styles.card}>
        <div style={styles.firstPartLeft}>
          <div style={styles.partFa}>
            <img src={myImage} alt="placeholder image" style={styles.image} />
          </div>
          <div style={styles.partFb}>
            <div style={styles.rating}>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
            </div>
            <p style={styles.p1}>Price: $50/hour</p>
            <p style={styles.order}>Order: 777</p>
          </div>
        </div>
        <div style={styles.secondPartRight}>
          <div style={styles.partSa}>
            <h3>{name}Ritesh</h3>
            <p style={styles.language}>Language: English & Hindi</p>
            <p style={styles.specialist}>Specialist: Army Training</p>
            <p style={styles.experience}>Experience: 2 Years</p>
            <button style={styles.bookBtn} onClick={bookNow}>Book Now</button>
          </div>
          
          <div style={styles.partSb}>
          <button style={buttonStyle} onClick={handleChatButtonClick}>
          Chat Now
        </button>
        <button style={buttonStyle} onClick={handlePayment}>
          Pay Now
        </button>
          </div>
        </div>
     
      </div>
      {/* 9. */}
      <div style={styles.card}>
        <div style={styles.firstPartLeft}>
          <div style={styles.partFa}>
            <img src={myImage} alt="placeholder image" style={styles.image} />
          </div>
          <div style={styles.partFb}>
            <div style={styles.rating}>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
            </div>
            <p style={styles.p1}>Price: $50/hour</p>
            <p style={styles.order}>Order: 777</p>
          </div>
        </div>
        <div style={styles.secondPartRight}>
          <div style={styles.partSa}>
            <h3>{name}Ritesh</h3>
            <p style={styles.language}>Language: English & Hindi</p>
            <p style={styles.specialist}>Specialist: Army Training</p>
            <p style={styles.experience}>Experience: 2 Years</p>
            <button style={styles.bookBtn} onClick={bookNow}>Book Now</button>
          </div>
          
          <div style={styles.partSb}>
          <button style={buttonStyle} onClick={handleChatButtonClick}>
          Chat Now
        </button>
        <button style={buttonStyle} onClick={handlePayment}>
          Pay Now
        </button>
          </div>
        </div>
       
      </div>

      {/* 10. */}
      <div style={styles.card}>
        <div style={styles.firstPartLeft}>
          <div style={styles.partFa}>
            <img src={myImage} alt="placeholder image" style={styles.image} />
          </div>
          <div style={styles.partFb}>
            <div style={styles.rating}>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
            </div>
            <p style={styles.p1}>Price: $50/hour</p>
            <p style={styles.order}>Order: 777</p>
          </div>
        </div>
        <div style={styles.secondPartRight}>
          <div style={styles.partSa}>
            <h3>{name}Ritesh</h3>
            <p style={styles.language}>Language: English & Hindi</p>
            <p style={styles.specialist}>Specialist: Army Training</p>
            <p style={styles.experience}>Experience: 2 Years</p>
            <button style={styles.bookBtn} onClick={bookNow}>Book Now</button>
          </div>
          
          <div style={styles.partSb}>
          <button style={buttonStyle} onClick={handleChatButtonClick}>
          Chat Now
        </button>
        <button style={buttonStyle} onClick={handlePayment}>
          Pay Now
        </button>
          </div>
        </div>
       
      </div>
      
    </div>
  );
};

const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    // maxWidth: '300px',
    margin: '16px',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
  },
  firstPartLeft: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#1a6b80',
    padding: '20px',
  },
  partFa: {
    textAlign: 'center',
    margin: '-10px 1px 0px -10px',
  },
  image: {
    width: '130px',
    height: '130px',
    borderRadius: '30%',
  },
  partFb: {
    color: '#fff',
  },
  rating: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#FFD700', /* Gold color taro k lia */
  },
  p1: {
    margin: 0,
  },
  order: {
    margin: 0,
  },
  secondPartRight: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  },
  partSa: {
    color: '#333',
  },
  language: {
    margin: '5px 0',
  },
  specialist: {
    margin: '5px 0',
  },
  experience: {
    margin: '5px 0',
  },
  partSb: {
    marginTop: 'auto',
    textAlign: 'center',
    height: '50px',
  },
  buttonStyle : {
    backgroundColor: '#ff6f61',
    color: '#fff',
    padding: '10px 15px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
  },
  chatBtnHover: {
    backgroundColor: '#ff4f3e',
  },
  
  bookBtn: {
    backgroundColor: 'darkred',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '8px 12px',
    marginTop: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  bookBtnHover: {
    backgroundColor: '#8B0000',
  },
};

export default ChatCard;