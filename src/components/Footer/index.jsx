import styled from 'styled-components';

const SomeInfo = styled.div`
  border-top: 1px solid steelblue;
  display: flex;
  justify-content: center;
  max-height: 20%;
  align-items: center;
  padding-top: 5%;
  padding-bottom: 5%;
`;

const Footer = () => {
  return (
    <SomeInfo className='footer'>
      <h2>Created By aseyrany</h2>
    </SomeInfo>
  );
};

export default Footer;
