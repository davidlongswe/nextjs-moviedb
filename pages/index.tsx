import React, { useState } from "react";
import type { NextPage } from "next";

//Hooks
import { useFetchMovies } from "../api/fetchHooks";

//Components
import { Header, Spinner, Grid, Card, Hero } from "../components";

const HomePage: NextPage = () => {
  const [query, setQuery] = React.useState("");

  const { data, fetchNextPage, isLoading, isFetching, error } =
    useFetchMovies(query);

  console.log(data);

  return (
    <main className="relative h-screen overflow-y-scroll">
      <Header />
      <Hero />
      <Grid />
      <Card />
      <Spinner />
    </main>
  );
};

export default HomePage;
