import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  Component,
} from "react";

import styles from "./styles.module.css";

enum Directions {
  PREVIOUS,
  NEXT,
}

interface ISimpleSliderProps {
  showConstrols?: boolean;
  LeftConrtol?: Component;
  RightConrtol?: Component;
  onChangePercentPosition?: (positionPercent: number) => void;
}

const SimpleSlider: React.FC<ISimpleSliderProps> = ({
  children,
  showConstrols = true,
  LeftConrtol = null,
  RightConrtol = null,
  onChangePercentPosition = null,
}) => {
  const containerRef = useRef<HTMLDivElement>();
  const contentRef = useRef<HTMLDivElement>();

  const [currentLeftPosition, setCurrentLeftPosition] = useState(0);
  const [initialDragOffsetLeft, setInitialDragOffsetLeft] = useState(0);
  const [initialDragEventX, setInitialDragEventX] = useState(0);

  const [currentPercentualPosition, setCurrentPercentualPosition] = useState(0);
  const [onDragging, setOnDragging] = useState(false);

  const getMovementAreaInfo = useCallback(() => {
    const containerWidth = containerRef.current?.offsetWidth ?? 0;
    const contentWidth = contentRef.current?.clientWidth ?? 0;
    const totalMovementArea = contentWidth - containerWidth;
    const nextPageMovementInPixels = containerWidth * 0.8;

    return { totalMovementArea, nextPageMovementInPixels };
  }, []);

  const moveNextPage = useCallback(
    (direction: Directions) => {
      if (containerRef.current && contentRef.current) {
        const {
          totalMovementArea,
          nextPageMovementInPixels,
        } = getMovementAreaInfo();

        setCurrentLeftPosition((_currentLeftPosition) => {
          let newPosition = 0;
          if (direction === Directions.NEXT) {
            newPosition = _currentLeftPosition - nextPageMovementInPixels;
            if (newPosition < totalMovementArea * -1)
              newPosition = totalMovementArea * -1;
          } else {
            newPosition = _currentLeftPosition + nextPageMovementInPixels;
            if (newPosition > 0) newPosition = 0;
          }
          return newPosition;
        });
      }
    },
    [getMovementAreaInfo]
  );

  const processPostMovementUI = useCallback(() => {
    const { totalMovementArea } = getMovementAreaInfo();
    if (contentRef.current) {
      if (currentLeftPosition < totalMovementArea * -1)
        setCurrentLeftPosition(totalMovementArea * -1);
      else if (currentLeftPosition > 0) setCurrentLeftPosition(0);
    }
  }, [currentLeftPosition, getMovementAreaInfo]);

  const dragStart = useCallback((e: any) => {
    if (containerRef.current && contentRef.current) {
      const event = (e || window.event) as DragEvent;
      setOnDragging(true);
      setInitialDragOffsetLeft(contentRef.current.offsetLeft);
      setInitialDragEventX(event.clientX);
    }
  }, []);

  const dragEnd = useCallback(
    (e: any) => {
      if (containerRef.current && contentRef.current) {
        const event = (e || window.event) as DragEvent;
        const movementOffset = event.clientX - initialDragEventX;
        const newContentPosition = initialDragOffsetLeft + movementOffset;

        setCurrentLeftPosition(newContentPosition);
        setOnDragging(false);
      }
    },
    [initialDragEventX, initialDragOffsetLeft]
  );

  const updateLeftContentPosition = useCallback(
    (newContentPosition: number) => {
      if (contentRef.current) {
        contentRef.current.style.left = `${newContentPosition}px`;
      }
    },
    []
  );

  const drag = useCallback(
    (e: any) => {
      if (containerRef.current && contentRef.current) {
        const event = (e || window.event) as DragEvent;
        if (e.clientX !== 0) {
          const movementOffset = event.clientX - initialDragEventX;
          const newContentPosition = initialDragOffsetLeft + movementOffset;
          updateLeftContentPosition(newContentPosition);
        }
      }
    },
    [initialDragEventX, initialDragOffsetLeft, updateLeftContentPosition]
  );

  const updateMovementPercentual = useCallback(() => {
    const { totalMovementArea } = getMovementAreaInfo();
    setCurrentPercentualPosition(
      (currentLeftPosition * -1) / totalMovementArea
    );
  }, [currentLeftPosition, getMovementAreaInfo]);

  useEffect(() => {
    console.log("useEffect:currentLeftPosition -> " + currentLeftPosition);
    processPostMovementUI();
    updateMovementPercentual();
  }, [currentLeftPosition, processPostMovementUI, updateMovementPercentual]);

  useEffect(() => {
    console.log(currentPercentualPosition);
    if (onChangePercentPosition)
      onChangePercentPosition(currentPercentualPosition);
  }, [currentPercentualPosition, onChangePercentPosition]);

  return (
    <div
      ref={containerRef as any}
      className={`${styles.container} ${onDragging ? styles.onDragging : ""}`}
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      onDrag={drag}
    >
      <div
        style={{ left: currentLeftPosition }}
        ref={contentRef as any}
        className={styles.content}
      >
        {children}
      </div>
      {showConstrols && (
        <>
          {currentPercentualPosition > 0.0 && (
            <div
              onClick={() => {
                moveNextPage(Directions.PREVIOUS);
              }}
              className={`${styles.controls}  ${styles.controlLeft}`}
            >
              {LeftConrtol || <div className={styles.defaultControl}>&lt;</div>}
            </div>
          )}

          {currentPercentualPosition < 0.99 && (
            <div
              onClick={() => {
                moveNextPage(Directions.NEXT);
              }}
              className={`${styles.controls} ${styles.controlRight}`}
            >
              {RightConrtol || (
                <div className={styles.defaultControl}>&gt;</div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SimpleSlider;
