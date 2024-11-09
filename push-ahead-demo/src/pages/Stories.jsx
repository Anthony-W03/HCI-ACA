import { useState } from 'react'
import './About.css'
import photo5 from '../assets/photos/Photo5.png';
import photo8 from '../assets/photos/Photo8.png';
import photo4 from '../assets/photos/Photo4.png';
import photo9 from '../assets/photos/Photo9.png';

const Stories = () => {
    const stories = [
      { name: "Easton Elementary School", image: photo8, bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
      { name: "Jessica's Story", image: photo5, bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
      { name: "John's Story", image: photo4, bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
      { name: "After School Program", image: photo9, bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    ];
  
    return (
      <div class="content">

        <h1 class="title">Success Stories</h1>
        
        <div class="subsection stories2">
            <div className="stories-grid">
                {stories.map((story, index) => (
                <div key={index} className="story">
                    <h3>{story.name}</h3>
                    <img src={story.image} alt="About Us Photo 1" />
                    <p>{story.bio}</p>
                </div>
                ))}
            </div>
        </div>
        
  
      </div>
    );
  };
  
  export default Stories;

