import Button from '../Button';
import './styles.css';

const Header = ({ onAdd, onSort }) => {
  return (
    <header>
      <Button color='green' text='Add' onClick={onAdd} />
      <Button color='green' text='Sort' onClick={onSort} />
    </header>
  );
};

export default Header;
