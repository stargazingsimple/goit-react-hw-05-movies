import PropTypes from 'prop-types';

export default function PageHeader({ text }) {
  return <h1>{text}</h1>;
}

PageHeader.propTypes = {
  text: PropTypes.string.isRequired,
};
