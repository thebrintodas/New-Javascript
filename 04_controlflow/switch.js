// switch (key) {
//   case value1:
//     // code block
//     break;
//   case value2:
//     // code block
//     break;
//   default:
//     // code block
// }

const month =3;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  default: // if no case matches
    console.log("Not sure");
    break
}  

const day = "Monday"
switch (day) {
  case "Monday":
    console.log("Start of the work week");
    break;
  case "Wednesday":
    console.log("Midweek day");
    break;
  case "Friday":
    console.log("End of the work week");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Just another day");
    break;
}

