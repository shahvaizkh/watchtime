import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: MovieApiServiceService) {}

  bannerResult: any=[];
  trendingResult: any=[];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
  }

  // bannerdata
  bannerData() {
    this.service.bannerApiData().subscribe((res)=>{
      console.log(res, 'bannerresult#');
      this.bannerResult = res.results;
      
    })
  }

  // trendingdata
  trendingData() {
    this.service.trendingMovieApiData().subscribe((res)=>{
      console.log(res, 'trendingResult');
      this.trendingResult = res.results
      
    })
  }
}
