import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const fetchUserEmail = async () => {
      // Read sessionToken from URL query parameter and store in localStorage
      const urlParams = new URLSearchParams(window.location.search);
      const sessionTokenFromUrl = urlParams.get('sessionToken');
      if (sessionTokenFromUrl) {
        localStorage.setItem('sessionToken', sessionTokenFromUrl);
        // Remove sessionToken from URL to clean up
        const url = new URL(window.location);
        url.searchParams.delete('sessionToken');
        window.history.replaceState({}, document.title, url.toString());
      }
      const sessionToken = localStorage.getItem('sessionToken');
      if (!sessionToken) return;
      try {
        const response = await fetch('http://localhost:5000/current-user', {
          headers: {
            'Authorization': sessionToken
          }
        });
        if (response.ok) {
          const data = await response.json();
          setUserEmail(data.user.email);
          // Store user email in localStorage
          localStorage.setItem('userEmail', data.user.email);
        } else {
          setUserEmail('');
        }
      } catch (error) {
        setUserEmail('');
      }
    };
    fetchUserEmail();

    // Listen for changes in URL to refetch user email (e.g., new sessionToken)
    const onUrlChange = () => {
      fetchUserEmail();
    };
    window.addEventListener('popstate', onUrlChange);

    // Note: pushstate and replacestate are not standard events, so we override history methods
    const pushState = history.pushState;
    history.pushState = function () {
      pushState.apply(history, arguments);
      onUrlChange();
    };
    const replaceState = history.replaceState;
    history.replaceState = function () {
      replaceState.apply(history, arguments);
      onUrlChange();
    };

    return () => {
      window.removeEventListener('popstate', onUrlChange);
      history.pushState = pushState;
      history.replaceState = replaceState;
    };
  }, []);

  return (
    <nav className="w-full h-[10vh] bg-[#070e1c] text-white flex justify-between items-center px-6 py-3">
      <div className="text-xl font-bold">
          <img src="/assets/logo.png" height='250px' width='200px' alt="Logo" />
      </div>
      <div>
       <p id='user-email'>{userEmail}</p>
      </div>
    </nav>
  );
};

export default Navbar;
