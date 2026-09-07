import { Component, inject, signal } from '@angular/core';
import { TuiCard, TuiForm, TuiHeader } from '@taiga-ui/layout';
import {
  TuiButton,
  TuiCheckbox,
  TuiError,
  TuiFilterByInputPipe,
  TuiInput,
  TuiNotification,
  TuiRadio,
  TuiSelectLike,
  TuiTitle,
} from '@taiga-ui/core';
import { disabled, form, FormField, FormRoot, minLength, required } from '@angular/forms/signals';
import {
  TuiButtonLoading,
  TuiChevron,
  TuiComboBox,
  TuiDataListWrapper,
  TuiFileLike,
  TuiFiles,
  TuiInputChip,
  TuiInputColor,
  TuiInputDate,
  TuiInputDateMulti,
  TuiInputDateRange,
  TuiInputDateTime,
  TuiInputInline,
  TuiInputMonth,
  TuiInputNumber,
  TuiInputPhone,
  TuiInputPhoneInternational,
  tuiInputPhoneInternationalOptionsProvider,
  TuiInputPin,
  TuiInputRange,
  TuiInputSlider,
  TuiInputTime,
  TuiInputYear,
  TuiMultiSelect,
  TuiRange,
  TuiRating,
  TuiSelect,
  TuiSwitch,
  TuiTextarea,
} from '@taiga-ui/kit';
import { JsonPipe } from '@angular/common';
import { TuiDay, TuiDayRange, TuiMonth, TuiTime } from '@taiga-ui/cdk';
import { TuiInputCard, type TuiCard as TuiCommerceCard, TuiInputCardGroup } from '@taiga-ui/addon-commerce';
import metadata from 'libphonenumber-js/mobile/metadata';
import { of } from 'rxjs';

interface FormModel {
  string: string;
  number: number | null;
  textarea: string;
  // Selects
  select: string | null;
  comboBox: string | null;
  chips: string[];
  // Dates
  date: TuiDay | null;
  time: TuiTime | null;
  dateTime: [TuiDay, TuiTime] | null;
  month: TuiMonth | null;
  year: number | null;
  dateMulti: TuiDay[];
  dateRange: TuiDayRange;
  // Phones
  phone: string;
  phoneInternational: string;
  // Cards
  card: string;
  expire: string;
  cvc: string;
  cardGroup: TuiCommerceCard | null;
  // Files
  file: TuiFileLike | null;
  // Pins
  pin: string;
  // Colors
  color: string;
  // Inlines
  inline: string;
  // Ratings
  rating: number;
  // Sliders
  inputSliderRange: [number, number];
  inputSlider: number;
  sliderRange: [number, number];
  slider: number;
  // Toggles
  firstCheck: boolean;
  secondCheck: boolean;
  radio: 'option-1' | 'option-2';
  switch: boolean;
}

const INITIAL_MODEL: FormModel = {
  string: '',
  number: null,
  textarea: '',
  // Selects
  select: null,
  comboBox: null,
  chips: [],
  // Dates
  date: null,
  time: null,
  dateTime: null,
  month: null,
  year: null,
  dateMulti: [new TuiDay(2025, 6, 6)],
  dateRange: new TuiDayRange(new TuiDay(2017, 0, 15), new TuiDay(2017, 0, 20)),
  // Phones
  phone: '',
  phoneInternational: '',
  // Cards
  card: '',
  expire: '',
  cvc: '',
  cardGroup: null,
  // Files
  file: null,
  // Pins
  pin: '',
  // Colors
  color: '',
  // Inlines
  inline: 'hello',
  // Ratings
  rating: 3,
  // Sliders
  inputSliderRange: [0.42, 123_456.78],
  inputSlider: 42,
  sliderRange: [40, 60],
  slider: 20,
  // Toggles
  firstCheck: true,
  secondCheck: false,
  radio: 'option-1',
  switch: false,
} as const;

@Component({
  selector: 'app',
  imports: [
    TuiForm,
    TuiHeader,
    TuiTitle,
    TuiInput,
    FormRoot,
    FormField,
    TuiCard,
    TuiInputNumber,
    TuiInputDate,
    TuiInputPhone,
    TuiCheckbox,
    JsonPipe,
    TuiButton,
    TuiRadio,
    TuiInputChip,
    TuiChevron,
    TuiSelectLike,
    TuiDataListWrapper,
    TuiMultiSelect,
    TuiSelect,
    TuiSwitch,
    TuiTextarea,
    TuiFiles,
    TuiInputSlider,
    TuiComboBox,
    TuiFilterByInputPipe,
    TuiInputPin,
    TuiInputColor,
    TuiButtonLoading,
    TuiError,
    TuiInputCard,
    TuiInputDateRange,
    TuiInputDateTime,
    TuiInputMonth,
    TuiInputYear,
    TuiInputTime,
    TuiInputInline,
    TuiInputDateMulti,
    TuiInputRange,
    TuiRange,
    TuiRating,
    TuiNotification,
    TuiInputCardGroup,
    TuiInputPhoneInternational,
  ],
  templateUrl: './app.html',
  styleUrl: './app.less',
  providers: [tuiInputPhoneInternationalOptionsProvider({ metadata: of(metadata) })],
})
export class App {
  protected readonly items: string[] = inject('Pythons' as any);
  protected readonly today = TuiDay.currentLocal();
  protected readonly currentYear = TuiMonth.currentLocal().year;
  protected readonly dateMin = new TuiDay(this.today.year, this.today.month, 1);
  protected readonly dateMax = this.dateMin.append({ month: 1, day: -1 });
  protected readonly yearMin = this.currentYear - 5;
  protected readonly yearMax = this.currentYear + 7;

  protected readonly form = form(
    signal({ ...INITIAL_MODEL }),
    (root) => {
      disabled(root, { when: () => this.form().submitting() });
      required(root.string);
      required(root.number);
      // required(root.textarea);
      // Selects
      required(root.select);
      required(root.comboBox);
      required(root.chips);
      // Dates
      required(root.date);
      required(root.time);
      required(root.dateTime);
      required(root.month);
      required(root.year);
      // required(root.dateMulti);
      // required(root.dateRange);
      // Phones
      required(root.phone);
      required(root.phoneInternational);
      // Files
      required(root.file);
      // Cards
      required(root.card);
      required(root.expire);
      required(root.cvc);
      required(root.cardGroup);
      // Pins
      required(root.pin);
      minLength(root.pin, 4);
      // Colors
      required(root.color);
    },
    {
      submission: {
        action: async (field) => {
          await new Promise((resolve) => setTimeout(resolve, 3000));
          field().reset({ ...INITIAL_MODEL });
        },
        onInvalid: (field) => {
          field().errorSummary()[0]?.fieldTree().focusBoundControl();
        },
      },
    },
  );

  protected resetForm(): void {
    this.form().reset({ ...INITIAL_MODEL });
  }

  protected removeFile(): void {
    this.form.file().value.set(null);
  }
}
