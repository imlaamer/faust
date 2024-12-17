import clsx from 'clsx';
import avatar from '../../assets/static/images/placeholder/avatar.png';

// import avatar from '../../assets/static/images/placeholder/book-placeholder-2x-min.jpg';

import s from './UserAvatar.module.css';

const UserAvatar = ({ className }) => {
  //   const isURL = true;
  const isURL = false;

  const defaultAvatar = 'K';
  //   const defaultAvatarFirstLetter = user.email.split('')[0].toUpperCase();

  return (
    <div className={clsx(s.avatar, s[className])}>
      {isURL && (
        <img src={avatar} alt="User avatar" className={clsx(s.avatarImg)} />
      )}

      {!isURL && <p className={s.defaultAvatar}>{defaultAvatar}</p>}
    </div>
  );
};

export default UserAvatar;

//  <div className={s.avatar}>
//    {user.avatarURL && !isLoading && (
//      <img src={user.avatarURL} alt="User avatar" />
//    )}
//    {!user.avatarURL && !isLoading && <p>{defaultAvatarFirstLetter}</p>}
//    {isLoading && <Spinner />}
//  </div>;

// className={clsx(s.avatar, s[className])}
