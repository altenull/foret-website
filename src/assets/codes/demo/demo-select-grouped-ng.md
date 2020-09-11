```html
<foret-select [id]="'grouped-select'" [legendText]="'select'">

  <optgroup label="Category 1">

    <option value="option1">option 1</option>

    <option value="option2" selected>option 2</option>

    <option value="option3" disabled>option 3</option>

  </optgroup>

  <optgroup label="Category 2" disabled>

    <option value="option4">option 4</option>

    <option value="option5">option 5</option>

    <option value="option6">option 6</option>

  </optgroup>

</foret-select>
```