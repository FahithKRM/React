import './App.css';

function App() {
  return (
    <div className="Contact-wrapper">
      <div className="Contact-outer">
        <div className="Contact-left"></div>
        <div className="Contact-right">
          <div className="Contact-from-header">
            Contact Form
          </div>
          <div className="Contact-input-wrapper">
            <input type="text" className="Contact-input" placeholder='Enter your Name' />
          </div>
          <div className="Contact-input-wrapper">
            <input type="text" className="Contact-input" placeholder='Enter a valid email address' />
          </div>
          <div className="Contact-input-wrapper">
            <textarea className="Contact-textarea" placeholder="Enter your message" rows={3}></textarea>
          </div>
          <div className="Contact-validate">
            <input type="checkbox" className="Contact-checkbox" />
            <div>I accept the</div>
            <a href="/test" className="Contact-validate-link">Terms of Service</a>
          </div>
          <button className="Contact-button">SUBMIT</button>          
        </div>
      </div>
    </div>
  );
}

export default App;
