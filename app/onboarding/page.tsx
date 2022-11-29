"use client";

// dependencies
import { useState } from "react";
// components
import Activities from "./Activities";
import Categories from "./Categories";
import Message from "./Message";
import Name from "./Name";
import ProgressDisplay from "./ProgressDisplay";
// types/enums
import type {
  UserData,
  ActivitiesData,
  CategoriesData,
} from "@shared/types/types";
import { OnboardingPages } from "@shared/types/enums";

const Onboarding = (): JSX.Element => {
  const [page, setPage] = useState<OnboardingPages>(OnboardingPages.GREETING);
  const [userData, setUserData] = useState<UserData>({ name: "" });
  const [categoriesData, setCategoriesData] = useState<CategoriesData>({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
  const [activitiesData, setActivitiesData] = useState<ActivitiesData>({
    first: {
      activity: "",
      time: "",
    },
    second: {
      activity: "",
      time: "",
    },
    third: {
      activity: "",
      time: "",
    },
    fourth: {
      activity: "",
      time: "",
    },
  });

  const nextPage = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  const saveOnboardingData = (): void => {
    const onboardingData = {
      user: {
        name: userData.name,
      },
      categories: categoriesData,
      activities: activitiesData,
    };
    console.log("SENDING...", JSON.stringify(onboardingData));
    // todo: send onboarding data to back end here
    nextPage();
  };

  return (
    <>
      <ProgressDisplay currentPage={page} />
      {page === OnboardingPages.GREETING && (
        <Message variant="greeting" nextPage={nextPage} />
      )}
      {page === OnboardingPages.NAME && (
        <Name nextPage={nextPage} setUserData={setUserData} />
      )}
      {page === OnboardingPages.CATEGORIES && (
        <Categories
          nextPage={nextPage}
          categoriesData={categoriesData}
          setCategoriesData={setCategoriesData}
          name={userData.name}
        />
      )}
      {page === OnboardingPages.ACTIVITIES && (
        <Activities
          categoriesData={categoriesData}
          activitiesData={activitiesData}
          setActivitiesData={setActivitiesData}
          handleSaveData={saveOnboardingData}
        />
      )}
      {page === OnboardingPages.FINISH && <Message variant="finish" />}
    </>
  );
};

export default Onboarding;
