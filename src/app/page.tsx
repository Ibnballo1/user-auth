export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center h-screen justify-center gap-3">
        <h1>Welcome to the Home Page</h1>
        <p>Login in or Signup To Continue</p>
        <button className="p-2 bg-green-700 font-bold text-center text-white rounded-2xl">
          Get Started
        </button>
      </main>
    </>
  );
}
