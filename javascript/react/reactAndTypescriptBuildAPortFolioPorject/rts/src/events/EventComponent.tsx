import React from 'react';

const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('im being dragged');
  };

  return (
    <div>
      <input type='text' onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me
      </div>
    </div>
  );
};

export default EventComponent;
