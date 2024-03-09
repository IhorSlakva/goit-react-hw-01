import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  console.log(friends);
  const isOnlineFriend = friends.isOnline === true;
  return (
    <ul>
      {friends.map(friend => {
        return (
              <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={isOnlineFriend}
              />
        )
      })}
    </ul>
  )
}

export default FriendList