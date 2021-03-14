
/**
 * @OnlyCurrentDoc
 */
function submitDataToStrapi(event) {
  
  console.log(event.namedValues)
  console.log("Got an event triggered from G-Forms. Data may be above")
  let resp = event.namedValues
  var formValues = event.namedValues;
  for (Key in formValues) {
    var key = Key;
    var data = formValues[Key][0];
    resp[key] = data
  };
  postData(resp);
}

function postData(resp){

  // Make a POST request with a JSON payload.
  let data = {
    ownerEmail: resp["Email Address"],
    name: resp["Project Name"],
    description: resp[""],
    submissionGuideReviewed: resp["Have you reviewed the submission guide?"],
    ownerName: resp["Project Name"],
    publicRepoUrl: resp["Public Repository URL"],
    sdg_categories: resp["Please identify which of the Sustainable Development Goals this project is relevant to: "].split(", "),
    project_categories: resp["What category best describes this project?"].split(", "),
    technology_stacks: resp["What technologies does your project use?"].split(", ")
  };

  let token = 'fake-token-to-simulate-security';
  let options = {
    'method' : 'post',
    'contentType': 'application/json',
    // Convert the JavaScript object to a JSON string.
    'payload' : JSON.stringify(data),
    headers: {"Authorization": "Bearer "+token}
  };

  let response = UrlFetchApp.fetch('http://4175ad1e5629.ngrok.io/projects', options);
  let output = response.getContentText()
  
  
  let json = JSON.parse(output)
  Logger.log(json.id);
}