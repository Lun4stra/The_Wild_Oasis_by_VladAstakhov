import Counter from "../_components/Counter";

export const metadata = {
  title: "Users",
};

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log(users);

  return (
    <div>
      <h1 className="text-4xl mb-8 text-accent-400 font-medium">Users</h1>
      <Counter users={users} />
      {users.map((user) => (
        <div key={user.id}>
          <h2 className="text-xl">{user.name}</h2>
        </div>
      ))}
    </div>
  );
}
