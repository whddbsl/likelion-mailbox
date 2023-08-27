import Lion from '@/components/Lion';
import { useId } from 'react';
import CircleButton from '@/components/CircleButton';
import GoToBackButton from '@/components/GoToBackButton';
import FormContainer from '@/layout/FormContainer';
import FormTitle from '@/components/FormTitle';
import Input from '@/components/Input';
import AccountActions from '@/components/AccountActions';

function SignIn() {
  const signInPassword = useId();
  const signInId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <GoToBackButton className={'absolute top-[80px] right-[120px]'} />

      <FormContainer>
        <Lion className={'absolute top-[370px]'} />
        <FormTitle text="로그인" />
        <div className="bg-lionWhite px-9 pt-7 rounded-[20px]">
          <Input text="아이디" id={signInId} placeholderText="lion123" />

          <Input
            text="비밀번호"
            id={signInPassword}
            placeholderText="*******"
          />
        </div>
        <AccountActions />
        <CircleButton
          type="submit"
          circleButtonText="확인"
          width="140px"
          height="140px"
          borderWidth="border-4"
          handleSubmit={handleSubmit}
        />
      </FormContainer>
    </>
  );
}

export default SignIn;
