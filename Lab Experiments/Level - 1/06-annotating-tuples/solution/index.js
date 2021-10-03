var apiResponse = [
    "India",
    1947,
    true,
    ["Infosys", "HCL", "Wipro", "Mindtree"]
];
function logIndianCompanies(apiResponse) {
    var country = apiResponse[0], year = apiResponse[1], isDeveloping = apiResponse[2], companies = apiResponse[3];
    console.log("I am in " + country);
    console.log("India got freedom in " + year);
    if (isDeveloping) {
        console.log("India is a developing country");
    }
    console.log("Below are some of the IT companies");
    console.log("------------------------");
    companies.forEach(function (company) {
        console.log(company);
    });
}
logIndianCompanies(apiResponse);
