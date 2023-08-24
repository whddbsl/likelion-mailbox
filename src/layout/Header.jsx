import Lion from '@/components/Lion';
import Arrow from '@/components/Arrow';

function Header() {
  return (
    <header className="flex bg-lionGray w-[1280px] h-[100px] items-center">
      <div className="my-3.5 ml-10 mr-4">
        <Lion width={85} height={85} />
      </div>
      <div className=" flex w-[870px] h-[50px] text-[40px] font-bold items-end">
        <h1 className="mr-4">움직이는 우표를 골라보세요!</h1>
        <p className="text-xl">(feat.GIFHY)</p>
      </div>
      <Arrow />
    </header>
  );
}

export default Header;
