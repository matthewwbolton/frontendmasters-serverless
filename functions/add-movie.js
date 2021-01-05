// const { query } = require("./util/hasura");

exports.handler = async (event) => {
  console.log(event);
  return {
    statusCode: 200,
    body: "WIP",
  };
  const { id, title, tagline, poster } = JSON.parse(event.body);
};
