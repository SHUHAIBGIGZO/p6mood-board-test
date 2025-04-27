// Add this component to your moodboard.jsx file or create a new file

const RestaurantFortuneTeller = () => {
  const [fortune, setFortune] = React.useState("Click for your restaurant's fortune!");
  
  const fortunes = [
    "Your POS system will crash exactly 3 minutes before the lunch rush tomorrow.",
    "The next customer who complains about waiting will order $200 worth of food.",
    "Someone will try to pay with a credit card from 1998 this week.",
    "Your next five customers will all modify their orders at least twice.",
    "A food critic is coming... and they'll order the one thing you're out of.",
    "The next server who forgets to input an order will receive a $100 tip.",
    "Tomorrow's special will sell out in 30 minutes or not at all.",
    "The next time your kitchen printer jams, you'll get a 5-star review.",
    "Your most difficult customer today will become your most loyal regular.",
    "The next person who asks 'What's good here?' will order everything you recommend.",
    "Your restaurant will briefly become TikTok famous because of a mistyped menu item.",
    "If you don't update your POS system this month, it will gain sentience and start giving itself breaks."
  ];
  
  const tellFortune = () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[randomIndex]);
  };
  
  return (
    <div style={{ 
      maxWidth: '500px', 
      margin: '20px auto', 
      padding: '20px', 
      backgroundColor: '#fff', 
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <h2 style={{ color: '#03C1C1' }}>RASSASY Restaurant Fortune Teller</h2>
      <div style={{
        padding: '20px',
        margin: '15px 0',
        backgroundColor: '#f0f9f9',
        borderRadius: '8px',
        minHeight: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <p style={{ fontSize: '16px' }}>{fortune}</p>
      </div>
      <button 
        onClick={tellFortune}
        style={{
          backgroundColor: '#F45C2C',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '30px',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
      >
        Tell My Fortune!
      </button>
      <p style={{ fontSize: '12px', marginTop: '20px', color: '#999' }}>
        * No actual restaurant futures were harmed in the making of this fortune teller
      </p>
    </div>
  );
};

// Add this to your main component's render function or as a standalone component
// <RestaurantFortuneTeller />
