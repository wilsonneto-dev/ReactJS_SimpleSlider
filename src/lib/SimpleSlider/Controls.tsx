import React, { useState, useCallback, useRef } from "react";

import styles from "./styles.module.css";

const Controls: React.FC<{ next: Function; previous: Function }> = ({
  next,
  previous,
}) => (
  <>
    <div onClick={previous as any} className={`${styles.controls}`}>
      &lt;
    </div>
    <div
      onClick={next as any}
      className={`${styles.controls} ${styles.controlRight}`}
    >
      &gt;
    </div>
  </>
);

export default Controls;
