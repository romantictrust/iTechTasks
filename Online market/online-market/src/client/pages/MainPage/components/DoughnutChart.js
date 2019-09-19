import React, { PureComponent } from 'react'
import { Doughnut } from "react-chartjs-2";

const data = {
	labels: [
		'Wood',
		'Iron',
		'Oil'
	],
	datasets: [{
		data: [34, 45, 67],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

export default class DoughnutChart extends PureComponent {
    render() {
        return (
            <div>
                <Doughnut data={data} width={210} height={210} />
            </div>
        )
    }
}
