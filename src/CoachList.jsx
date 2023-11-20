import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const coaches = {
  cricket: [
    { name: 'John Doe', experience: 10, achievements: 'National Championship' },
    { name: 'Jane Smith', experience: 8, achievements: 'Regional Trophy' },
    { name: 'Michael Johnson', experience: 15, achievements: 'World Cup Winner' },
    { name: 'Samantha Lee', experience: 12, achievements: 'Top Run Scorer' },
    { name: 'Robert Turner', experience: 9, achievements: 'Best Bowling Figures' },
    { name: 'Emily Davis', experience: 11, achievements: 'Young Player of the Year' },
    { name: 'Chris Harris', experience: 14, achievements: 'Multiple Centuries' },
    { name: 'Alex Patel', experience: 7, achievements: 'Best Fielder Award' },
    { name: 'Sophie Martin', experience: 13, achievements: 'Coach of the Year' },
    { name: 'David White', experience: 10, achievements: 'Team Captain' },
  ],
  football: [
    { name: 'Daniel Brown', experience: 12, achievements: 'Premier League Winner' },
    { name: 'Emma Johnson', experience: 8, achievements: 'FA Cup Champion' },
    { name: 'Oliver Wilson', experience: 14, achievements: 'UEFA Champions League Winner' },
    { name: 'Mia Rodriguez', experience: 11, achievements: 'Golden Boot Recipient' },
    { name: 'Aaron Turner', experience: 9, achievements: 'Best Goalkeeper Award' },
    { name: 'Sophia Miller', experience: 10, achievements: 'Young Player of the Year' },
    { name: 'Matthew Harris', experience: 15, achievements: 'World Cup Winner' },
    { name: 'Lily Anderson', experience: 7, achievements: 'Top Assists Provider' },
    { name: 'Nathan Martinez', experience: 13, achievements: 'Manager of the Season' },
    { name: 'Grace Lewis', experience: 10, achievements: 'Team Captain' },
  ],
  tennis: [
    { name: 'Ryan Clark', experience: 10, achievements: 'Grand Slam Winner' },
    { name: 'Isabella Turner', experience: 8, achievements: 'Wimbledon Champion' },
    { name: 'Dylan Wilson', experience: 12, achievements: 'US Open Winner' },
    { name: 'Ava Robinson', experience: 9, achievements: 'French Open Champion' },
    { name: 'Connor Harris', experience: 11, achievements: 'Australian Open Winner' },
    { name: 'Ella Martinez', experience: 14, achievements: 'Olympic Gold Medalist' },
    { name: 'Tyler White', experience: 13, achievements: 'Davis Cup Hero' },
    { name: 'Zoe Clark', experience: 15, achievements: 'ATP Finals Winner' },
    { name: 'Blake Turner', experience: 7, achievements: 'Young Tennis Star' },
    { name: 'Sofia Harris', experience: 10, achievements: 'Mixed Doubles Specialist' },
  ],
  yoga: [
    { name: 'Yogi Patel', experience: 15, achievements: 'International Yoga Day Ambassador' },
    { name: 'Aria Turner', experience: 12, achievements: 'Master of Ashtanga Yoga' },
    { name: 'Zen Brown', experience: 10, achievements: 'Yoga Teacher of the Year' },
    { name: 'Luna Martinez', experience: 14, achievements: 'Mindfulness Guru' },
    { name: 'Surya Wilson', experience: 11, achievements: 'Sun Salutation Expert' },
    { name: 'Nina Harris', experience: 9, achievements: 'Yoga for Mental Health Advocate' },
    { name: 'Ravi Robinson', experience: 13, achievements: 'Yoga Philosophy Scholar' },
    { name: 'Maya Clark', experience: 8, achievements: 'Yoga Poses Innovator' },
    { name: 'Om Turner', experience: 10, achievements: 'Spiritual Awakening Guide' },
    { name: 'Harmony White', experience: 7, achievements: 'Holistic Wellness Practitioner' },
  ],
};

const CoachList = () => {

  const { sport } = useParams();

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Coach List for {sport.charAt(0).toUpperCase() + sport.slice(1)}</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Years of Experience</th>
            <th>Achievements</th>
          </tr>
        </thead>
        <tbody>
          {coaches[sport].map((coach, index) => (
            <tr key={index}>
              <td>{coach.name}</td>
              <td>{coach.experience}</td>
              <td>{coach.achievements}</td>
              <td style={{textAlign: 'center'}}>
                <Link to="/coaches/cricket" className="btn btn-primary">Book Now</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CoachList;
