import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <NavBar />
      <div className='title'>Users</div>
      {users.map((user) => (
        <Card key={user.id} mb={2}>
          <CardBody>
            <Box>
              <div className='Box'>
                <Link to={`/users/${user.id}`}>{user.name} - {user.email}</Link>
              </div>
            </Box>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default UsersList;

