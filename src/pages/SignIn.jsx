import Lion from '@/components/Lion';
import { useId } from 'react';
import CircleButton from '@/components/CircleButton/CircleButton';

function SignIn() {
  const signInId = useId();
  const signInPassword = useId();

  return (
    <>
      <Lion />
      <form className="">
        <h2 className="">로그인</h2>
        <div className="">
          <div className="">
            <label htmlFor={signInId} className="">
              아이디
            </label>
            <input
              type="text"
              id={signInId}
              name={signInId}
              className=""
              placeholder="lion1234"
            />
          </div>
        </div>
        <div className="">
          <label htmlFor={signInPassword} className="">
            비밀번호
          </label>
          <input
            type="password"
            id={signInPassword}
            name={signInPassword}
            className=""
            placeholder="*********"
          />
        </div>
        <div className="">
          <span>비밀번호를 잊어버렸나요 ?</span>
          <span className="">회원가입</span>
        </div>

        <CircleButton
          type={'submit'}
          circleButtonText={'확인'}
          width={'140px'}
          height={'140px'}
        />
      </form>
    </>
  );
}

export default SignIn;
