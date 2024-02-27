import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { CalendarModule } from 'primeng/calendar';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NotificationsService } from '../services/notifications.service';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RouterLink } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CoreService } from '../services/core.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    InputGroupModule,
    InputGroupAddonModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    RouterLink,
    MatSnackBarModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  notificationForm: FormGroup;

  statuses: string[] = ['Новый', 'Исполнен', 'Запланирован', 'Просрочен'];

  constructor(
    private notificationsService: NotificationsService,
    private fb: FormBuilder,
    private coreService: CoreService
  ) {
    this.notificationForm = this.fb.group({
      shortDescription: new FormControl(''),
      fullDescription: new FormControl(''),
      createdAt: new FormControl(''),
      completedAt: new FormControl(''),
      status: new FormControl(''),
    });
  }

  passedData: any = history.state.data;

  ngOnInit(): void {
    if (this.passedData) {
      this.notificationForm.patchValue({
        shortDescription: this.passedData.shortDescription,
        fullDescription: this.passedData.fullDescription,
        createdAt: this.passedData.createdAt,
        completedAt: this.passedData.completedAt,
        status: this.passedData.status,
      });
    }
  }

  onSubmit() {
    if (this.passedData) {
      this.notificationsService
        .updateNotification(this.passedData.id, this.notificationForm.value)
        .subscribe({
          next: () => {
            this.coreService.openSnackBar('Успешно изминено', 'Ok');
            history.back();
          },
          error: (error) => {
            console.log(error);
          },
        });
    } else {
      if (this.notificationForm.valid) {
        this.notificationsService
          .addNotification(this.notificationForm.value)
          .subscribe({
            next: () => {
              this.coreService.openSnackBar('Успешно добавлено', 'Ok');
              this.notificationForm.reset();
            },
            error: (error) => {
              console.log(error);
            },
          });
      }
    }
  }
}
