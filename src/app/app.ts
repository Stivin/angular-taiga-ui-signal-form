import { Component, inject, signal } from '@angular/core';
import { TuiCard, TuiForm, TuiHeader } from '@taiga-ui/layout';
import {
  TuiButton,
  TuiCheckbox,
  TuiFilterByInputPipe,
  TuiGroup,
  TuiInput,
  TuiRadio,
  TuiSelectLike,
  TuiTitle,
} from '@taiga-ui/core';
import { form, FormField, required } from '@angular/forms/signals';
import {
  TuiBlock,
  TuiChevron,
  TuiComboBox,
  TuiDataListWrapper,
  TuiFileLike,
  TuiFiles,
  TuiInputChip,
  TuiInputDate,
  TuiInputNumber,
  TuiInputPhone,
  TuiInputSlider,
  TuiMultiSelect,
  TuiSelect,
  TuiSwitch,
  TuiTextarea,
} from '@taiga-ui/kit';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app',
  imports: [
    TuiForm,
    TuiHeader,
    TuiTitle,
    TuiInput,
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
  ],
  templateUrl: './app.html',
  styleUrl: './app.less',
})
export class App {
  protected readonly items: string[] = inject('Pythons' as any);
  protected readonly users = this.items.map((name, index) => ({ name, index }));
  protected readonly form = form(
    signal({
      string: '',
      textarea: '',
      number: null as number | null,
      date: null,
      phone: '',
      select: null as string | null,
      comboBox: null as string | null,
      chips: [] as string[],
      slider: 50_000,
      file: null as TuiFileLike | null,
      radio: 'option-1',
      switch: false,
      firstCheck: true,
      secondCheck: false,
    }),
    (path) => {
      required(path.string);
      required(path.textarea);
      required(path.number);
      required(path.date);
      required(path.phone);
      required(path.select);
      required(path.comboBox);
      required(path.chips);
      required(path.file);
    },
  );
}
