import './styles.css';

const Instruction = () => {
  return (
    <div className='instructions'>
      <h2>Instructions</h2>
      <p>
        Here a card list. You can sort , and add items in that. If you want to
        add item, please enter <bold>ADD</bold> button. If you want to sort
        list, please enter <bold>SORT</bold> button. If you want to delete
        element, please enter in <bold>X</bold> icon
      </p>
    </div>
  );
};

export default Instruction;
