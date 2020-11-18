import { SET_FEED } from "./types";

export const fetchFeeds = () => {
  const feeds = [
    {
      liked_by: [
        {
          user: "Asrar",
          gender: "Female",
          image: "profile.png",
        },
      ],
      description: "today's outfit",
      created: "2020/11/18",
      modified: "",
      owner: [{ user: "Hend", gender: "Female", image: "profile.png" }],
    },
    {
      liked_by: [
        {
          user: "Salma",
          gender: "Female",
          image: "profile.png",
        },
      ],
      description: "today's outfit2",
      created: "2020/11/16",
      modified: "",
      owner: [{ user: "Asrar", gender: "Female", image: "profile.png" }],
    },
    {
      liked_by: [
        {
          user: "Lubna",
          gender: "Female",
          image: "profile.png",
        },
      ],
      description: "today's3 outfit",
      created: "2020/11/17",
      modified: "",
      owner: [{ user: "Hend", gender: "Female", image: "profile.png" }],
    },
  ];
  return {
    type: SET_FEED,
    payload: feeds,
  };
};
