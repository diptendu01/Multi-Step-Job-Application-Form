import { useFormContext } from "react-hook-form"

const SKILLS = [
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind",
  "Docker",
  "PostgreSQL",
]

export default function StepSkills() {
  const { watch, setValue } = useFormContext()
  const selected = watch("skills")

  const toggle = (skill: string) => {
    setValue(
      "skills",
      selected.includes(skill)
        ? selected.filter((s: string) => s !== skill)
        : [...selected, skill]
    )
  }

  return (
    <div className="flex flex-wrap gap-2">
      {SKILLS.map((skill) => (
        <button
          key={skill}
          onClick={() => toggle(skill)}
          className={`px-3 py-1 rounded border ${
            selected.includes(skill)
              ? "bg-blue-500 text-white"
              : "bg-gray-100"
          }`}
        >
          {skill}
        </button>
      ))}
    </div>
  )
}
