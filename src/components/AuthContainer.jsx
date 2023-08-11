function AuthContainer({ children }) {
  return (
    <section className="bg-gray-50 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg bg-gray-800/10 shadow md:mt-0 sm:max-w-md xl:p-0  ">
          <div className="p-6  space-y-4 md:space-y-6 sm:p-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default AuthContainer;
