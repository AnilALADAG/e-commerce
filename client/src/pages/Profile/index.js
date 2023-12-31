import { useAuth } from '../../contexts/AuthContext';
import { Text, Button } from '@chakra-ui/react';

function Profile({ history }) {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    logout(() => {
      history.push('/');
    });
  };
  return (
    <div>
      <Text fontSize="22">
        <code>{JSON.stringify(user)}</code>
      </Text>

      <br />
      <br />
      <Button colorScheme="pink" variant="solid" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}

export default Profile;
