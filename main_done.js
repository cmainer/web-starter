// $(document).ready(function() {
//   // $.ajax({
//   //   url: "http://rest-service.guides.spring.io/greeting"
//   $.ajax({
//     url: "https://reqres.in/api/users",
//     type: "GET"
//   }).then(function(data) {
//     debugger
//     // $('.greeting-id').append(data.id);
//     // $('.greeting-content').append(data.content);
//   });
// });

$.ajax({
  url: "https://reqres.in/api/users",
  type: "GET"
}).then(function(data) {
  debugger
  // $('.greeting-id').append(data.id);
  // $('.greeting-content').append(data.content);
});
