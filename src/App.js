import { useState } from 'react';
import { UserContext } from './Contexts/UserContext';
import SignupCard from './Components/SignupCard';
import ThankyouCard from './Components/ThankyouCard';

function App() {
  const [hasEmail, setHasEmail] = useState(false);
  const [email, setEmail] = useState('');
  const userData = {hasEmail, setHasEmail, email, setEmail};
	
	return (
		<div className="App">
			<UserContext.Provider value={userData}>
				{!hasEmail ? <SignupCard /> : <ThankyouCard />}				
			</UserContext.Provider>
			<div class="attribution">
				Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
				Coded by <a href="https://www.frontendmentor.io/profile/nuria1110">Nuria Torres</a>.
			</div>
		</div>
	);
};

export default App;
