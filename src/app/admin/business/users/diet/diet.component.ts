import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { format, startOfWeek, addDays } from 'date-fns';
import { es } from 'date-fns/locale';

@Component({
  selector: 'app-diet',
  imports: [CommonModule],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.scss'
})
export class DietComponent {


 
   public diets =  [
  {
    "day": "monday",
    "meals": [
      {
        "name": "Desayuno",
        "food": ["1/2 taza de avena", "1 manzana picada","Canela al gusto","Agua o leche descremada"],
        "hour": "9:00 AM",
        "notes": "Puedes cambiar el pescado por pollo",
        "calories": 200
      },
      {
        "name": "Almuerzo",
        "food": ["Calabacitas guisadas con pollo desmenuzado y salsa de tomate", "1 taza de arroz blanco o integral"],
        "hour": "2:00 PM",
        "notes": "Puedes cambiar el pescado por pollo",
        "calories": 370
      },
      {
        "name": "Cena",
        "food": ["tostadas horneadas de frijoles (2) con aguacate y lechuga", "1 platano"],
        "hour": "8:00 PM",
        "notes": "Puedes cambiar el platano por manzana",
        "calories": 150
      }
    ]
  },
  {
    "day": "tuesday",
    "meals": [
      {
        "name": "Desayuno",
        "food": ["200 GR de pescado", "1 manzana"],
        "hour": "9:00 AM",
        "notes": "Puedes cambiar el pescado por pollo",
        "calories": 200
      },
      {
        "name": "Almuerzo",
        "food": ["200 GR de pescado", "1 manzana"],
        "hour": "2:00 PM",
        "notes": "Puedes cambiar el pescado por pollo",
        "calories": 370
      },
      {
        "name": "Cena",
        "food": ["100 GR de yogurth", "1 platano"],
        "hour": "8:00 PM",
        "notes": "Puedes cambiar el platano por manzana",
        "calories": 150
      }
    ]
  },
  {
    "day": "wednesday",
    "meals": [
      {
        "name": "Desayuno",
        "food": ["200 GR de pescado", "1 manzana"],
        "hour": "9:00 AM",
        "notes": "Puedes cambiar el pescado por pollo",
        "calories": 200
      },
      {
        "name": "Almuerzo",
        "food": ["200 GR de pescado", "1 manzana"],
        "hour": "2:00 PM",
        "notes": "Puedes cambiar el pescado por pollo",
        "calories": 370
      },
      {
        "name": "Cena",
        "food": ["100 GR de yogurth", "1 platano"],
        "hour": "8:00 PM",
        "notes": "Puedes cambiar el platano por manzana",
        "calories": 150
      }
    ]
  },
  {
    "day": "thursday",
    "meals": [
      {
        "name": "Desayuno",
        "food": ["200 GR de pescado", "1 manzana"],
        "hour": "9:00 AM",
        "notes": "Puedes cambiar el pescado por pollo",
        "calories": 200
      },
      {
        "name": "Almuerzo",
        "food": ["200 GR de pescado", "1 manzana"],
        "hour": "2:00 PM",
        "notes": "Puedes cambiar el pescado por pollo",
        "calories": 370
      },
      {
        "name": "Cena",
        "food": ["100 GR de yogurth", "1 platano"],
        "hour": "8:00 PM",
        "notes": "Puedes cambiar el platano por manzana",
        "calories": 150
      }
    ]
  },
  {
    "day": "friday",
    "meals": [
      {
        "name": "Desayuno",
        "food": ["200 GR de pescado", "1 manzana"],
        "hour": "9:00 AM",
        "notes": "Puedes cambiar el pescado por pollo",
        "calories": 200
      },
      {
        "name": "Almuerzo",
        "food": ["200 GR de pescado", "1 manzana"],
        "hour": "2:00 PM",
        "notes": "Puedes cambiar el pescado por pollo",
        "calories": 370
      },
      {
        "name": "Cena",
        "food": ["100 GR de yogurth", "1 platano"],
        "hour": "8:00 PM",
        "notes": "Puedes cambiar el platano por manzana",
        "calories": 150
      }
    ]
  },
  {
    "day": "saturday",
    "meals": [
      {
        "name": "Desayuno",
        "food": ["200 GR de pescado", "1 manzana"],
        "hour": "9:00 AM",
        "notes": "Puedes cambiar el pescado por pollo",
        "calories": 200
      },
      {
        "name": "Almuerzo",
        "food": ["200 GR de pescado", "1 manzana"],
        "hour": "2:00 PM",
        "notes": "Puedes cambiar el pescado por pollo",
        "calories": 370
      },
      {
        "name": "Cena",
        "food": ["100 GR de yogurth", "1 platano"],
        "hour": "8:00 PM",
        "notes": "Puedes cambiar el platano por manzana",
        "calories": 150
      }
    ]
  },
  {
    "day": "sunday",
    "meals": [
      {
        "name": "Desayuno",
        "food": ["200 GR de pescado", "1 manzana"],
        "hour": "9:00 AM",
        "notes": "Puedes cambiar el pescado por pollo",
        "calories": 200
      },
      {
        "name": "Almuerzo",
        "food": ["200 GR de pescado", "1 manzana"],
        "hour": "2:00 PM",
        "notes": "Puedes cambiar el pescado por pollo",
        "calories": 370
      },
      {
        "name": "Cena",
        "food": ["100 GR de yogurth", "1 platano"],
        "hour": "8:00 PM",
        "notes": "Puedes cambiar el platano por manzana",
        "calories": 150
      }
    ]
  }
]
  
   getWeekDays(startDate: Date): string[] {
    const startOfWeekDate = startOfWeek(startDate, { locale: es }); // Inicio de la semana
    const weekDays: string[] = [];

    for (let i = 0; i < 7; i++) {
      const currentDay = addDays(startOfWeekDate, i);
      const formattedDate = format(currentDay, "eeee, d 'de' MMMM", { locale: es });
      weekDays.push(formattedDate);
    }

    return weekDays;
   }
  
  daysOfThisWeek: any = [];

  constructor() {
    this.daysOfThisWeek = this.getWeekDays(new Date());
    console.log(this.daysOfThisWeek);
    
  }
  
  
  
}
