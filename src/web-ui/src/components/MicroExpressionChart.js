import React from "react";
import {
  VictoryZoomContainer,
  VictoryChart,
  VictoryArea,
  VictoryLine,
  VictoryAxis,
  VictoryGroup
} from "victory";
import timeToEmotionaCharFormatter from "../utils/timeToEmotionaCharFormatter";

// const state = {
//   zoomDomain: { x: [new Date(1990, 1, 1), new Date(2009, 1, 1)] }
// };


export default 
props => 
// ({
//   angryHistory
// }) => 
{

return (
  <div>
  <VictoryChart width={800} height={600} scale={{ x: "time"}}>
  
  <VictoryGroup color="blue">
    <VictoryLine
      data={timeToEmotionaCharFormatter(props.emotions.calmMap)}
      x="date"
      y="confidence"
    />
  </VictoryGroup>

  <VictoryGroup color="red">
    <VictoryLine
      data={timeToEmotionaCharFormatter(props.emotions.angryMap)}
      x="date"
      y="confidence"
    />
  </VictoryGroup>

  <VictoryGroup color="yellow">
    <VictoryLine
      data={timeToEmotionaCharFormatter(props.emotions.sadMap)}
      x="date"
      y="confidence"
    />
  </VictoryGroup>

  <VictoryGroup color="white">
    <VictoryLine
      data={timeToEmotionaCharFormatter(props.emotions.happyMap)}
      x="date"
      y="confidence"
    />
  </VictoryGroup>

  <VictoryGroup color="pink">
    <VictoryLine
      data={timeToEmotionaCharFormatter(props.emotions.suprisedMap)}
      x="date"
      y="confidence"
    />
  </VictoryGroup>

    <VictoryGroup color="purple">
    <VictoryLine
      data={timeToEmotionaCharFormatter(props.emotions.disgustedMap)}
      x="date"
      y="confidence"
    />
  </VictoryGroup>

  <VictoryGroup color="brown">
    <VictoryLine
      data={timeToEmotionaCharFormatter(props.emotions.fearMap)}
      x="date"
      y="confidence"
    />
  </VictoryGroup>
  <VictoryArea
        style={{
          data: { fill: "#FFFFFF" }
        }}
      />
  <VictoryAxis tickFormat={(x) => new Date(x).getSeconds()}         style={{
          axis: { fill: "#fff" },
          tickLabels: { fill: "#fff" }
        }}/>
</VictoryChart>

</div>
);
}
  //{/* // return (
  //   <VictoryChart */}
  //     polar
  //     theme={VictoryTheme.material}
  //     containerComponent={<VictoryContainer responsive={false} />}
  //     width={650}
  //     height={250}
  //     padding={{ top: 60, bottom: 60, left: 50, right: 180 }}
  //   >
  //     <VictoryLine
  //       data={props.data}
  //       style={{
  //         data: { fill: "#FF9900" }
  //       }}
  //       x="anger"
  //       y="confidence"
  //     />
  //   </VictoryChart>
  // );
//};
// {filterAndSortEmotions(face).map(({ emotion, confidence }) => (
//   <tr key={emotion}>
//     <td>{emotion}</td>
//     <td>{confidence}%</td>
//   </tr>
// ))}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       zoomDomain: { x: [new Date(1990, 1, 1), new Date(2009, 1, 1)] }
//     };
//   }

//   handleZoom(domain) {
//     this.setState({ zoomDomain: domain });
//   }

//   render() {
//     return (

//     );
//   }
// }

// ReactDOM.render(<App/>, mountNode);
