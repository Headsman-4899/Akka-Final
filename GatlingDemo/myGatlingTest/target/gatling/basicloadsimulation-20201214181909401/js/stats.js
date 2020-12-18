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
        "total": "4019",
        "ok": "-",
        "ko": "4019"
    },
    "maxResponseTime": {
        "total": "4139",
        "ok": "-",
        "ko": "4139"
    },
    "meanResponseTime": {
        "total": "4070",
        "ok": "-",
        "ko": "4070"
    },
    "standardDeviation": {
        "total": "19",
        "ok": "-",
        "ko": "19"
    },
    "percentiles1": {
        "total": "4070",
        "ok": "-",
        "ko": "4070"
    },
    "percentiles2": {
        "total": "4084",
        "ok": "-",
        "ko": "4084"
    },
    "percentiles3": {
        "total": "4100",
        "ok": "-",
        "ko": "4100"
    },
    "percentiles4": {
        "total": "4111",
        "ok": "-",
        "ko": "4111"
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
"req_get-all-video-g-6a25e": {
        type: "REQUEST",
        name: "Get all video games",
path: "Get all video games",
pathFormatted: "req_get-all-video-g-6a25e",
stats: {
    "name": "Get all video games",
    "numberOfRequests": {
        "total": "320",
        "ok": "0",
        "ko": "320"
    },
    "minResponseTime": {
        "total": "4021",
        "ok": "-",
        "ko": "4021"
    },
    "maxResponseTime": {
        "total": "4139",
        "ok": "-",
        "ko": "4139"
    },
    "meanResponseTime": {
        "total": "4068",
        "ok": "-",
        "ko": "4068"
    },
    "standardDeviation": {
        "total": "20",
        "ok": "-",
        "ko": "20"
    },
    "percentiles1": {
        "total": "4067",
        "ok": "-",
        "ko": "4067"
    },
    "percentiles2": {
        "total": "4083",
        "ok": "-",
        "ko": "4083"
    },
    "percentiles3": {
        "total": "4102",
        "ok": "-",
        "ko": "4102"
    },
    "percentiles4": {
        "total": "4110",
        "ok": "-",
        "ko": "4110"
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
    },"req_get-specific-ga-f2d93": {
        type: "REQUEST",
        name: "Get Specific Game",
path: "Get Specific Game",
pathFormatted: "req_get-specific-ga-f2d93",
stats: {
    "name": "Get Specific Game",
    "numberOfRequests": {
        "total": "160",
        "ok": "0",
        "ko": "160"
    },
    "minResponseTime": {
        "total": "4019",
        "ok": "-",
        "ko": "4019"
    },
    "maxResponseTime": {
        "total": "4123",
        "ok": "-",
        "ko": "4123"
    },
    "meanResponseTime": {
        "total": "4072",
        "ok": "-",
        "ko": "4072"
    },
    "standardDeviation": {
        "total": "18",
        "ok": "-",
        "ko": "18"
    },
    "percentiles1": {
        "total": "4074",
        "ok": "-",
        "ko": "4074"
    },
    "percentiles2": {
        "total": "4084",
        "ok": "-",
        "ko": "4084"
    },
    "percentiles3": {
        "total": "4097",
        "ok": "-",
        "ko": "4097"
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
