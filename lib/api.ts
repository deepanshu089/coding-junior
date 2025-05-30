import { UserType, AddUserFormState } from '@/types/user';

/**
 * Fetches users from the JSONPlaceholder API
 */
export async function fetchUsers(): Promise<UserType[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  
  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.status}`);
  }
  
  const users = await response.json();
  
  // Get locally added users
  const localUsers = JSON.parse(localStorage.getItem('localUsers') || '[]');
  return [...users, ...localUsers];
}

/**
 * Adds a new user locally
 */
export async function addUser(userData: AddUserFormState): Promise<UserType> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log('Adding new user with data:', userData);
  
  // Create a new user with required fields
  const newUser: UserType = {
    id: Date.now(), // Use timestamp as temporary ID
    name: userData.name,
    username: userData.name.toLowerCase().replace(/\s+/g, '_'),
    email: userData.email,
    address: {
      street: userData.address.street,
      suite: '',
      city: userData.address.city,
      zipcode: userData.address.zipcode,
      geo: { lat: '', lng: '' }
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
  };

  console.log('Created new user object:', newUser);

  // Store in localStorage
  const localUsers = JSON.parse(localStorage.getItem('localUsers') || '[]');
  localUsers.push(newUser);
  localStorage.setItem('localUsers', JSON.stringify(localUsers));

  console.log('Updated local users:', localUsers);

  return newUser;
}