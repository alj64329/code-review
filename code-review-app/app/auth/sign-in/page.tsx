import SignInComponent from "@/components/SignIn.component";

const SignIn = () => {
  return (
    <main className="flex">
      <div className="hidden lg:block flex-1 bg-[#111318]">
        <div className="flex flex-col justify-center items-center h-full">
          <h2 className="font-bold text-white text-3xl text-center">
            Welcome back.
          </h2>
        </div>
      </div>
      <div className=" lg:flex-1 w-full">
        <div className="flex justify-center items-center h-[100vh]">
          <SignInComponent />
        </div>
      </div>
    </main>
  );
};

export default SignIn;
