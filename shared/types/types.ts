interface Activity {
  activity: string;
  time: string;
}

interface Category {
  name: string;
  activities: Activity[];
}

interface SavedActivity extends Activity {
  _id: string;
  activity: string;
  time: string;
}

interface SavedCategory extends Category {
  _id: string;
  name: string;
  activities: SavedActivity[];
}

type UserData = {
  name: string;
};

type ActivitiesData = {
  first: Activity;
  second: Activity;
  third: Activity;
  fourth: Activity;
};

type CategoriesData = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};

export type {
  Activity,
  Category,
  SavedActivity,
  SavedCategory,
  UserData,
  ActivitiesData,
  CategoriesData,
};
