import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color='red' onClick={() => console.log('clicked')}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ullam
      debitis assumenda dignissimos ea consequatur fugit maxime! Adipisci,
      soluta tempora!
    </ChildAsFC>
  );
};

export default Parent;
