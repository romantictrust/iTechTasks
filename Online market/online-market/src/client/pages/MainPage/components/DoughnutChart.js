import React, { PureComponent } from "react";
import { Doughnut } from "react-chartjs-2";

export default class DoughnutChart extends PureComponent {
  data = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ]
  };
  render() {
    const materials = this.props.data.materials;
    let counter = 0;
    let o;
    for (o of materials) {
      this.data.labels[counter] = o.material;
	  this.data.datasets[0].data[counter] = o.amount;
	  counter++;
    }
    return (
      <div>
        <Doughnut data={this.data} width={190} height={190} />
      </div>
    );
  }
}
