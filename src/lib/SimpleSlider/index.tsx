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
  leftConrtol?: Component;
  rightConrtol?: Component;
  onChangePercentPosition?: (positionPercent: number) => void;
}

const SimpleSlider: React.FC<ISimpleSliderProps> = ({
  children,
  showConstrols = true,
  leftConrtol = null,
  rightConrtol = null,
  onChangePercentPosition = null,
}) => {
  const containerRef = useRef<HTMLDivElement>();
  const contentRef = useRef<HTMLDivElement>();

  const [currentLeftPosition, setCurrentLeftPosition] = useState(0);
  const [initialDragOffsetLeft, setInitialDragOffsetLeft] = useState(0);
  const [initialDragEventX, setInitialDragEventX] = useState(0);

  const [currentPercentualPosition, setCurrentPercentualPosition] = useState(0);
  const [onDragging, setOnDragging] = useState(false);

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

  const processPostMovmentUI = useCallback(() => {
    if (contentRef.current) {
      const containerWidth = containerRef.current?.offsetWidth ?? 0;
      const contentWidth = contentRef.current?.clientWidth ?? 0;
      const totalMovimentArea = contentWidth - containerWidth;

      if (currentLeftPosition < totalMovimentArea * -1)
        setCurrentLeftPosition(totalMovimentArea * -1);
      else if (currentLeftPosition > 0) setCurrentLeftPosition(0);
    }
  }, [currentLeftPosition]);

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
        const movmentOffset = event.clientX - initialDragEventX;
        const newContentPosition = initialDragOffsetLeft + movmentOffset;

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
          const movmentOffset = event.clientX - initialDragEventX;
          const newContentPosition = initialDragOffsetLeft + movmentOffset;
          updateLeftContentPosition(newContentPosition);
        }
      }
    },
    [initialDragEventX, initialDragOffsetLeft, updateLeftContentPosition]
  );

  useEffect(() => {
    console.log("useEffect:currentLeftPosition -> " + currentLeftPosition);
    processPostMovmentUI();
  }, [currentLeftPosition, processPostMovmentUI]);

  useEffect(() => {
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
          {leftConrtol || (
            <div
              onClick={() => {
                moveNextPage(Directions.NEXT);
              }}
              className={`${styles.controls}  ${styles.controlLeft}`}
            >
              &lt;
            </div>
          )}
          {rightConrtol || (
            <div
              onClick={() => {
                moveNextPage(Directions.PREVIOUS);
              }}
              className={`${styles.controls} ${styles.controlRight}`}
            >
              &gt;
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SimpleSlider;
