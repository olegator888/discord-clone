import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      this is a protected route
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
