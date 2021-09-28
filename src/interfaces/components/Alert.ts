export default interface Alert {
  message: string,
  type: "success" | "error" | "info" | "warning",
  onClose: () => void
}