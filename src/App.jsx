import Profile from './components/profile/Profile';
import FriendList from './components/friends_list/FriendList';
import userData from './userData.json';
import friends from './FriendList.json';

const App = () => {
 return (
     <>
     <Profile
         name={userData.username}
         tag={userData.tag}
         location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
     />
      <FriendList friends={friends} />
    </>
    );
};

export default App;
