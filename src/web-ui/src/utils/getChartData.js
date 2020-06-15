export default (data, timeDetected) => {
  const output = {
    happyometer: null,
    aggregate: null,
    history: {
      calmMap : new Map(),
      angryMap : new Map(),
      sadMap : new Map(),
      happyMap : new Map(),
      suprisedMap : new Map(),
      fearMap : new Map(),
      disgustedMap : new Map()
    }
  };

  const totals = {
    angry: 0,
    calm: 0,
    happy: 0,
    sad: 0,
    surprised: 0,
    total: 0
  };

  // const emotion = {
  //   angry: 0,
  //   calm: 0,
  //   happy: 0,
  //   sad: 0,
  //   surprised: 0,
  //   fear: 0,
  //   disgusted: 0
  // };

  // const date = new Date(timeDetected); 
  // const dateInMillisecond = date.getTime(); 



  // todo breaking one chart with the hour histroy with thist logic. 
  data.results.forEach(function(result) {
    totals.angry += parseInt(result.angry, 10);
    totals.calm += parseInt(result.calm, 10);
    totals.happy += parseInt(result.happy, 10);
    totals.sad += parseInt(result.sad, 10);
    totals.surprised += parseInt(result.surprised, 10);
    totals.fear += parseInt(result.fear, 10);
    totals.disgusted += parseInt(result.disgusted, 10);

    // var timeDetected = new Date();
    // if (timeDetected.setSeconds(new Date().getSeconds() - 10));

    // output.history.set(
    //     dateInMillisecond, 
    //     {
    //       angry: parseInt(result.angry, 10),
    //       calm: parseInt(result.calm, 10),
    //       happy: parseInt(result.happy, 10),
    //       sad: parseInt(result.sad, 10),
    //       surprised: parseInt(result.surprised, 10),
    //       fear: parseInt(result.fear, 10),
    //       disgusted: parseInt(result.disgusted, 10)
    //     }
    //   );
    // output.history.angryMap.set(dateInMillisecond, parseInt(result.angry, 10));
    // output.history.sadMap.set(dateInMillisecond, parseInt(result.sad, 10));
    // output.history.happyMap.set(dateInMillisecond, parseInt(result.happy, 10));
    // output.history.disgustedMap.set(dateInMillisecond, parseInt(result.disgusted, 10));
    // output.history.suprisedMap.set(dateInMillisecond, parseInt(result.surprised, 10));
    // output.history.fearMap.set(dateInMillisecond, parseInt(result.fear, 10));
    // output.history.calmMap = new Map();
    // output.history.angryMap = new Map();
    // output.history.sadMap = new Map();
    // output.history.happyMap = new Map();
    // output.history.disgustedMap = new Map();
    // output.history.suprisedMap = new Map();
    // output.history.fearMap = new Map();
    output.history.calmMap.set(timeDetected, parseInt(result.calm, 10));
    output.history.angryMap.set(timeDetected, parseInt(result.angry, 10));
    output.history.sadMap.set(timeDetected, parseInt(result.sad, 10));
    output.history.happyMap.set(timeDetected, parseInt(result.happy, 10));
    output.history.disgustedMap.set(timeDetected, parseInt(result.disgusted, 10));
    output.history.suprisedMap.set(timeDetected, parseInt(result.surprised, 10));
    output.history.fearMap.set(timeDetected, parseInt(result.fear, 10));
    console.log("timeDetected" +timeDetected);
    console.log("calmMap" +output.history.calmMap.get(timeDetected));
    console.log("angryMap" +output.history.angryMap.get(timeDetected));
    console.log("sadMap" +output.history.sadMap.get(timeDetected));

    // if (!output.history.calmMap.has(dateInMillisecond)) {
    //   output.history.calmMap.set(dateInMillisecond, parseInt(result.calm, 10));
    //   // output.history.calmMap.set(dateInSeconds, [parseInt(result.calm, 10)]);
    // } else {
    //   output.history.calmMap.set(dateInMillisecond, output.history.calmMap[dateInMillisecond].push(parseInt(result.calm, 10)));
    // }

    // if (!output.history.angryMap.has(dateInMillisecond)) {
    //   output.history.angryMap.set(dateInMillisecond, [parseInt(result.angry, 10)]);
    // } else {
    //   output.history.angryMap.set(dateInMillisecond, output.history.angryMap[dateInMillisecond].push(parseInt(result.angry, 10)));
    // }

    // if (!output.history.sadMap.has(dateInMillisecond)) {
    //   output.history.sadMap.set(dateInMillisecond, [parseInt(result.sad, 10)]);
    // } else {
    //   output.history.sadMap.set(dateInMillisecond, output.history.sadMap[dateInMillisecond].push(parseInt(result.sad, 10)));
    // }

    // if (!output.history.happyMap.has(dateInMillisecond)) {
    //   output.history.happyMap.set(dateInMillisecond, [parseInt(result.happy, 10)]);
    // } else {
    //   output.history.happyMap.set(dateInMillisecond, output.history.happyMap[dateInMillisecond].push(parseInt(result.happy, 10)));
    // }

    // if (!output.history.suprisedMap.has(dateInMillisecond)) {
    //   output.history.suprisedMap.set(dateInMillisecond, [parseInt(result.surprised, 10)]);
    // } else {
    //   output.history.suprisedMap.set(dateInMillisecond, output.history.suprisedMap[dateInMillisecond].push(parseInt(result.suprisedMap, 10)));
    // }

    // if (!output.history.disgustedMap.has(dateInMillisecond)) {
    //   output.history.disgustedMap.set(dateInMillisecond, [parseInt(result.disgusted, 10)]);
    // } else {
    //   output.history.disgustedMap.set(dateInMillisecond, output.history.disgustedMap[dateInMillisecond].push(parseInt(result.disgusted, 10)));
    // }

    // if (!output.history.fearMap.has(dateInMillisecond)) {
    //   output.history.fearMap.set(dateInMillisecond, [parseInt(result.fear, 10)]);
    // } else {
    //   output.history.fearMap.set(dateInMillisecond, output.history.fearMap[dateInMillisecond].push(parseInt(result.fear, 10)));
    // }

    // output.history.angry.push(
    //   {
    //     date : date,
    //     confidence : parseInt(result.angry, 10)
    //   }
    // );
    // output.history.calm.push(
    //   {
    //     date : date,
    //     confidence : parseInt(result.calm, 10)
    //   }
    // );
    // // push(parseInt(result.calm, 10));
    // output.history.happy.push(
    //   {
    //     date : date,
    //     confidence : parseInt(result.happy, 10)
    //   }
    // );
    // output.history.happy.push(
    //   {
    //     date : date,
    //     confidence : parseInt(result.sad, 10)
    //   }
    // );
    // output.history.happy.push(
    //   {
    //     date : date,
    //     confidence : parseInt(result.surprised, 10)
    //   }
    // );
    // output.history.fear.push(
    //   {
    //     date : date,
    //     confidence : parseInt(result.fear, 10)
    //   }
    // );
    // output.history.disgusted.push(
    //   {
    //     date : date,
    //     confidence : parseInt(result.disgusted, 10)
    //   }
    // );

    totals.total =
      totals.angry +
      totals.calm +
      totals.happy +
      totals.sad +
      totals.surprised;
  });

  if (totals.total > 0) {
    output.happyometer = Math.floor(
      (totals.happy / totals.total) * 100 +
        (totals.surprised / totals.total) * 100
    );

    output.aggregate = {
      angry: Math.floor((totals.angry / totals.total) * 100),
      calm: Math.floor((totals.calm / totals.total) * 100),
      happy: Math.floor((totals.happy / totals.total) * 100),
      sad: Math.floor((totals.sad / totals.total) * 100),
      surprised: Math.floor((totals.surprised / totals.total) * 100)
    };
  }
  return output;
};
