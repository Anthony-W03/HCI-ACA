import { useState } from 'react'
import './About.css'
import TopBar from '../components/TopBar';
import photo2 from '../assets/photos/Photo2.png';
import photo3 from '../assets/photos/Photo3.png';
import PageLayout from '../components/PageLayout';

const About = () => {
    const teamMembers = [
      { name: "Name 1", role: "Role", bio: "Roughly 10 word biography about this person." },
      { name: "Name 2", role: "Role", bio: "Roughly 10 word biography about this person." },
      { name: "Name 3", role: "Role", bio: "Roughly 10 word biography about this person." },
      { name: "Name 4", role: "Role", bio: "Roughly 10 word biography about this person." },
    ];
  
    return (
      <PageLayout>
        <div className="content">
          <h1 className="title">About Us</h1>
          
          <div className="subsection">
            <h2>Our Mission</h2>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          <img src={photo2} alt="About Us Photo 1" />
          

          <div className="subsection">
            <h2>Our Story</h2>
            <p className="description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat 
              massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim 
              justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis 
              pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend 
              tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, 
              dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. 
              Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. </p>
          </div>

          <img src={photo3} alt="About Us Photo 2" />
          
          <div className="subsection team">
              <h2>Meet the Team</h2>
              <div className="team-grid">
                  {teamMembers.map((member, index) => (
                  <div key={index} className="team-member">
                      <h3>{member.name}</h3>
                      <h4>{member.role}</h4>
                      <p>{member.bio}</p>
                  </div>
                  ))}
              </div>
          </div>
      
        </div>
      </PageLayout>
    );
  };
  
  export default About;
