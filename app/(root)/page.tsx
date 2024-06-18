import HeaderBox from "@/components/ui/HeaderBox";
import RightSIdeBar from "@/components/ui/RightSIdeBar";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import React from "react";

function Home() {
  const loggedIn = {
    firstName: "Professor",
    lastName: "Watts",
    email: "watts@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSIdeBar
        user={loggedIn}
        transactions={[]}
        banks={[
          { currentBalance: 123.5 },
          { currentBalance: 1250.35 },
        ]}
      />
    </section>
  );
}

export default Home;
