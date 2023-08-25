import {useState} from 'react'
import '../componentcss/textDropdown.css'
const TextDropdown = ({ title, text }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleText = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div className="text-dropdown">
        <div className="text-dropdown-header" onClick={toggleText}>
          <p className='dropdown_title'>{title}</p>
          <span className={`arrow ${isExpanded ? 'expanded' : ''}`}>&#9660;</span>
        </div>
        {isExpanded && <p className="text">{text}</p>}
        <hr />
      </div>
    );
  }
  
  export default TextDropdown;