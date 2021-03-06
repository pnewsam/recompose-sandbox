import { compose, setPropTypes, withStateHandlers } from 'recompose';
import { addProps } from '../../utils/recompose/addProps';
import PropTypes from 'prop-types';
import { RARITY_CODES } from '../../constants';

const propTypes = {
  comName: PropTypes.string.isRequired,
  howMany: PropTypes.number.isRequired,
  locName: PropTypes.string.isRequired,
  obsDt: PropTypes.string.isRequired,
  sciName: PropTypes.string.isRequired,
};

const rarityCode = ({ comName }) => {
  const bird = RARITY_CODES.find(bird => bird.comName === comName);
  return bird && bird.rarityCode ? bird.rarityCode : '?';
};

const rarityCodeColor = ({ rarityCode }) => {
  switch (rarityCode) {
    case '3':
      return 'primary-color';
    case '2':
      return 'secondary-color';
    default:
      return 'green';
  }
};

const styleRoot = ({ rarityCodeColor }) => ({
  color: `var(--${rarityCodeColor})`,
});

const handleClick = ({ isOpen }) => () => ({
  isOpen: !isOpen,
});

export default compose(
  setPropTypes(propTypes),
  addProps({ rarityCode }),
  addProps({ rarityCodeColor }),
  addProps({ styleRoot }),
  withStateHandlers({ isOpen: false }, { handleClick }),
);
