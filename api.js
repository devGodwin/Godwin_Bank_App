const url = "https://localhost:7043/api"

// Function to handle GET request
async function getUserData(event) {
    event.preventDefault();
    const userId = document.getElementById('userId').value;
    try {
      const response = await fetch(url + '/Account/${userId}');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const userDataDiv = document.getElementById('userData');
      userDataDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  }
  
  // Function to handle POST request
  async function createUser(event) {
    event.preventDefault();
    try {
      const formData = new FormData(document.getElementById('postForm'));
      const response = await fetch(url + '/Auth', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  }
  
  // Function to handle UPDATE request
  async function updateUser(event) {
    event.preventDefault();
    const userId = document.getElementById('userId').value;
    try {
      const formData = new FormData(document.getElementById('updateForm'));
      const response = await fetch(url + '/${userId}', {
        method: 'PUT',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error updating user:', error.message);
    }
  }
  
  // Function to handle DELETE request
  async function deleteUser(event) {
    event.preventDefault();
    const userId = document.getElementById('userId').value;
    try {
      const response = await fetch(url + '/${userId}', {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error deleting user:', error.message);
    }
  }
  
  // Attach event listeners to forms
  document.getElementById('getForm').addEventListener('submit', getUserData);
  document.getElementById('postForm').addEventListener('submit', createUser);
  document.getElementById('updateForm').addEventListener('submit', updateUser);
  document.getElementById('deleteForm').addEventListener('submit', deleteUser);

  