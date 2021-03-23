import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {debug, error} from '../util/logging.util';

export interface IAppointment {
  id: number;
  start: string; // format YYYY-MM-DDTHH:mm:ss
  end: string; // format YYYY-MM-DDTHH:mm:ss
}

export interface IDatePickerSlot {
  id: number;
  startTime: string; // format HH:mm:ss
  endTime: string; // format HH:mm:ss
}

export interface IDatePickerItem {
  date: string; // format YYYY-MM-DD
  slots: IAppointment[];
}

export interface IDatePicker {
  items: IDatePickerItem[];
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient){
    
  }

  public getDatePicker(): IDatePicker {
    debug('Appointments are loaded');

    const datePicker: IDatePicker = {
      items : []
    }
    
    this.http.get("http://localhost:8080/appointments/v1").subscribe({
      next: (resultList: IDatePickerItem[]) => {
        resultList.forEach(element => {
          datePicker.items.push(element);          
        });
      },

      error: (error: any) => {
        error(error);
      }
    });

    return datePicker;
  }

}
