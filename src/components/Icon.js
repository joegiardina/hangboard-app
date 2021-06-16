import camelCase from 'lodash/camelCase';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Icon = ({name, ...props}) => {
  const iconName = camelCase(`fa ${name}`);
  return (
    <FontAwesomeIcon
      icon={require('@fortawesome/free-solid-svg-icons')[iconName]}
      {...props}
    />
  );
};

export default Icon;
