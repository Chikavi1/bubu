import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { format, startOfWeek, addDays } from 'date-fns';
import { es } from 'date-fns/locale';

@Component({
  selector: 'app-exercises',
  imports: [CommonModule,RouterModule],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.scss'
})
export class ExercisesComponent {

  daysOfThisWeek: any = [];

  exercises: any =
    [
      {
        "day": "monday",
        "exercises": [
          {
            "name": "Cardio",
            "type": "Running",
            "duration": "30 minutes",
            "intensity": "Moderate",
            "calories_burned": 300,
            "time": "7:00 AM",
            "notes": "Puedes variar la duración o la intensidad según tu nivel.",
            "equipment": "Running shoes"
          },
          {
            "name": "Strength Training",
            "type": "Weight lifting",
            "duration": "45 minutes",
            "intensity": "High",
            "calories_burned": 400,
            "time": "10:00 AM",
            "notes": "Enfócate en ejercicios de torso superior.",
            "equipment": "Dumbbells, Barbell"
          },
          {
            "name": "Stretching",
            "type": "Yoga",
            "duration": "20 minutes",
            "intensity": "Low",
            "calories_burned": 100,
            "time": "6:00 PM",
            "notes": "Ideal para relajarse después de entrenar.",
            "equipment": "Yoga mat"
          }
        ]
      },
      {
        "day": "tuesday",
        "exercises": [
          {
            "name": "Cardio",
            "type": "Cycling",
            "duration": "40 minutes",
            "intensity": "High",
            "calories_burned": 350,
            "time": "7:00 AM",
            "notes": "Asegúrate de mantener una velocidad constante.",
            "equipment": "Bicycle"
          },
          {
            "name": "Strength Training",
            "type": "Leg workout",
            "duration": "40 minutes",
            "intensity": "Moderate",
            "calories_burned": 350,
            "time": "12:00 PM",
            "notes": "Realiza sentadillas y lunges.",
            "equipment": "Resistance bands, Weights"
          },
          {
            "name": "Stretching",
            "type": "Pilates",
            "duration": "25 minutes",
            "intensity": "Low",
            "calories_burned": 120,
            "time": "6:00 PM",
            "notes": "Para mejorar flexibilidad y core.",
            "equipment": "Mat"
          }
        ]
      },
      {
        "day": "wednesday",
        "exercises": [
          {
            "name": "Cardio",
            "type": "Jump Rope",
            "duration": "15 minutes",
            "intensity": "High",
            "calories_burned": 200,
            "time": "7:00 AM",
            "notes": "Ideal para un entrenamiento rápido y eficaz.",
            "equipment": "Jump rope"
          },
          {
            "name": "Strength Training",
            "type": "Bodyweight exercises",
            "duration": "30 minutes",
            "intensity": "Moderate",
            "calories_burned": 250,
            "time": "10:00 AM",
            "notes": "Incluye push-ups, squats, and planks.",
            "equipment": "None"
          },
          {
            "name": "Stretching",
            "type": "Stretching routine",
            "duration": "20 minutes",
            "intensity": "Low",
            "calories_burned": 80,
            "time": "6:00 PM",
            "notes": "Estira cada grupo muscular por al menos 30 segundos.",
            "equipment": "None"
          }
        ]
      },
      {
        "day": "thursday",
        "exercises": [
          {
            "name": "Cardio",
            "type": "Swimming",
            "duration": "30 minutes",
            "intensity": "Moderate",
            "calories_burned": 300,
            "time": "7:00 AM",
            "notes": "Nada a un ritmo cómodo.",
            "equipment": "Swimsuit"
          },
          {
            "name": "Strength Training",
            "type": "Chest and Arms",
            "duration": "40 minutes",
            "intensity": "High",
            "calories_burned": 350,
            "time": "12:00 PM",
            "notes": "Realiza ejercicios como flexiones y press de banca.",
            "equipment": "Dumbbells, Bench"
          },
          {
            "name": "Stretching",
            "type": "Yoga",
            "duration": "30 minutes",
            "intensity": "Low",
            "calories_burned": 130,
            "time": "6:00 PM",
            "notes": "Focalízate en el estiramiento de espalda y piernas.",
            "equipment": "Yoga mat"
          }
        ]
      },
      {
        "day": "friday",
        "exercises": [
          {
            "name": "Cardio",
            "type": "Running",
            "duration": "30 minutes",
            "intensity": "High",
            "calories_burned": 300,
            "time": "7:00 AM",
            "notes": "Sigue un ritmo rápido para mejorar tu resistencia.",
            "equipment": "Running shoes"
          },
          {
            "name": "Strength Training",
            "type": "Back workout",
            "duration": "45 minutes",
            "intensity": "High",
            "calories_burned": 400,
            "time": "12:00 PM",
            "notes": "Incluye dominadas, remo y deadlifts.",
            "equipment": "Pull-up bar, Dumbbells"
          },
          {
            "name": "Stretching",
            "type": "Pilates",
            "duration": "20 minutes",
            "intensity": "Low",
            "calories_burned": 100,
            "time": "6:00 PM",
            "notes": "Concentra la rutina en los músculos centrales.",
            "equipment": "Mat"
          }
        ]
      },
      {
        "day": "saturday",
        "exercises": [
          {
            "name": "Cardio",
            "type": "Running",
            "duration": "30 minutes",
            "intensity": "High",
            "calories_burned": 300,
            "time": "7:00 AM",
            "notes": "Sigue un ritmo rápido para mejorar tu resistencia.",
            "equipment": "Running shoes"
          },
          {
            "name": "Strength Training",
            "type": "Back workout",
            "duration": "45 minutes",
            "intensity": "High",
            "calories_burned": 400,
            "time": "12:00 PM",
            "notes": "Incluye dominadas, remo y deadlifts.",
            "equipment": "Pull-up bar, Dumbbells"
          },
          {
            "name": "Stretching",
            "type": "Pilates",
            "duration": "20 minutes",
            "intensity": "Low",
            "calories_burned": 100,
            "time": "6:00 PM",
            "notes": "Concentra la rutina en los músculos centrales.",
            "equipment": "Mat"
          }
        ]
      },
      {
        "day": "sunday",
        "exercises": [
          {
            "name": "Cardio",
            "type": "Running",
            "duration": "30 minutes",
            "intensity": "High",
            "calories_burned": 300,
            "time": "7:00 AM",
            "notes": "Sigue un ritmo rápido para mejorar tu resistencia.",
            "equipment": "Running shoes"
          },
          {
            "name": "Strength Training",
            "type": "Back workout",
            "duration": "45 minutes",
            "intensity": "High",
            "calories_burned": 400,
            "time": "12:00 PM",
            "notes": "Incluye dominadas, remo y deadlifts.",
            "equipment": "Pull-up bar, Dumbbells"
          },
          {
            "name": "Stretching",
            "type": "Pilates",
            "duration": "20 minutes",
            "intensity": "Low",
            "calories_burned": 100,
            "time": "6:00 PM",
            "notes": "Concentra la rutina en los músculos centrales.",
            "equipment": "Mat"
          }
        ]
      }
    ]


  constructor() { 
    this.daysOfThisWeek = this.getWeekDays(new Date());
  }

  
  addDietsToCalendar() {
     console.log('calendario')
  }


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

}
