import { Component, inject, signal } from '@angular/core';
import { TuiCard, TuiForm, TuiHeader } from '@taiga-ui/layout';
import {
  TuiButton,
  TuiCheckbox,
  TuiError,
  TuiFilterByInputPipe,
  TuiGroup,
  TuiInput,
  TuiRadio,
  TuiSelectLike,
  TuiTitle,
} from '@taiga-ui/core';
import { disabled, form, FormField, FormRoot, minLength, required } from '@angular/forms/signals';
import {
  TuiBlock,
  TuiButtonLoading,
  TuiChevron,
  TuiComboBox,
  TuiDataListWrapper,
  TuiFileLike,
  TuiFiles,
  TuiInputChip,
  TuiInputColor,
  TuiInputDate,
  TuiInputDateRange,
  TuiInputDateTime,
  TuiInputInline,
  TuiInputMonth,
  TuiInputNumber,
  TuiInputPhone,
  TuiInputPin,
  TuiInputSlider,
  TuiInputTime,
  TuiInputYear,
  TuiMultiSelect,
  TuiSelect,
  TuiSwitch,
  TuiTextarea,
} from '@taiga-ui/kit';
import { JsonPipe } from '@angular/common';
import { TuiDay, TuiDayRange, TuiMonth, TuiTime } from '@taiga-ui/cdk';
import { TuiInputCard } from '@taiga-ui/addon-commerce';

interface FormModel {
  string: string;
  textarea: string;
  number: number | null;
  date: TuiDay | null;
  dateMulti: TuiDay[];
  dateRange: TuiDayRange;
  dateTime: [TuiDay, TuiTime];
  month: TuiMonth | null;
  year: number | null;
  time: TuiTime | null;
  phone: string;
  select: string | null;
  comboBox: string | null;
  chips: string[];
  slider: number;
  file: TuiFileLike | null;
  pin: string;
  color: string;
  card: string;
  expire: string;
  cvc: string;
  inline: string;
  radio: 'option-1' | 'option-2';
  switch: boolean;
  firstCheck: boolean;
  secondCheck: boolean;
}

const INITIAL_MODEL: FormModel = {
  string: '',
  textarea: '',
  number: null,
  date: null,
  dateMulti: [new TuiDay(2025, 6, 6)],
  dateRange: new TuiDayRange(new TuiDay(2017, 0, 15), new TuiDay(2017, 0, 20)),
  dateTime: [new TuiDay(2020, 8, 20), new TuiTime(19, 19)],
  month: null,
  year: null,
  time: null,
  phone: '',
  select: null,
  comboBox: null,
  chips: [],
  slider: 50_000,
  file: null,
  pin: '',
  color: '',
  card: '',
  expire: '',
  cvc: '',
  inline: 'hello',
  radio: 'option-1',
  switch: false,
  firstCheck: true,
  secondCheck: false,
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
    TuiGroup,
    TuiBlock,
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
  ],
  templateUrl: './app.html',
  styleUrl: './app.less',
})
export class App {
  protected readonly items: string[] = inject('Pythons' as any);

  protected readonly form = form(
    signal({ ...INITIAL_MODEL }),
    (root) => {
      disabled(root, { when: () => this.form().submitting() });
      required(root.string);
      // required(root.textarea);
      // required(root.number);
      // required(root.date);
      // required(root.dateMulti);
      // required(root.dateRange);
      // required(root.dateTime);
      required(root.month);
      // required(root.year);
      required(root.time);
      required(root.phone);
      required(root.select);
      required(root.comboBox);
      required(root.chips);
      required(root.file);
      required(root.pin);
      required(root.color);
      required(root.card);
      required(root.expire);
      required(root.cvc);
      minLength(root.pin, 4);
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
