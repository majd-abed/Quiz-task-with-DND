import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useGlobal } from "../../context/context";
import { numbersList } from "../../data";
const columnsFromBackend = {
  1: {
    num: 1,
    items: numbersList,
  },
  2: {
    num: 2,
    items: [],
  },
  3: {
    num: 3,
    items: [],
  },
  4: {
    num: 4,
    items: [],
  },
};
const validate = (c1, c2, setSecondAns) => {
  let ans1 = 0;
  for (let i = 0; i < c1.items.length - 1; i++) {
    if (c1.items[i].val > c1.items[i + 1].val) ans1++;
  }
  let ans2 = 0;
  for (let i = 0; i < c2.items.length - 1; i++) {
    if (c2.items[i].val > c2.items[i + 1].val) ans2++;
  }
  c2.items.length === 2 && c1.items.length === 3 && ans1 === 2 && ans2 === 1
    ? setSecondAns(true)
    : setSecondAns(false);
};
const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};
const Two = () => {
  const { setSecondAns } = useGlobal();
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <div className='grid grid-cols-2 smx:grid-cols-1 '>
      <div className="flex justify-center items-center">
        <p className='text-[30px] smx:text-[15px]'>
          <span className='font-bold'>Question #2: </span> Move{" "}
          <span className='underline font-semibold'>Three</span> numbers to the{" "}
          <span className='underline font-semibold'>Second</span> column and{" "}
          <span className='underline font-semibold'>Two</span> numbers to the{" "}
          <span className='underline font-semibold'>Last</span> column and sort the
          in <span className='underline font-semibold'>descending</span> order.
        </p>
      </div>
      <div className='flex min-h-[5rem] justify-center'>
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
          {Object.entries(columns).map(([columnId, column]) => {
            return (
              <div key={columnId}>
                <div className='flex flex-col mx-4 smx:mx-2 smx:py-5'>
                  <div className='text-center font-semibold text-lg'>
                    {column.num}
                  </div>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className='flex flex-col items-center bg-white rounded-lg
                                  border min-w-[4.5rem] h-[21rem] p-2'>
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}>
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}>
                                      <div className=''>
                                        <img
                                          src={item.content}
                                          alt=''
                                          className='max-w-[3rem] h-[3rem] my-2 rounded-full border'
                                        />
                                      </div>
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
          {validate(columns[2], columns[4], setSecondAns)}
        </DragDropContext>
      </div>
    </div>
  );
};

export default Two;
