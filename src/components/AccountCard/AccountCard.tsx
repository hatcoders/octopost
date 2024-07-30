import { ReactNode, useState } from 'react';

import classNames from 'classnames';

import { Avatar } from '~components/Avatar/Avatar';
import Button from '~components/Button/Button';
import Icon from '~components/Icon/Icon';
import { Switch } from '~components/Switch/Switch';

import scss from './AccountCard.module.scss';

import { AccountCardProps } from './AccountCard.types';

export function AccountCard({
  avatarURL,
  className,
  hasError = false,
  invalid = false,
  isEnabled = false,
  isFavorited = false,
  onEnableChange,
  onFavoriteChange,
  username,
  ...props
}: AccountCardProps): ReactNode {
  const [enabled, setEnabled] = useState(isEnabled);
  const [favorited, setFavorited] = useState(isFavorited);

  const handleFavoriteChange = (): void => {
    setFavorited(!favorited);
    onFavoriteChange?.(!favorited);
  };

  const handleEnableChange = (): void => {
    setEnabled(!enabled);
    if (onEnableChange) onEnableChange(!enabled);
  };

  const accountCardClassNames = classNames({
    className,
    [scss.container]: true,
    [scss.invalid]: invalid,
  });

  const favoriteIcon = favorited ? 'star-filled' : 'star';

  return (
    <div className={accountCardClassNames} {...props}>
      <Avatar className={scss.avatar} image={avatarURL} username={username} />
      <p className={scss.username}>{username}</p>
      <Button
        circle
        className={scss.favorite}
        color="primary"
        icon={<Icon icon={favoriteIcon} size={20} />}
        onClick={handleFavoriteChange}
      />
      <Switch
        checked={enabled}
        invalid={invalid}
        onChange={handleEnableChange}
        variant={hasError ? 'error' : 'default'}
      />
    </div>
  );
}
