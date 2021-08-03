import styled from 'styled-components';

const SomeText = styled.div`
  width: 100%;
  height: 100%;
  h2 {
    display: flex;
    justify-content: center;
  }
  p {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

const Instruction = () => {
  return (
    <SomeText>
      <h2>Instructions</h2>
      <p>
        Here a card list. You can sort , and add items in that. If you want to
        add item, please enter <bold>ADD</bold> button. If you want to sort
        list, please enter <bold>SORT</bold> button. If you want to delete
        element, please enter in <bold>X</bold> icon
      </p>
    </SomeText>
  );
};

export default Instruction;
