import BackButton from '@/components/BackButton';
import MessageTo from '@/components/MessageTo';
import ReadMessage from '../../components/ReadMessage';
import Gif from '@/components/Gif';
import MessageFrom from '@/components/MessageFrom';

function ViewCard() {
  return (
    <div className="relative bg-white w-[1208px] h-[746px] my-11 mx-9 rounded-[20px]">
      <MessageTo
        className={
          'pt-4 bg-[url("/_handwriting_dear.png")] w-[880px] h-[110px] text-[#4A9944] pl-[580px] text-[46px]'
        }
        toName={'종윤'}
      />
      <BackButton
        className={
          'bg-[url("/lion_back.svg")] absolute w-[88px] h-[88px] top-[14px] right-[20px]'
        }
      />
      <div className="flex">
        <ReadMessage
          className={
            'bg-[#F5F5F5] w-[708px] h-[528px] ml-[54px] mt-9 px-10 py-9 text-[20px] font-[700]'
          }
          content={'안녕하세요 멋쟁이사자처럼'}
        />
        <img className="ml-9 mt-9 h-[536px]" src="/Vector 2.png" alt="" />
        <div className='flex flex-col mt-9 ml-9 gap-[280px]'>
            <Gif />
            <MessageFrom className={'text-[36px] mt-[22px]'} fromName={'수완'} />
        </div>
      </div>
    </div>
  );
}
export default ViewCard;
