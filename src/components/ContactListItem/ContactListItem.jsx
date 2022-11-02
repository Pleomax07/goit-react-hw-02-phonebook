import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

const ContactListItem = ({ contacts, deleteContact }) => {
  return contacts.map(({ name, number, id }) => (
    <li className={css.contactListItem} key={name}>
      {name}:{number}
      <button
        className={css.button}
        type="button"
        id={id}
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  ));
};
export default ContactListItem;

ContactListItem.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
