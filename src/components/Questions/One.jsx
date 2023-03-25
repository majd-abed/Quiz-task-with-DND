import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import { useGlobal } from "../../context/context";
import { numbersList } from "../../data";
import { shuffle } from "../helper/shuffle";

const tempShuffledList = [...numbersList];
const shuffledList = shuffle(tempShuffledList);
const columnsFromBackend = {
  [uuid()]: {
    items: shuffledList,
  },
};

const onDragEnd = (result, columns, setColumns, setFirstAns) => {
  if (!result.destination) return;
  const { source, destination } = result;
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
  let ans = 0;
  for (let i = 0; i < numbersList.length; i++) {
    if (numbersList[i].id === copiedItems[i].id) ans++;
  }
  ans === 5 ? setFirstAns(true) : setFirstAns(false);
};

const One = () => {
  const {setFirstAns } = useGlobal();
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <div className='grid grid-cols-2 smx:grid-cols-1 '>
      <div>
        <p className='text-[30px] smx:text-[15px]'>
          <span className='font-bold'>Question #1: </span> Sort the following numbers
          in <span className='underline font-semibold'>ascending</span> order.
        </p>
      </div>
      <div className='flex min-h-[5rem] justify-center'>
        <DragDropContext
          onDragEnd={(result) =>
            onDragEnd(result, columns, setColumns, setFirstAns)
          }>
          {Object.entries(columns).map(([columnId, column]) => {
            return (
              <div key={columnId}>
                <div className='smx:py-5'>
                  <Droppable
                    droppableId={columnId}
                    key={columnId}
                    direction='horizontal'>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className='flex justify-center items-center grid-cols-1 bg-white rounded-lg
                                  border min-w-[3rem] min-h-[5rem] p-2'>
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                className='flex'
                                key={item.id}
                                draggableId={item.id}
                                index={index}>
                                {(provided) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}>
                                      <div className='p-2'>
                                        <img
                                          src={item.content}
                                          alt=''
                                          className='max-w-[3rem] max-h-[3rem] rounded-full border'
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
        </DragDropContext>
      </div>
    </div>
  );
};

export default One;
