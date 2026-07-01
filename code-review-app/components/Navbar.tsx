import Link from "next/link";

const menus = [
  {
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    title: "New Review",
    url: "/review/new",
  },
  {
    title: "History",
    url: "/review",
  },
  {
    title: "Settings",
    url: "/setting",
  },
];

const Navbar = () => {
  return (
    <div className="h-screen px-3 flex flex-col justify-between py-6">
      <div className="px-3">
        <div className="py-10  border-b border-white">CodeReview AI</div>
        <div className="pt-8">
          <ul className="flex flex-col gap-3">
            {menus.map((m) => (
              <li
                className="py-3 px-3.5 text-white-30 hover:bg-purple-15 hover:text-[#A78FFF] hover:font-semibold rounded-xl"
                key={m.title}
              >
                <Link href={m.url}>{m.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <AccountCard />
    </div>
  );
};

const AccountCard = () => {
  const user = {
    name: "John Dev",
    email: "john@dev.ca",
  };

  return (
    <div className="bg-[rgba(255,255,255,0.04)] py-4 px-6 rounded-2xl">
      <div className="flex gap-4 items-center">
        {/* Avatar Image */}
        <div className="w-8 h-8 rounded-full bg-[rgba(123,97,255,0.25)]"></div>
        {/* Name and Email */}
        <div>
          <div className="font-medium">{user.name}</div>
          <div className="text-[11px] text-white-30">{user.email}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
