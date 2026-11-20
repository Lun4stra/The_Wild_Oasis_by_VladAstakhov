export const metadata = {
  title: "Guest area",
};

export default function Page() {
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Welcome to your guest area
      </h2>
      <p className="text-lg text-primary-200">
        Here you will be able to manage your reservations and profile.
      </p>
    </div>
  );
}
