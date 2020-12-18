var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "480",
        "ok": "0",
        "ko": "480"
    },
    "minResponseTime": {
        "total": "4043",
        "ok": "-",
        "ko": "4043"
    },
    "maxResponseTime": {
        "total": "4125",
        "ok": "-",
        "ko": "4125"
    },
    "meanResponseTime": {
        "total": "4090",
        "ok": "-",
        "ko": "4090"
    },
    "standardDeviation": {
        "total": "13",
        "ok": "-",
        "ko": "13"
    },
    "percentiles1": {
        "total": "4093",
        "ok": "-",
        "ko": "4093"
    },
    "percentiles2": {
        "total": "4098",
        "ok": "-",
        "ko": "4098"
    },
    "percentiles3": {
        "total": "4110",
        "ok": "-",
        "ko": "4110"
    },
    "percentiles4": {
        "total": "4116",
        "ok": "-",
        "ko": "4116"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 480,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.057",
        "ok": "-",
        "ko": "9.057"
    }
},
contents: {
"req_get-all-books-d4c21": {
        type: "REQUEST",
        name: "Get all books",
path: "Get all books",
pathFormatted: "req_get-all-books-d4c21",
stats: {
    "name": "Get all books",
    "numberOfRequests": {
        "total": "320",
        "ok": "0",
        "ko": "320"
    },
    "minResponseTime": {
        "total": "4048",
        "ok": "-",
        "ko": "4048"
    },
    "maxResponseTime": {
        "total": "4123",
        "ok": "-",
        "ko": "4123"
    },
    "meanResponseTime": {
        "total": "4091",
        "ok": "-",
        "ko": "4091"
    },
    "standardDeviation": {
        "total": "13",
        "ok": "-",
        "ko": "13"
    },
    "percentiles1": {
        "total": "4093",
        "ok": "-",
        "ko": "4093"
    },
    "percentiles2": {
        "total": "4099",
        "ok": "-",
        "ko": "4099"
    },
    "percentiles3": {
        "total": "4110",
        "ok": "-",
        "ko": "4110"
    },
    "percentiles4": {
        "total": "4115",
        "ok": "-",
        "ko": "4115"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 320,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.038",
        "ok": "-",
        "ko": "6.038"
    }
}
    },"req_get-specific-bo-827f8": {
        type: "REQUEST",
        name: "Get Specific book",
path: "Get Specific book",
pathFormatted: "req_get-specific-bo-827f8",
stats: {
    "name": "Get Specific book",
    "numberOfRequests": {
        "total": "160",
        "ok": "0",
        "ko": "160"
    },
    "minResponseTime": {
        "total": "4043",
        "ok": "-",
        "ko": "4043"
    },
    "maxResponseTime": {
        "total": "4125",
        "ok": "-",
        "ko": "4125"
    },
    "meanResponseTime": {
        "total": "4089",
        "ok": "-",
        "ko": "4089"
    },
    "standardDeviation": {
        "total": "14",
        "ok": "-",
        "ko": "14"
    },
    "percentiles1": {
        "total": "4092",
        "ok": "-",
        "ko": "4092"
    },
    "percentiles2": {
        "total": "4098",
        "ok": "-",
        "ko": "4098"
    },
    "percentiles3": {
        "total": "4109",
        "ok": "-",
        "ko": "4109"
    },
    "percentiles4": {
        "total": "4116",
        "ok": "-",
        "ko": "4116"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 160,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.019",
        "ok": "-",
        "ko": "3.019"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
