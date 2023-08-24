import CircleButton from '@/components/CircleButton';
import FormTitle from '@/components/FormTitle';
import GoToBackButton from '@/components/GoToBackButton';
import Input from '@/components/Input';
import Lion from '@/components/Lion';
import FormContainer from '@/layout/FormContainer';

function SiginUp() {
  return (
    <>
      <GoToBackButton className={'absolute top-[80px] right-[120px]'} />
      <FormContainer>
        <Lion className={'absolute top-[370px]'} />
        <FormTitle text="회원가입" />
        <div className="bg-lionWhite px-9 pt-7 rounded-[20px]">
          <Input text="사자 이름" />
          <Input text="아이디" />
          <Input text="비밀번호" />
          <Input text="비밀번호 확인" />
        </div>
        <CircleButton
          type="button"
          circleButtonText="완료"
          width="140px"
          height="140px"
          borderWidth="border-4"
        />
      </FormContainer>
    </>
  );
}

export default SiginUp;
