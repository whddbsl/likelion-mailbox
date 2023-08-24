import Lion from '@/components/Lion';
import Message from '@/components/Message/Message';
import styles from './Home.module.css';
import CircleButton from '@/components/CircleButton';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className={styles.messageContainer}>
        <div>
          <Message />
        </div>
        <Lion />
        <Link to="/signin">
          <CircleButton circleButtonText={'편지 쓰기'} />
        </Link>
      </div>
    </>
  );
}

export default Home;
