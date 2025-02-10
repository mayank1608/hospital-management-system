import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) { }

    baseURL:string = `http://localhost:8000`;

    // headers = {headers: {
    //     'Content-Type': 'application/json'
    //   }}

    getPatients(): Observable<any> {
        return this.http.get<any>
        (`${this.baseURL}/api/patient/`);
    }

    addPatient(data: any): Observable<any> {
        return this.http.post<any> 
        (`${this.baseURL}/api/patient/add`, data);
    }

    updatePatient(id: string, data: any): Observable<any> {
        return this.http.put<any>(
            `${this.baseURL}/api/patient/${id}`,
            data
        );
    }

    deletePatient(id: string): Observable<any> {
        return this.http.delete<any>(
            `${this.baseURL}/api/patient/${id}`
        );
    }

    getDoctors(): Observable<any> {
        return this.http.get<any>(`${this.baseURL}/api/doctor/`);
    }

    addDoctor(data: any): Observable<any> {
        return this.http.post<any>(`${this.baseURL}/api/doctor/add`, data);
    }

    updateDoctor(id: string, data: any): Observable<any> {
        return this.http.put<any>(
            `${this.baseURL}/api/doctor/${id}`,
            data
        );
    }

    deleteDoctor(id: string): Observable<any> {
        return this.http.delete<any>(
            `${this.baseURL}/api/doctor/${id}`
        );
    }

    getAppointments(): Observable<any> {
        return this.http.get<any>
        (`${this.baseURL}/api/appointment/`);
    }

    addAppointment(data: any): Observable<any> {
        return this.http.post<any>(
            `${this.baseURL}/api/appointment/add`,
            data
        );
    }

    updateAppointment(id: string, data: any): Observable<any> {
        return this.http.put<any>(
            `${this.baseURL}/api/appointment/${id}`,
            data
        );
    }

    deleteAppointment(id: string): Observable<any> {
        return this.http.delete<any>(
            `${this.baseURL}/api/appointment/${id}`
        );
    }
}