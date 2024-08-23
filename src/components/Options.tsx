function Options({ options }: { options: string[] }) {
  return options.map((option) => (
    <option value={option} key={option}>
      {option}
    </option>
  ))
}

export default Options
