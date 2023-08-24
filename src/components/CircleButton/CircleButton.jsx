import styles from './CircleButton.module.css';

function CircleButton({ type, circleButtonText, width, height }) {
  const circleButtonSize = {
    width: width || '189px',
    height: height || '189px',
  };

  return (
    <>
      <button
        className={styles.circleButton}
        type={type}
        style={circleButtonSize}
      >
        <span className={styles.circleButtonText}>{circleButtonText}</span>
      </button>
    </>
  );
}

export default CircleButton;
