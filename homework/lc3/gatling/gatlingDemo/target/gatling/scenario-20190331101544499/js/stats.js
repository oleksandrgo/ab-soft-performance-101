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
        "total": "121",
        "ok": "-",
        "ko": "121"
    },
    "maxResponseTime": {
        "total": "480",
        "ok": "-",
        "ko": "480"
    },
    "meanResponseTime": {
        "total": "327",
        "ok": "-",
        "ko": "327"
    },
    "standardDeviation": {
        "total": "132",
        "ok": "-",
        "ko": "132"
    },
    "percentiles1": {
        "total": "353",
        "ok": "-",
        "ko": "353"
    },
    "percentiles2": {
        "total": "411",
        "ok": "-",
        "ko": "411"
    },
    "percentiles3": {
        "total": "466",
        "ok": "-",
        "ko": "466"
    },
    "percentiles4": {
        "total": "477",
        "ok": "-",
        "ko": "477"
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
        "total": "318",
        "ok": "-",
        "ko": "318"
    },
    "maxResponseTime": {
        "total": "480",
        "ok": "-",
        "ko": "480"
    },
    "meanResponseTime": {
        "total": "399",
        "ok": "-",
        "ko": "399"
    },
    "standardDeviation": {
        "total": "81",
        "ok": "-",
        "ko": "81"
    },
    "percentiles1": {
        "total": "399",
        "ok": "-",
        "ko": "399"
    },
    "percentiles2": {
        "total": "440",
        "ok": "-",
        "ko": "440"
    },
    "percentiles3": {
        "total": "472",
        "ok": "-",
        "ko": "472"
    },
    "percentiles4": {
        "total": "478",
        "ok": "-",
        "ko": "478"
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
        "total": "121",
        "ok": "-",
        "ko": "121"
    },
    "maxResponseTime": {
        "total": "388",
        "ok": "-",
        "ko": "388"
    },
    "meanResponseTime": {
        "total": "255",
        "ok": "-",
        "ko": "255"
    },
    "standardDeviation": {
        "total": "134",
        "ok": "-",
        "ko": "134"
    },
    "percentiles1": {
        "total": "255",
        "ok": "-",
        "ko": "255"
    },
    "percentiles2": {
        "total": "321",
        "ok": "-",
        "ko": "321"
    },
    "percentiles3": {
        "total": "375",
        "ok": "-",
        "ko": "375"
    },
    "percentiles4": {
        "total": "385",
        "ok": "-",
        "ko": "385"
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
