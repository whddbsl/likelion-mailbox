import Lion from '@/components/Lion';
import Message from '@/components/Message/Message';
import styles from './Home.module.css';
import CircleButton from '@/components/CircleButton/CircleButton';

function Home() {
  return (
    <>
      <div>
        <Message />
      </div>
      <CircleButton circleButtonText={'편지 쓰기'} />
      <Lion />
    </>
  );
}

export default Home;
