```jsx
<Select
  id="grouped-select"
  legendText="Select"
  selectedValue="option2">

  <SelectItemGroup labelText="Category 1">

    <SelectItem value="option1" labelText="option 1" />

    <SelectItem value="option2" labelText="option 2" />

    <SelectItem value="option3" labelText="option 3" disabled={true} />

  </SelectItemGroup>

  <SelectItemGroup labelText="Category 2" disabled={true}>

    <SelectItem value="option4" labelText="option 4" />

    <SelectItem value="option5" labelText="option 5" />

    <SelectItem value="option6" labelText="option 6" />

  </SelectItemGroup>

</Select>
```