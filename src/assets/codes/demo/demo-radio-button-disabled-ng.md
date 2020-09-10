```html
<foret-radio-button-group
  [legendText]="'Radio Button'"
  [checkedValue]="'disabledRadioButton2'"
  [disabled]="true">

  <foret-radio-button
    [id]="'disabled-radio-button-1'"
    [labelText]="'option 1'"
    [value]="'disabledRadioButton1'">
  </foret-radio-button>

  <foret-radio-button
    [id]="'disabled-radio-button-2'"
    [labelText]="'option 2'"
    [value]="'disabledRadioButton2'">
  </foret-radio-button>

  <foret-radio-button
    [id]="'disabled-radio-button-3'"
    [labelText]="'option 3'"
    [value]="'disabledRadioButton3'">
  </foret-radio-button>

</foret-radio-button-group>
```