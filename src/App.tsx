import ReactUniCalendar, { type CalendarInterface } from 'react-uni-calendar'
import 'react-uni-calendar/style.css'
import './App.css'
import jalaali from 'jalaali-js';
import Code from './Code';
import { FaGithub } from 'react-icons/fa';

class PersianCalendar implements CalendarInterface {
  year: number;
  month: number;
  day: number;

  constructor() {
    const today = new Date();
    const { jy, jm, jd } = jalaali.toJalaali(today);
    this.year = jy;
    this.month = jm;
    this.day = jd;
  }

  toGregorian(year: number, month: number, day: number) {
    const { gy, gm, gd } = jalaali.toGregorian(year, month, day);
    return { gyear: gy, gmonth: gm, gday: gd };
  }

  getDaysInMonth(year: number, month: number): number {
    return jalaali.jalaaliMonthLength(year, month);
  }

  getWeekDays(): string[] {
    return ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];
  }

  formatNumber(value: number | string): string {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return value
      .toString()
      .replace(/[0-9]/g, d => persianDigits[+d]);
  }

  getStartYear() {
    return this.year - 100;
  }

  getEndYear() {
    return this.year;
  }

  getMonths(): string[] {
    return ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند']
  }
}


function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-2">
        <h1 className="text-3xl font-bold flex items-center my-6">  React Universal Calendar </h1>

        <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl md:p-6 p-3">

          <a
            href="https://github.com/pejman-hkh/react-uni-calendar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="text-black text-4xl"
          >
            <FaGithub />
          </a>
          <div className="mt-2">
            <h2 className="text-2xl font-bold my-4">Gregorian Example</h2>
            <div className="flex items-center justify-center">
              <ReactUniCalendar />
            </div>

          </div>

          <div className="mt-2">
            <h2 className="text-2xl font-bold my-4">Persian (Jalaali) Example</h2>
            <div className="flex items-center justify-center">
              <ReactUniCalendar classDate={PersianCalendar} lang="fa" />
            </div>
          </div>

          <div className="mt-2">
            <h2 className="text-2xl font-bold my-4">Example Usage</h2>
            <div className="">
              <Code language="tsx" code={`
import ReactUniCalendar, { type CalendarInterface } from 'react-uni-calendar'
import 'react-uni-calendar/style.css'
import './App.css'
import jalaali from 'jalaali-js';

class PersianCalendar implements CalendarInterface {
  year: number;
  month: number;
  day: number;

  constructor() {
    const today = new Date();
    const { jy, jm, jd } = jalaali.toJalaali(today);
    this.year = jy;
    this.month = jm;
    this.day = jd;
  }

  toGregorian(year: number, month: number, day: number) {
    const { gy, gm, gd } = jalaali.toGregorian(year, month, day);
    return { gyear: gy, gmonth: gm, gday: gd };
  }

  getDaysInMonth(year: number, month: number): number {
    return jalaali.jalaaliMonthLength(year, month);
  }

  getWeekDays(): string[] {
    return ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];
  }

  formatNumber(value: number | string): string {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return value
      .toString()
      .replace(/[0-9]/g, d => persianDigits[+d]);
  }

  getStartYear() {
    return this.year - 100;
  }

  getEndYear() {
    return this.year;
  }

  getMonths(): string[] {
    return ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند']
  }
}

function App() {
   return (<ReactUniCalendar classDate={PersianCalendar} lang="fa" />);
}
`} />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
