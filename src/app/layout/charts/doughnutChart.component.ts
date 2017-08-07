import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'doughnut-charts',
    templateUrl: './doughnutChart.component.html',
    styleUrls: ['./doughnutChart.component.scss']
})


export class DoughnutChartComponent implements OnInit {
 public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData: number[] = [350, 450, 100];
    public doughnutChartType: string = 'doughnut';




    constructor() {
    }

    ngOnInit() {
    }

    }