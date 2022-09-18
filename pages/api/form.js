export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log("body: ", body);

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json(body);
}
