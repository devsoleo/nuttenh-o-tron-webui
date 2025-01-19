export default function TaskBoxTarget({ step, type }) {
  return (
    <input type="text" id={ step + "-" + type + "-value" } placeholder="Entitée" />
  )
}