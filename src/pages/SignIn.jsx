import Lion from '@/components/Lion';
import styles from './SignIn.module.css';
import { useId } from 'react';
import CircleButton from '@/components/CircleButton/CircleButton';
import { pb } from '@/api/pocketbase';

function SignIn() {
  const signInId = useId();
  const signInPassword = useId();

  console.log(pb);

  return (
    <>
      <Lion />
      <form className={styles.signInForm}>
        <h2 className={styles.title}>로그인</h2>
        <div className={styles.inputWrapper}>
          <div className={styles.inputInnerWrapper}>
            <div className={`${styles.inputLabel} ${styles.inputId}`}>
              <label htmlFor={signInId} className={styles.inputLabel}>
                아이디
              </label>
              <input
                type="text"
                id={signInId}
                name={signInId}
                className={styles.input}
                placeholder="lion1234"
              />
            </div>
          </div>
          <div className={styles.inputInnerWrapper}>
            <label htmlFor={signInPassword} className={styles.inputLabel}>
              비밀번호
            </label>
            <input
              type="password"
              id={signInPassword}
              name={signInPassword}
              className={styles.input}
              placeholder="*********"
            />
          </div>
        </div>
        <div className={styles.helpWrapper}>
          <span>비밀번호를 잊어버렸나요 ?</span>
          <span className={styles.joinMembership}>회원가입</span>
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
