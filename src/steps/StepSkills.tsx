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
            type="button"
                key={skill}
                onClick={() => toggle(skill)}
                    >

          {skill}
        </button>
      ))}
    </div>
  )
}
