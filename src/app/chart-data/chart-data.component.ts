import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RepoState } from '../nrgx-store/repo.reducer';
import { Store } from '@ngrx/store';
import * as d3 from 'd3';

@Component({
  selector: 'app-chart-data',
  templateUrl: './chart-data.component.html',
  styleUrl: './chart-data.component.css'
})
export class ChartDataComponent implements OnInit, AfterViewInit {

  public barGraphData: Array<any>;

  private margin = { top: 30, right: 30, bottom: 70, left: 60 };
  private width = (window.screen.width - 600) - this.margin.left - this.margin.right;
  private height = (window.screen.height - 500) - this.margin.top - this.margin.bottom;

  constructor(private store: Store<RepoState>, private elemRef: ElementRef) {
    this.barGraphData = [];
  }
  private populateStars(repos) {
    this.barGraphData = repos.filter(item => {
      return item.stargazerCount > 0
    }).map(item => {
      return { "Name": item.name, "Stars": item.stargazerCount }
    })
    this.createChart();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.store.select('repos').subscribe(repos => {
      if (repos.length > 0) {
        this.populateStars(repos);
      }
    });
  }

  private createChart(): void {
    d3.select('svg').remove();

    const element = document.createElement('div');
    const data = this.barGraphData;

    const svg = d3.select(element).append('svg')
      .attr("width", "100%")
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + this.margin.left + "," + this.margin.top + ")");

    // appending the x axis
    const x = d3
      .scaleBand()
      .range([0, this.width])
      .padding(0.1)
      .domain(data.map(d => d.Name));
    svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // appending the y axis  
    const y = d3
      .scaleLinear()
      .rangeRound([this.height, 0])
      .domain([0, d3.max(data, d => d.Stars)]);
    svg.append("g")
      .call(d3.axisLeft(y));

    // appending the bars  
    svg.selectAll('repo-bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.Name))
      .attr('y', d => y(Math.round(d.Stars)))
      .attr('width', x.bandwidth())
      .attr('height', d => this.height - y(Math.round(d.Stars)))
      .attr("fill", "#69b3a2");

    this.elemRef.nativeElement.appendChild(element);
  }

}
