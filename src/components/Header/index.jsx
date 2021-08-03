import styled from 'styled-components';
import Button from '../Button';

const Head = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-height: 20%;
  border-bottom: 1px solid steelblue;
  padding-left: 5%;
`;

const Header = ({ onAdd, onSort }) => {
  return (
    <Head>
      <Button text='Add' onClick={onAdd} />
      <Button text='Sort' onClick={onSort} />
    </Head>
  );
};

export default Header;
