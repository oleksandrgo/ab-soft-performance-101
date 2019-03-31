var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4",
        "ok": "0",
        "ko": "4"
    },
    "minResponseTime": {
        "total": "178",
        "ok": "-",
        "ko": "178"
    },
    "maxResponseTime": {
        "total": "527",
        "ok": "-",
        "ko": "527"
    },
    "meanResponseTime": {
        "total": "401",
        "ok": "-",
        "ko": "401"
    },
    "standardDeviation": {
        "total": "133",
        "ok": "-",
        "ko": "133"
    },
    "percentiles1": {
        "total": "449",
        "ok": "-",
        "ko": "449"
    },
    "percentiles2": {
        "total": "481",
        "ok": "-",
        "ko": "481"
    },
    "percentiles3": {
        "total": "518",
        "ok": "-",
        "ko": "518"
    },
    "percentiles4": {
        "total": "525",
        "ok": "-",
        "ko": "525"
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
        "count": 4,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "-",
        "ko": "2"
    }
},
contents: {
"req_get-token-3d622": {
        type: "REQUEST",
        name: "Get token",
path: "Get token",
pathFormatted: "req_get-token-3d622",
stats: {
    "name": "Get token",
    "numberOfRequests": {
        "total": "2",
        "ok": "0",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "178",
        "ok": "-",
        "ko": "178"
    },
    "maxResponseTime": {
        "total": "527",
        "ok": "-",
        "ko": "527"
    },
    "meanResponseTime": {
        "total": "353",
        "ok": "-",
        "ko": "353"
    },
    "standardDeviation": {
        "total": "175",
        "ok": "-",
        "ko": "175"
    },
    "percentiles1": {
        "total": "353",
        "ok": "-",
        "ko": "353"
    },
    "percentiles2": {
        "total": "440",
        "ok": "-",
        "ko": "440"
    },
    "percentiles3": {
        "total": "510",
        "ok": "-",
        "ko": "510"
    },
    "percentiles4": {
        "total": "524",
        "ok": "-",
        "ko": "524"
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
        "count": 2,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    }
}
    },"req_get-all-product-9f412": {
        type: "REQUEST",
        name: "Get all products",
path: "Get all products",
pathFormatted: "req_get-all-product-9f412",
stats: {
    "name": "Get all products",
    "numberOfRequests": {
        "total": "2",
        "ok": "0",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "433",
        "ok": "-",
        "ko": "433"
    },
    "maxResponseTime": {
        "total": "465",
        "ok": "-",
        "ko": "465"
    },
    "meanResponseTime": {
        "total": "449",
        "ok": "-",
        "ko": "449"
    },
    "standardDeviation": {
        "total": "16",
        "ok": "-",
        "ko": "16"
    },
    "percentiles1": {
        "total": "449",
        "ok": "-",
        "ko": "449"
    },
    "percentiles2": {
        "total": "457",
        "ok": "-",
        "ko": "457"
    },
    "percentiles3": {
        "total": "463",
        "ok": "-",
        "ko": "463"
    },
    "percentiles4": {
        "total": "465",
        "ok": "-",
        "ko": "465"
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
        "count": 2,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
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
