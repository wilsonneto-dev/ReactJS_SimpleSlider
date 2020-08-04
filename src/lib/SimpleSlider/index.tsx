import React, { useState, useCallback, useRef } from "react";

import Controls from "./Controls";

import styles from "./styles.module.css";

enum Directions {
  PREVIOUS,
  NEXT,
}

interface ISimpleSliderProps {
  constrols?: boolean;
}

const SimpleSlider: React.FC<ISimpleSliderProps> = ({
  children,
  constrols = true,
}) => {
  const [currentLeftPosition, setCurrentLeftPosition] = useState(0);
  const [currentPercentualPosition, setCurrentPercentualPosition] = useState(
    0.0
  );
  const containerRef = useRef<HTMLDivElement>();
  const contentRef = useRef<HTMLDivElement>();

  const moveNextPage = useCallback((direction: Directions) => {
    if (containerRef.current && contentRef.current) {
      const containerWidth = containerRef.current?.offsetWidth;
      const contentWidth = contentRef.current?.clientWidth;
      const totalMovimentArea = contentWidth - containerWidth;
      const nextPageLeftMoviment = containerWidth * 0.8;

      setCurrentLeftPosition((_currentLeftPosition) => {
        let newPosition = 0;
        if (direction === Directions.NEXT) {
          newPosition = _currentLeftPosition - nextPageLeftMoviment;
          if (newPosition < totalMovimentArea * -1)
            newPosition = totalMovimentArea * -1;
        } else {
          newPosition = _currentLeftPosition + nextPageLeftMoviment;
          if (newPosition > 0) newPosition = 0;
        }

        setCurrentPercentualPosition(newPosition / totalMovimentArea);
        return newPosition;
      });
    }
  }, []);

  let initialOffsetLeft: number;
  let initialEventX: number;

  const processPreDragUI = () => {
    if (contentRef.current) {
      contentRef.current.style.transition = "";
    }
  };

  const processPostDragUI = () => {
    if (contentRef.current) {
      contentRef.current.style.transition = "all 0.5s";
    }
  };

  const dragStart = (e: any) => {
    if (containerRef.current && contentRef.current) {
      const event = (e || window.event) as DragEvent;
      processPreDragUI();

      initialOffsetLeft = contentRef.current.offsetLeft;
      initialEventX = event.clientX;

      console.log("-- drag start --");
      console.log("initialOffsetLeft: " + initialOffsetLeft);
      console.log("initialEventX: " + initialEventX);
    }
  };

  const dragEnd = (e: any) => {
    if (containerRef.current && contentRef.current) {
      const event = (e || window.event) as DragEvent;

      console.log("-- drag end --");

      const movmentOffset = event.clientX - initialEventX;
      const newContentPosition = initialEventX - movmentOffset;
      initialOffsetLeft = newContentPosition;

      // processPostDragUI();
    }
  };

  const drag = (e: any) => {
    if (containerRef.current && contentRef.current) {
      const event = (e || window.event) as DragEvent;
      if (e.clientX !== 0) {
        console.log("-- drag --");

        const movmentOffset = event.clientX - initialOffsetLeft;
        const newContentPosition = initialEventX + movmentOffset;

        console.log("initialOffsetLeft: " + initialOffsetLeft);
        console.log("movmentOffset: " + movmentOffset);
        console.log("newContentPosition: " + newContentPosition);

        contentRef.current.style.left = `${newContentPosition}px`;
        // setCurrentLeftPosition(newContentPosition);
      }
    }
  };

  return (
    <div ref={containerRef as any} className={styles.container}>
      <div
        ref={contentRef as any}
        className={styles.content}
        onDragStart={dragStart}
        onDragEnd={dragEnd}
        onDrag={drag}
      >
        {children}
      </div>
      {constrols && (
        <Controls
          next={() => {
            moveNextPage(Directions.NEXT);
          }}
          previous={() => {
            moveNextPage(Directions.PREVIOUS);
          }}
        />
      )}
    </div>
  );
};

export default SimpleSlider;
