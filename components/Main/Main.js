import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import NewDepositBtn from "./NewDepositBtn";
import Deposits from "./Deposits/Deposits";

// import depositData from "../../data/DepositData.json";

const depositData = {
  active: [
    {
      property: {
        address: {
          street: "771 Lost Round",
          city: "Sacramento",
          state: "CA",
        },
        imageUrl: "lostround.png",
      },
      moveInDate: "25 February 2020",
      rent: 3000.0,
      deposit: {
        amount: 9000.0,
        type: "First, Last & Security",
      },
      status: {
        message: "Awaiting Bank Processing",
        level: 2,
      },
    },
    {
      property: {
        address: {
          street: "1491 Jagged Arbor",
          city: "San Antonio",
          state: "TX",
        },
        imageUrl: "jaggedarbor.png",
      },
      moveInDate: "12 March 2020",
      rent: 2300.0,
      deposit: {
        amount: 4600.0,
        type: "First & Last",
      },
      status: {
        message: "Payment Processed",
        level: 3,
      },
    },
  ],
  closed: [
    {
      property: {
        address: {
          street: "1694 Noble Cape",
          city: "Las Vegas",
          state: "NV",
        },
        imageUrl: "noblecape.png",
      },
      moveInDate: "3 February 2020",
      rent: 3300.0,
      deposit: {
        amount: 6900.0,
        type: "Complete",
      },
      status: {
        message: "Awaiting Bank Processing",
        level: 3,
      },
    },
    {
      property: {
        address: {
          street: "1141 Tawny Maze",
          city: "Raleigh",
          state: "NC",
        },
        imageUrl: "tawnymaze.png",
      },
      moveInDate: "12 January 2020",
      rent: 2500.0,
      deposit: {
        amount: 7500.0,
        type: "First, Last & Security",
      },
      status: {
        message: "Expired: No Payment Received",
        level: 1,
      },
    },
  ],
};

const Container = styled.div`
  width: auto;
  margin-left: 16rem;
  position: relative;
  padding: 0 4rem;
`;

const Main = () => {
  return (
    <Container>
      <Nav />
      <NewDepositBtn />
      <Deposits title="Active Deposits" count={2} data={depositData.active} />
      <Deposits title="Closed Deposits" count={8} data={depositData.closed} />
    </Container>
  );
};

export default Main;
