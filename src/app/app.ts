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
  TuiInputNumber,
  TuiInputPhone,
  TuiInputPin,
  TuiInputSlider,
  TuiMultiSelect,
  TuiSelect,
  TuiSwitch,
  TuiTextarea,
} from '@taiga-ui/kit';
import { JsonPipe } from '@angular/common';
import { TuiDay } from '@taiga-ui/cdk';

interface FormModel {
  string: string;
  textarea: string;
  number: number | null;
  date: TuiDay | null;
  phone: string;
  select: string | null;
  comboBox: string | null;
  chips: string[];
  slider: number;
  file: TuiFileLike | null;
  pin: string;
  color: string;
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
  phone: '',
  select: null,
  comboBox: null,
  chips: [],
  slider: 50_000,
  file: null,
  pin: '',
  color: '',
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
      required(root.phone);
      required(root.select);
      required(root.comboBox);
      required(root.chips);
      required(root.file);
      required(root.pin);
      required(root.color);
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
