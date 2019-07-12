import PropTypes from 'prop-types';

const stuffShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  conditon: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
});

export default { stuffShape };
