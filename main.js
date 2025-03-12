let data = [
    {
        department: "Applied Statistics and Data Science (ISRT)",
        seat: 55,
        firstMerit: 18,
        lastMerit: 2160,
        lmQuota: 2790
    },
    {
        department: "Department of Computer Science and Engineering",
        seat: 65,
        firstMerit: 63,
        lastMerit: 713,
        lmQuota: 1311
    },
    {
        department: "Department of Genetic Engineering and Biotechnology",
        seat: 30,
        firstMerit: 151,
        lastMerit: 879,
        lmQuota: 2800
    },
    {
        department: "Department of Pharmacy",
        seat: 85,
        firstMerit: 175,
        lastMerit: 1259,
        lmQuota: 6439
    },
    {
        department: "Department of physics",
        seat: 100,
        firstMerit: 210,
        lastMerit: 4095,
        lmQuota: 4942
    },
    {
        department: "Department of Software Engineering (IIT)",
        seat: 55,
        firstMerit: 298,
        lastMerit: 1221,
        lmQuota: 4104
    },
    {
        department: "Department of Electrical and Electronic Engineering",
        seat: 75,
        firstMerit: 353,
        lastMerit: 1763,
        lmQuota: 2596
    },
    {
        department: "Department of Robotics and Mechatronics engineering",
        seat: 30,
        firstMerit: 540,
        lastMerit: 1949,
        lmQuota: 3830
    },
    {
        department: "Department of Applied Chemistry and Chemical Engineering",
        seat: 60,
        firstMerit: 553,
        lastMerit: 1596,
        lmQuota: 1800
    },
    {
        department: "Department of Mathematics",
        seat: 130,
        firstMerit: 589,
        lastMerit: 3688,
        lmQuota: 8099
    },
    {
        department: "Department of Nuclear Engineering",
        seat: 30,
        firstMerit: 784,
        lastMerit: 2132,
        lmQuota: "N"
    },
    {
        department: "Department of Biochemistry and Molecular Biology",
        seat: 60,
        firstMerit: 1058,
        lastMerit: 2117,
        lmQuota: 8908
    },
    {
        department: "Department of Microbiology",
        seat: 40,
        firstMerit: 1089,
        lastMerit: 2233,
        lmQuota: 4344
    },
    {
        department: "Department of Applied Mathematics",
        seat: 60,
        firstMerit: 1163,
        lastMerit: 2672,
        lmQuota: 7319
    },
    {
        department: "Department of Chemistry",
        seat: 90,
        firstMerit: 1427,
        lastMerit: 2581,
        lmQuota: 8087
    },
    {
        department: "Department of Leather Engineering",
        seat: 50,
        firstMerit: 1823,
        lastMerit: 5324,
        lmQuota: "N"
    },
    {
        department: "Department of Psychology",
        seat: 80,
        firstMerit: 1941,
        lastMerit: 5026,
        lmQuota: 4860
    },
    {
        department: "Department of Zoology",
        seat: 80,
        firstMerit: 2112,
        lastMerit: 4518,
        lmQuota: 8612
    },
    {
        department: "Department of Oceanography",
        seat: 40,
        firstMerit: 2175,
        lastMerit: 5101,
        lmQuota: 8175
    },
    {
        department: "Department of Statistics",
        seat: 90,
        firstMerit: 2251,
        lastMerit: 3747,
        lmQuota: 9802
    },
    {
        department: "Department of Leather Products Engineering",
        seat: 50,
        firstMerit: 2252,
        lastMerit: 5465,
        lmQuota: "N"
    },
    {
        department: "Department of Disaster Science And Climate Resilience",
        seat: 40,
        firstMerit: 2385,
        lastMerit: 5206,
        lmQuota: 5137
    },
    {
        department: "Institute of Nutrition and Food Science",
        seat: 40,
        firstMerit: 2415,
        lastMerit: 3646,
        lmQuota: 8883
    },
    {
        department: "Department of Fisheries",
        seat: 40,
        firstMerit: 2493,
        lastMerit: 3636,
        lmQuota: 4559
    },
    {
        department: "Department of Botany",
        seat: 70,
        firstMerit: 2604,
        lastMerit: 4988,
        lmQuota: 8089
    },
    {
        department: "Department of Soil Water & Environment",
        seat: 100,
        firstMerit: 2820,
        lastMerit: 5246,
        lmQuota: 5713
    },
    {
        department: "Department of Footwear Engineering",
        seat: 50,
        firstMerit: 3054,
        lastMerit: 5445,
        lmQuota: "N"
    },
    {
        department: "Institute of Education and Research",
        seat: 41,
        firstMerit: 3100,
        lastMerit: 5375,
        lmQuota: 5743
    },
    {
        department: "Department of Geography and Environment",
        seat: 80,
        firstMerit: 3300,
        lastMerit: 5421,
        lmQuota: 6676
    },
    {
        department: "Department of Meteorology",
        seat: 30,
        firstMerit: 3546,
        lastMerit: 5257,
        lmQuota: "N"
    },
    {
        department: "Department of Geology",
        seat: 50,
        firstMerit: 3797,
        lastMerit: 5431,
        lmQuota: 5089
    }
   
];

function displayData(sortedData) {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    sortedData.forEach(item => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = item.department;
        row.insertCell().textContent = item.seat;
        row.insertCell().textContent = item.firstMerit;
        row.insertCell().textContent = item.lastMerit;
        row.insertCell().textContent = item.lmQuota;
    });
}

function sortData() {
    const sortOption = document.getElementById("sortOptions").value;
    let sortedData = [...data].sort((a, b) => a[sortOption] - b[sortOption]);
    displayData(sortedData);
}

displayData(data);
