import { useRouter } from "next/router";
import React from "react";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";

function ProfilePage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Header />
      <div className="container mt-30">
        <Profile
          fullName="Serhii Developer"
          username="serhijsav"
          about="Lorem ipsum"
          avatarUrl="https://s4.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg"
        />
      </div>
    </>
  );
}

export default ProfilePage;
