
import * as moment from 'moment';
import {IAppointment} from '../service/appointment.service';

type logLevel = 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';

const curry = (f: any): any => {
  return a => {
    return b => {
      return c => {
        return f(a, b, c);
      };
    };
  };
};

const logging = (date: Date, level: logLevel, message: string): void => {
  console.log('[' + moment(date).format('YYYY-MM-DD HH:mm:ss') + '][' + level + '] ' + message );
};

const dateLogging = curry(logging)(new Date());

export const debug = dateLogging('DEBUG');
export const info = dateLogging('INFO');
export const warn = dateLogging('WARN');
export const error = dateLogging('ERROR');

export const logAppointment = (appointment: IAppointment) => {
  const message = 'Appointment ' + appointment.id + ': ' + appointment.start + ' - ' + appointment.end;
  debug(message);
};
