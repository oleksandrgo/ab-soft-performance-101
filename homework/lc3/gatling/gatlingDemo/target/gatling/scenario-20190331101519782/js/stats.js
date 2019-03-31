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
        "total": "315",
        "ok": "-",
        "ko": "315"
    },
    "maxResponseTime": {
        "total": "531",
        "ok": "-",
        "ko": "531"
    },
    "meanResponseTime": {
        "total": "452",
        "ok": "-",
        "ko": "452"
    },
    "standardDeviation": {
        "total": "85",
        "ok": "-",
        "ko": "85"
    },
    "percentiles1": {
        "total": "482",
        "ok": "-",
        "ko": "482"
    },
    "percentiles2": {
        "total": "517",
        "ok": "-",
        "ko": "517"
    },
    "percentiles3": {
        "total": "528",
        "ok": "-",
        "ko": "528"
    },
    "percentiles4": {
        "total": "530",
        "ok": "-",
        "ko": "530"
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
        "total": "315",
        "ok": "-",
        "ko": "315"
    },
    "maxResponseTime": {
        "total": "531",
        "ok": "-",
        "ko": "531"
    },
    "meanResponseTime": {
        "total": "423",
        "ok": "-",
        "ko": "423"
    },
    "standardDeviation": {
        "total": "108",
        "ok": "-",
        "ko": "108"
    },
    "percentiles1": {
        "total": "423",
        "ok": "-",
        "ko": "423"
    },
    "percentiles2": {
        "total": "477",
        "ok": "-",
        "ko": "477"
    },
    "percentiles3": {
        "total": "520",
        "ok": "-",
        "ko": "520"
    },
    "percentiles4": {
        "total": "529",
        "ok": "-",
        "ko": "529"
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
        "total": "451",
        "ok": "-",
        "ko": "451"
    },
    "maxResponseTime": {
        "total": "512",
        "ok": "-",
        "ko": "512"
    },
    "meanResponseTime": {
        "total": "482",
        "ok": "-",
        "ko": "482"
    },
    "standardDeviation": {
        "total": "31",
        "ok": "-",
        "ko": "31"
    },
    "percentiles1": {
        "total": "482",
        "ok": "-",
        "ko": "482"
    },
    "percentiles2": {
        "total": "497",
        "ok": "-",
        "ko": "497"
    },
    "percentiles3": {
        "total": "509",
        "ok": "-",
        "ko": "509"
    },
    "percentiles4": {
        "total": "511",
        "ok": "-",
        "ko": "511"
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
