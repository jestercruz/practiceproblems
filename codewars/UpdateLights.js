/*
This function contains an object with the key/value pairs and the current is used as the
key to access the value which is then returned.
*/

const updateLight = (current) =>
  ({
    green: "yellow",
    yellow: "red",
    red: "green",
  }[current]);

console.log(updateLight("green"));
