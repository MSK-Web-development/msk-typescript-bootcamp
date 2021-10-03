const apiResponse: ApiResponseTuple = [
    "India",
    1947,
    true,
    ["Infosys", "HCL", "Wipro", "Mindtree"]
]

type ApiResponseTuple = [string, number, boolean, string[]];

function logIndianCompanies(
    apiResponse: ApiResponseTuple
) {
    const [country, year, isDeveloping, companies] = apiResponse;

    console.log("I am in " + country);
    console.log("India got freedom in " + year);
    if (isDeveloping) {
        console.log("India is a developing country");
    }
    console.log("Below are some of the IT companies");
    console.log("------------------------")
    companies.forEach(company => {
        console.log(company)
    });
}

logIndianCompanies(apiResponse);