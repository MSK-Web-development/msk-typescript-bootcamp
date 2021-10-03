const apiResponse = [
    "India",
    1947,
    true,
    ["Infosys", "HCL", "Wipro", "Mindtree"]
]

function logIndianCompanies(
    apiResponse
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