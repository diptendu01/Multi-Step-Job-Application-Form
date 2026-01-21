import { useFormContext } from "react-hook-form"
import { useState } from "react"

export default function StepReview() {
  const { getValues } = useFormContext()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const submit = async () => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSuccess(true)
    localStorage.removeItem("job-application")
  }

  if (success) {
    return <p className="text-green-600">Application submitted 🎉</p>
  }

  return (
    <div>
      <pre className="bg-gray-100 p-4 rounded text-sm">
        {JSON.stringify(getValues(), null, 2)}
      </pre>
      <button onClick={submit} className="btn-primary mt-4">
        {loading ? "Submitting..." : "Submit"}
      </button>
    </div>
  )
}
