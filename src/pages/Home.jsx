import Lion from '@/components/Lion';
import Message from '@/components/Message/Message';
import CircleButton from '@/components/CircleButton/CircleButton';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="">
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
