import {Component, OnInit} from '@angular/core';
import {AppointmentService, IDatePicker} from './service/appointment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public datePicker: IDatePicker = {
    items: []
  };

  public ngOnInit(): void {
    this.datePicker = this.appointmentService.getDatePicker();
  }

  constructor(public appointmentService: AppointmentService) {

  }

}
