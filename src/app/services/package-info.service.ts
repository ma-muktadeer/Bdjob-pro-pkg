import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PackageInfoService {

    private getPackageInfoUrl = '/api-bd/mybdjobs/v1/CandidateMonetization/Package-v03';
    // private getPackageInfoUrl = 'https://api.bdjobs.com/mybdjobs/v1/CandidateMonetization/Package-v03';
    private getUserCredentialsUrl = 'https://api.bdjobs.com/mybdjobsapi/v1/apps_getUserData.asp';
    private getFAQUrl = 'https://api.bdjobs.com/mybdjobsapi/v1/app-package-faq.asp';
    private getLastUpdateUrl = 'https://apiv1.bdjobs.com/mybdjobsapi/v1/apps_LastUpdate_pro.asp'

    //   private packageDetailsSubject = new BehaviorSubject<any | null>(null);
    private userInfoSubject = new BehaviorSubject<any>([]);

    //   packageDetails$ = this.packageDetailsSubject.asObservable();
    userInfo$ = this.userInfoSubject.asObservable();

    // Transformed data stream for components to consume
    //   transformedPackageData$ = this.packageDetails$.pipe(
    //     map((response: any | null) => {
    //       if (!response || !response.data) return [];
    //       return response.data;
    //     })
    //   );

    constructor(private http: HttpClient) { }

    getPackageDetails(userID: string, decoderID: string, requestDeviceType: string): Observable<any> {
        const params = new HttpParams()
            .set('userId', userID)
            .set('decoderId', decoderID)
            .set('deviceType', requestDeviceType);

        return this.http.post<any>(this.getPackageInfoUrl, params.toString(), {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
    }

    // getPackageDetails(userID: string, decoderID: string, requestDeviceType: string): Observable<any> {
    //     const params = new HttpParams()
    //         .set('userId', userID)
    //         .set('decoderId', decoderID)
    //         .set('deviceType', requestDeviceType);

    //     return this.http.post<any>(this.getPackageInfoUrl, params.toString(), {
    //         headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    //     }).pipe(
    //         tap(response => {
    //             this.packageDetailsSubject.next(response);
    //         })
    //     );
    // }

    getUserCredentialsFromCookies(cookie: string): Observable<any> {
        const params = new HttpParams().set('encid', cookie);
        return this.http.get(this.getUserCredentialsUrl, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            params: params
        });
    }

    getUserFAQData(): Observable<any> {
        return this.http.get(this.getFAQUrl)
    }


    getLastUpdateProDetails(userID: string, decoderID: string): Observable<any> {
        const params = new HttpParams()
            .set('userId', userID)
            .set('decodeId', decoderID);

        return this.http.post<any>(this.getLastUpdateUrl, params.toString(), {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).pipe(
            tap(response => {
                this.userInfoSubject.next(response.data);
            })
        );
    }

}
