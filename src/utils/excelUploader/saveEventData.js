import fs from "fs";

export const saveEventData = (eventData) => {
  const eventDataJSON = JSON.stringify(eventData);
  fs.writeJSON("eventData.json", eventDataJSON, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Event data saved to eventData.json");
    }
  });
};
