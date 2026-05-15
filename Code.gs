function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var recipient = "frontierteam68@gmail.com";
    var subject = "Enquiry Form- Frontier Education";

    var body =
      "New enquiry received from Frontier Education website:\n\n" +
      "Full Name: " + data.fullName + "\n" +
      "Email: " + data.email + "\n" +
      "Phone: " + data.phone + "\n" +
      "Nationality: " + data.nationality + "\n" +
      "Preferred Course: " + data.course;

    MailApp.sendEmail(recipient, subject, body);

    return ContentService
      .createTextOutput(JSON.stringify({
        status: "success",
        message: "Email sent successfully"
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "error",
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
