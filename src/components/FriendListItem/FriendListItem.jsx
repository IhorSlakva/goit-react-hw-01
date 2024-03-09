import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <img src={avatar} alt="Avatar" width="48" className={css.img} />
      <p className={css.name}>{name}</p>
      {isOnline ? (
        <p className={clsx(css.status, { [css.online]: isOnline })}>Online</p>
      ) : (
        <p className={clsx(css.status, { [css.offline]: !isOnline })}>
          Offline
        </p>
      )}
    </li>
  );
};

export default FriendListItem;
