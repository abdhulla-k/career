import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CareerModel } from './shared/models/career-model';
import { Banner } from './shared/models/banner';
import { JobDetails } from './shared/models/job-details';

@Injectable({
  providedIn: 'root'
})
export class CareerDataService {
  baseUrl = 'https://admin-edubex.ipixsolutions.net/api/v1/';

  constructor(
    private http: HttpClient
  ) { }

  // function to fetch career data
  getCareers() {
    return this.http.get<CareerModel>(`${this.baseUrl}career/list`)
  }

  // function to fetch banner
  getBanner() {
    return this.http.get<Banner>(`${this.baseUrl}cms/banner/get?slug=career-list`)
  }

  // fucntion to fetch job details
  getDetails(id: number) {
    return this.http.post<JobDetails>(
      `${this.baseUrl}career/detail`,
      { id: id }
    )
  }

  // function to apply for a job
  apply(formData: FormData) {
    return this.http.post(`${this.baseUrl}career/apply`, formData)
  }
}
