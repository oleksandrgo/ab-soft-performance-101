var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "0",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "-",
        "ko": "77"
    },
    "maxResponseTime": {
        "total": "129",
        "ok": "-",
        "ko": "129"
    },
    "meanResponseTime": {
        "total": "103",
        "ok": "-",
        "ko": "103"
    },
    "standardDeviation": {
        "total": "26",
        "ok": "-",
        "ko": "26"
    },
    "percentiles1": {
        "total": "103",
        "ok": "-",
        "ko": "103"
    },
    "percentiles2": {
        "total": "116",
        "ok": "-",
        "ko": "116"
    },
    "percentiles3": {
        "total": "126",
        "ok": "-",
        "ko": "126"
    },
    "percentiles4": {
        "total": "128",
        "ok": "-",
        "ko": "128"
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
        "total": "2",
        "ok": "-",
        "ko": "2"
    }
},
contents: {
"req_get-all-product-9f412": {
        type: "REQUEST",
        name: "Get all products",
path: "Get all products",
pathFormatted: "req_get-all-product-9f412",
stats: {
    "name": "Get all products",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "129",
        "ok": "-",
        "ko": "129"
    },
    "maxResponseTime": {
        "total": "129",
        "ok": "-",
        "ko": "129"
    },
    "meanResponseTime": {
        "total": "129",
        "ok": "-",
        "ko": "129"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "129",
        "ok": "-",
        "ko": "129"
    },
    "percentiles2": {
        "total": "129",
        "ok": "-",
        "ko": "129"
    },
    "percentiles3": {
        "total": "129",
        "ok": "-",
        "ko": "129"
    },
    "percentiles4": {
        "total": "129",
        "ok": "-",
        "ko": "129"
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
        "count": 1,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    }
}
    },"req_checkout-6ff06": {
        type: "REQUEST",
        name: "Checkout",
path: "Checkout",
pathFormatted: "req_checkout-6ff06",
stats: {
    "name": "Checkout",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "-",
        "ko": "77"
    },
    "maxResponseTime": {
        "total": "77",
        "ok": "-",
        "ko": "77"
    },
    "meanResponseTime": {
        "total": "77",
        "ok": "-",
        "ko": "77"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "77",
        "ok": "-",
        "ko": "77"
    },
    "percentiles2": {
        "total": "77",
        "ok": "-",
        "ko": "77"
    },
    "percentiles3": {
        "total": "77",
        "ok": "-",
        "ko": "77"
    },
    "percentiles4": {
        "total": "77",
        "ok": "-",
        "ko": "77"
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
        "count": 1,
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
