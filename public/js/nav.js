const navLinks = document.getElementsByClassName('nav-link');

async function clickHandler(event) {
  const navItem = event.target.dataset['nav'];

  switch (navItem) {
    case 'home':
      window.location.href = '/';
      break;
    // case 'dashboard':
    
    //   break;
    case 'login':
      window.location.href = '/login';
      break;
    // case 'logout':

    //   break;
  
    default:
      break;
  }
}

document.addEventListener('click', clickHandler);