import axios from "axios";

export const GetMatchingResult = (setMatchingData, day) => {
  axios
    .get(`/v1/api/match/result/${day}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.response.data);
      const data = [
        {
          matchInfoId: 27,
          groupName: "matched Group",
          groupImg: "https://example.com/matched-group-image.jpg",
          gender: "FEMALE",
          desiredGender: "MALE",
          matchDateTime: "2025-02-20T18:30:00",
          drink: "TWO_AND_HALF",
          people: 5,
          mood: "LONG",
          contact: "test@example.com",
        },
      ];
      setMatchingData(data);
    });
};
