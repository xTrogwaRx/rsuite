// @flow

import * as React from 'react';
import classNames from 'classnames';
import Icon from './Icon';
import Button from './Button';
import type { Props } from './Button';
import prefix, { globalKey } from './utils/prefix';

type IconProps = {
  className?: string,
  iconClassName?: string,
  iconStyle?: Object,
  classPrefix?: string,
  circle?: boolean,
  children?: string,
  placement: 'left' | 'right',
  icon: string
}

class IconButton extends React.Component<Props & IconProps> {
  static defaultProps = {
    placement: 'left',
    classPrefix: `${globalKey}btn-icon`
  }
  render() {

    const {
      icon,
      placement,
      children,
      circle,
      classPrefix,
      className,
      iconClassName,
      iconStyle,
      ...props
    } = this.props;
    const addPrefix = prefix(classPrefix);

    const classes = classNames(classPrefix, {
      [addPrefix('circle')]: circle
    }, className);

    const items = [
      <Icon key="icon" icon={icon} className={iconClassName} style={iconStyle} />,
      children
    ];

    if (placement === 'right') {
      items.reverse();
    }

    return (
      <Button {...props} className={classes} >
        {items}
      </Button>
    );
  }
}

export default IconButton;

